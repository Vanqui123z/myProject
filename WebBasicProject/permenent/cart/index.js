      function tinhToTal(){
         // Lấy tất cả các phần tử sản phẩm trong giỏ hàng
         const products = document.querySelectorAll('.sp');

         let total = 0;
 
         // Lặp qua từng sản phẩm và tính tổng giá tiền
         products.forEach(product => {
             // Lấy giá tiền của sản phẩm
             const priceElement = parseInt(product.querySelector('.price').innerText)
             const priceNumber = parseInt(product.querySelector('.number').innerText)
             // Lấy giá tiền số từ chuỗi và chuyển đổi sang số nguyên
             total= total+ priceElement*priceNumber
         });
        
          // Cập nhật tổng giá tiền mới lên giao diện
            document.getElementById("priceTamTinh").innerText = total + 'd';
            document.getElementById("priceTotal").innerText = total + 'd';
               
            }


            $(document).on("click", ".btnDeleteSp, .add, .sub", function() {
                tinhToTal();
            });
            
            tinhToTal(); // Gọi hàm tinhToTal() một lần khi tài liệu được tải lần đầu
            
       