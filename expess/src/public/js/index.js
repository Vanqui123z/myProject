$(document).ready(function () {
  isCheck = false;

  $("#delete").click(function () {
    $(".closeButton").toggle(isCheck)
    isCheck = !isCheck;
  })
  $("#edit").click(function () {
    $(".editButton").toggle(isCheck)
    isCheck = !isCheck;
  })


});
