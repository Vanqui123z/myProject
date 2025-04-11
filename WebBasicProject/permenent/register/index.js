$(document).ready(function() {
    // Bắt sự kiện click nút Save
    $('.btnSubmit').click(function(event) {
        event.preventDefault();
        var isValid = true;

        // Kiểm tra trường Tên không được để trống
        var name = $('#name').val();
        if (name.trim() === '') {
            isValid = false;
            $('#helpIdName').text('Không được để trống');
        } else {
            $('#helpIdName').text('');
        }

   

        // Kiểm tra trường Địa chỉ
        var address = $('#password').val();
        if (address.trim() === '') {
            isValid = false;
            $('#helpIdPassword').text('Không được để trống');
        } else {
            $('#helpIdPassword').text('');
        }

        // Kiểm tra trường Số tiền
        var money = $('#passwordAgain').val();
        if (money.trim() === '') {
            isValid = false;
            $('#helpIdPasswordAgain').text('Không được để trống');
        } else {
            $('#helpIdPasswordAgain').text('');
        }

        // Kiểm tra tính hợp lệ và hiển thị thông báo
        if (isValid) {
            alert('Dữ liệu hợp lệ');


            // lưu vào localStroge
            var user=$("#name").val()
            var sdt =$("#sdt").val()
            var email =$("#email").val()
            var birthday =$("#birthday").val()
            var password =$("#password").val()
            if(user && sdt && email && birthday && password){
                localStorage.setItem("user",user)
                localStorage.setItem("sdt",sdt)
                localStorage.setItem("email",email)
                localStorage.setItem("birthday",birthday)
                localStorage.setItem("password",password)
                alert('Thông tin đã được lưu.');
                
            }
        } else {
            alert('Dữ liệu không hợp lệ. Vui lòng kiểm tra lại các trường thông tin.');
        }
    });


});
