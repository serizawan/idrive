function checkPasswordMatch() {
  var password = $("#student_password").val();
  var confirmation = $("#student_password_confirmation").val();

  if (password == confirmation) {
    $("#do_match").html("Passwords match");
  } else {
    $("#do_match").html("Passwords do not match");
  }
}

$(document).ready(function() {
  $("#student_password_confirmation").keyup(checkPasswordMatch);
});
