$(document).ready(function () {
    $(".btnDeleteSp").click(function () {
        $(this).parent().remove()

    });

    // +-sp
    $(".add").click(function () {
        var number =$(this).parent().find(".number")
        var currentValue =parseInt(number.text())
        currentValue= currentValue+1;
        ($(this).parent().find(".number").text(currentValue));

    });

    $(".sub").click(function () {
        var number =$(this).parent().find(".number")
        var currentValue =parseInt(number.text())
        if (currentValue > 1) {
            currentValue= currentValue-1;
            ($(this).parent().find(".number").text(currentValue));

        }
    });

})
   
/*
// thêm header và footer vào từng trang web
*/

      // Định nghĩa hàm loadHTML với hai tham số: url và elementId
function loadHTML(url, elementId) {
    // Tạo một đối tượng XMLHttpRequest mới
    var xhttp = new XMLHttpRequest();

    // Thiết lập hàm được gọi mỗi khi trạng thái của yêu cầu thay đổi
    xhttp.onreadystatechange = function() {
        // Kiểm tra xem yêu cầu đã hoàn tất và thành công hay không
        if (this.readyState == 4 && this.status == 200) {
            // Chèn nội dung của yêu cầu vào phần tử có ID là elementId
            document.getElementById(elementId).innerHTML = this.responseText;
            
        }
    };

    // Mở kết nối đến url để nhận nội dung của tệp HTML bằng phương thức GET
    xhttp.open("GET", url, true);

    // Gửi yêu cầu tới máy chủ
    xhttp.send();
}

// Gọi hàm loadHTML ba lần để tải nội dung của ba tệp HTML khác nhau
loadHTML('../../Synthetic/header.html', 'header'); // Tải header.html và chèn vào phần tử có ID là 'header'
loadHTML('../../Synthetic/footer.html', 'footer'); // Tải footer.html và chèn vào phần tử có ID là 'footer'
loadHTML('../../../Synthetic/headerDM.html', 'headerDM'); // Tải header.html và chèn vào phần tử có ID là 'headerDM'
loadHTML('../../../Synthetic/footer.html', 'footerDM'); // Tải header.html và chèn vào phần tử có ID là 'headerDM'
loadHTML('../../Synthetic/headerPM.html', 'headerPM'); // Tải header.html và chèn vào phần tử có ID là 'headerPM'





