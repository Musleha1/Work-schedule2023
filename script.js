//Display the current day at the top of the calender when a user opens the planner

var today = moment();
$("#currentDay").text(today.format("Do MMMM YYYY"));


// Present timeblocks for standard business hours when the user scrolls down

function timeBlockColour() {
    var currentHour = moment().hour();

 $(".time-block").each(function() { //each
    var blockTime = parseInt($(this).attr("id")); 

//Color-code each timeblock based on past, present, and future when the timeblock is viewed

    if (blockTime > currentHour) {
        $(this).addClass("future"); //green
     } else if (blockTime === currentHour) {
            $(this).addClass("present"); //red
     }else {
            $(this).addClass("past"); //light grey
     }
    })
};

timeBlockColour();

// Save button for time block (event listener)

var saveBtn = $("saveBtn");

$("saveBtn").click(function(event) {
    event.preventDefault();

// Local storage

    var time = $(this).siblings(".hour").text();
    var description = $(this).siblings(".description").val();
    
    localStorage.setItem(time, description);
}
)




