$(document).ready(function() {
    count = 0;
    $("#mobileNumber").on("keyup", function() {
        var mobileNumber = $("#mobileNumber").val();
        if (mobileNumber.length == 10) {
        // add active class
            $("#getOtp").addClass("activebutton");
            count =1;
        }
        else{
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