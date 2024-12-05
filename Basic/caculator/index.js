const arrayOperation = ["+", "-", "x", "/"];
const arrayCharacter = ["(", ")", "=", ".", "DEL", "D_A"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const allCharac = [...arrayOperation, ...arrayCharacter];
const all = [...numbers, ...allCharac];

const thead = document.querySelector("thead");
const tbody = document.querySelector("tbody");
const displayInner = document.querySelector(".displayInner");
const displayResult = document.querySelector(".displayResult");

// Hàm tạo các hàng và cột cho bảng
function createTableRows(container, items, columns = 5) {
  const rows = Math.ceil(items.length / columns); // Tính số hàng
  for (let i = 0; i < rows; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < columns; j++) {
      const index = i * columns + j;
      if (index >= items.length) break;

      const cell = document.createElement("th");
      const button = document.createElement("button");
      button.innerText = items[index];
      button.addEventListener("click", () => handleButton(button.innerText));
      cell.appendChild(button);
      row.appendChild(cell);
    }
    container.appendChild(row);
  }
}

function handleButton(value) {
  const current = displayInner.innerText;
  switch (value) {
    case "=":
      try {
        const result = eval(current.replace("x", "*"));
        displayResult.innerText = Number.isFinite(result) ? result : "error";
      } catch (error) {
        displayResult.innerText = "error";
      }
      displayInner.innerHTML="";
      
      break;
      
    case "DEL":
      displayInner.innerText = current.slice(0, -1);
      break;
    case "D_A":
      displayInner.innerText = "";
      break;
    default:
      displayInner.innerText += value;
      break;
  }
}

function isValidInput(current, value){
  const lastValue = current.slice(-1);
  if(arrayOperation.include(value)){
    return false
  }
  if(lastValue=="." && value=="." ){
    return false;
  }
  if(value== "("){
    const openBracket = (current.mathch("/\(/\g)") || []).length;
    const closeBraket = (current.mathch("/\)\g") || []).length;
    if(openBracket <= closeBraket){
      return false;
    }
  }
  return true;
}

document.addEventListener("keydown",(e)=>{
  e.preventDefault();
    const key = e.key;
    console.log(key)
    const keyActive={
      "Enter": "=",
      "=":"=",
      "Backspace":"DEL",
      "(":"(",
      ")":")",
    }

    if(numbers.includes(Number(key))){
      handleButton(key)
    }else if(arrayOperation.includes(key.replace("*","x"))){
      handleButton(key.replace("*","x"))

    }else if(keyActive[key]){
      handleButton(keyActive[key])
    }





})

// Tạo các nút trong thead và tbody
createTableRows(thead, allCharac);
createTableRows(tbody, numbers);
