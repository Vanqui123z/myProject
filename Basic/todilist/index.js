$(document).ready(function () {
  $("#toggleMode").change(function () {
    $("body").toggleClass("dark-mode");
  });
  const today = new Date();
  $("#dayList")[0].innerText=`Thứ ${today.getDate()} , ${today.getDay()} / ${today.getMonth()} / ${today.getFullYear()}`
  console.log()


// tạo hàm calender_title
function calender(year, month) {
  const tablebody = $("#calendar_body")[0];
  const table_title = $("#calender_title")[0];

  // lấy ngày đầu tiên và số ngày trong tháng
  const firstDay = new Date(year, month, 1  ).getDay();
  const dayOfMonth = new Date(year, month + 1, 0).getDate();

  // tạo 1 mảng chứa tháng để hiển thị
  const months = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];

  table_title.innerText=`${months[month]} , ${year}`
  // tạo date=1 là ngày đầu tiên trong tháng
  let date = 1;
  // tạo for tối đa 6 hàng, 7 cột :

  for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      const cell = document.createElement("td");
      console.log(firstDay);
      if (i === 0 && j < firstDay) {
        console.log(firstDay);
        cell.classList.add("empty");
      } else if(date > dayOfMonth){
        break;
      } else{
        cell.innerText = date;


        const today = new Date();
        if(
            date === today.getDate()&&
           year === today.getFullYear() &&
           month === today.getMonth() 
        ){
            cell.classList.add("today")
        }

        date++;
      }

      row.appendChild(cell);
    }
    tablebody.appendChild(row);
    if(date > dayOfMonth){break;}
  }
}
const day = new Date();
calender(day.getFullYear(), day.getMonth());



});