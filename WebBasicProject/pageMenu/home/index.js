// số đếm
var hoursDisplay = document.getElementById("hours");
var minutesDisplay = document.getElementById("minutes");
var secondsDisplay = document.getElementById("seconds");

function SetCountdown(hours, minutes, seconds) {
    var totalSeconds = hours * 3600 + minutes * 60 + seconds;

    var Countdown = setInterval(function() {
        let hour = Math.floor(totalSeconds / 3600);
        let minute = Math.floor((totalSeconds % 3600) / 60);
        let second = totalSeconds % 60;

        hoursDisplay.innerHTML = pad(hour);
        minutesDisplay.innerHTML = pad(minute);
        secondsDisplay.innerHTML = pad(second);

        totalSeconds--;

        if (totalSeconds < 0) {
            clearInterval(Countdown);
        }
    }, 1000);
}

function pad(para) {
    return (para < 10 ? "0" : "") + para;
}

SetCountdown(1, 20, 10);

// copy Vorcher


var copyVorcher = document.querySelectorAll(".copyVorcher")
copyVorcher.forEach(function (button) {
    button.addEventListener("click",function(){
    var copied =button.parentNode.querySelector('#nameVorcher');
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

$(document).ready(function(){
    $(".img").click(function(){
        window.location.href = "../sp/index.html";
    });
});
    


