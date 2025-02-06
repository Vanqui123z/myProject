$(document).ready(function () {
  isCheck = false;
  $("#delete").click(function () {
    $(".closeButton").each( function ()  {
      if (isCheck) {
        $(this).hide()
      } else {
        $(this).show()
      }
    });
    isCheck = !isCheck;

  })
});