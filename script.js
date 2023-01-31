//Display today's date

var today = moment();
$("#currentDay").text(today.format("Do MMMM YYYY"));


//Colour coded time blocks

function timeBlockColour() {
    var currentHour = moment().hour();

 $(".time-block").each(function() { //each
    var blockTime = parseInt($(this).attr("id")); 

    

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

// Save button for time block

// Local storage








