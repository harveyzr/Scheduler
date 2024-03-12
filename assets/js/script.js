// Use Moment.js to get the current date in a specified format and display it on the webpage.
var currentDate = moment().format('dddd, MMM Do YYYY');
$("#todayDate").html(currentDate);

// Ensure the code runs after the DOM is fully loaded.
$(document).ready(function () {
  // Set up an event listener for clicks on elements with the class "saveButton".
    $(".saveButton").on("click", function () {
       // Retrieve the note text from the sibling element with class "note" of the clicked save button.
        var note = $(this).siblings(".note").val();
        // Retrieve the ID of the parent element, which indicates the schedule time block.
        var scheduleTime = $(this).parent().attr("id");

        // Save the note to the browser's local storage, using the time block's ID as the key.
        localStorage.setItem(scheduleTime, note);
    });
        // Function to update the visual indication of each time block as past, present, or future.
    function scheduleMonitor() {
         // Get the current hour using Moment.js.
        var currentHour = moment().hour();
           // Iterate over each element with the class "schedule-block".
        $(".schedule-block").each(function () {
            // Parse the hour from the element's ID, assuming the ID format is "hourXX".
            var hourBlock = parseInt($(this).attr("id").split("hour")[1]);

           // Compare the block's hour to the current hour to determine its state (past, present, future).
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

 // Pre-fill the note fields with any saved data from local storage for each hour block.
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
    // Call the function to update the visual indications for each time block.

    scheduleMonitor();
});