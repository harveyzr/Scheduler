// Display today's day and date
var currentDate = moment().format('dddd, MMM Do YYYY');
$("#todayDate").html(currentDate);

$(document).ready(function () {

    $(".saveButton").on("click", function () {
   
        var note = $(this).siblings(".note").val();
        var scheduleTime = $(this).parent().attr("id");

  
        localStorage.setItem(scheduleTime, note);
    });

    function scheduleMonitor() {
        var currentHour = moment().hour();

        $(".schedule-block").each(function () {
            var hourBlock = parseInt($(this).attr("id").split("hour")[1]);

            // Update the background color based on the time
            if (hourBlock < currentHour) {
                $(this).removeClass("isFuture");
                $(this).removeClass("isPresent");
                $(this).addClass("isPast");
            }
            else if (hourBlock === currentHour) {
                $(this).removeClass("isPast");
                $(this).removeClass("isFuture");
                $(this).addClass("isPresent");
            }
            else {
                $(this).removeClass("isPresent");
                $(this).removeClass("isPast");
                $(this).addClass("isFuture");
            }
        });
    }

    // Load saved notes from local storage
    $("#hour8 .note").val(localStorage.getItem("hour8"));
    $("#hour9 .note").val(localStorage.getItem("hour9"));
    $("#hour10 .note").val(localStorage.getItem("hour10"));
    $("#hour11 .note").val(localStorage.getItem("hour11"));
    $("#hour12 .note").val(localStorage.getItem("hour12"));
    $("#hour13 .note").val(localStorage.getItem("hour13"));
    $("#hour14 .note").val(localStorage.getItem("hour14"));
    $("#hour15 .note").val(localStorage.getItem("hour15"));
    $("#hour16 .note").val(localStorage.getItem("hour16"));
    $("#hour17 .note").val(localStorage.getItem("hour17"));

    scheduleMonitor();
});