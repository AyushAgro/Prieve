$(document).ready(function() {
count = 0;
$("#otp").focus();
    $("#otp").on("keyup", function() {
        if($("#otp").val().length == 6) {
            count = 1;
            // loose focus 
            $("#otp").blur();
            $("#getOtp").addClass("activebutton");
        }
        else {
            $("#getOtp").removeClass("activebutton");
            count = 0;
        }
    });

    $("#getOtp").on("click", function() {
        if(count == 1){
       $("#buttonspan").html(""); 
       $("#loading").css("display", "block");
        }
    });

});