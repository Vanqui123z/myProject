var copyVorcher = document.querySelectorAll(".vocher")
copyVorcher.forEach(function (button) {
    button.addEventListener("click",function(){
    var copied =button.querySelector('#nameVorcher');
    if(copied){
        copyToClipboard(copied.textContent);
        alert("mã " +copied.textContent +" đã được copy")
    }else{
        alert("mã" +copied.textContent + "đã hết")
    }
    })    
});

function copyToClipboard(copyText) {
    var textArea = document.createElement("textarea");
    textArea.value = copyText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea)

}
function toggleOpacity(button) {
    var buttons = document.querySelectorAll('.select');
    buttons.forEach(function(btn) {
        if (btn === button) {
            if (btn.classList.contains('selectHover')) {
                btn.classList.remove('selectHover');
            } else {
                btn.classList.add('selectHover');
            }
        } else {
            btn.classList.remove('selectHover');
        }
    });
}