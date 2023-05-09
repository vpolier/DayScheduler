// Display today's day and date
var displayTime = document.querySelector("#current_day");
var currentTime = moment();

//current date to display to user
displayTime.textContent = currentTime.format("dddd, MMM Do YYYY, h:ma");

//when any of the save buttons are clicked, save inner html to storage
$(".saveBtn").on("click", function() {
    // saveBtn click listener get row field class and row id values
    // Get nearby values of the description in JQuery
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time, value);
});

//get all tasks for each hour block, displaying to user
$("#8am-row .description").val(localStorage.getItem("8am-row"));
$("#9am-row .description").val(localStorage.getItem("9am-row"));
$("#10am-row .description").val(localStorage.getItem("10am-row"));
$("#11am-row .description").val(localStorage.getItem("11am-row"));
$("#12pm-row .description").val(localStorage.getItem("12pm-row"));
$("#13pm-row .description").val(localStorage.getItem("13pm-row"));
$("#14pm-row .description").val(localStorage.getItem("14pm-row"));
$("#15pm-row .description").val(localStorage.getItem("15pm-row"));
$("#16pm-row .description").val(localStorage.getItem("16pm-row"));
$("#17pm-row .description").val(localStorage.getItem("17pm-row"));

//converting time and display
var hour8 = 8;
var hour9 = 9;
var hour10 = 10;
var hour11 = 11;
var hour12 = 12;
var hour1 = 13;
var hour2 = 14;
var hour3 = 15;
var hour4 = 16;
var hour5 = 17;

//get current hour in 24 hour format
var current_hour = moment().format('H');

//for each hour block, adjust background colour to show past, present future designation
if (current_hour < hour8) {
    $("#8am-text").addClass("future");
} else if (current_hour > hour8) {
    $("#8am-text").addClass("past");
} else if (current_hour = hour8) {
    $("#8am-text").addClass("present");
}

if (current_hour < hour9) {
    $("#9am-text").addClass("future");
} else if (current_hour > hour9) {
    $("#9am-text").addClass("past");
} else if (current_hour = hour9) {
    $("#9am-text").addClass("present");
}

if (current_hour < hour10) {
    $("#10am-text").addClass("future");
} else if (current_hour > hour10) {
    $("#10am-text").addClass("past");
} else if (current_hour = hour10) {
    $("#10am-text").addClass("present");
}

if (current_hour < hour11) {
    $("#11am-text").addClass("future");
} else if (current_hour > hour11) {
    $("#11am-text").addClass("past");
} else if (current_hour = hour11) {
    $("#11am-text").addClass("present");
}

if (current_hour < hour12) {
    $("#12pm-text").addClass("future");
} else if (current_hour > hour12) {
    $("#12pm-text").addClass("past");
} else if (current_hour = hour12) {
    $("#12pm-text").addClass("present");
}

if (current_hour < hour1) {
    $("#1pm-text").addClass("future");
} else if (current_hour > hour1) {
    $("#1pm-text").addClass("past");
} else if (current_hour = hour1) {
    $("#1pm-text").addClass("present");
}

if (current_hour < hour2) {
    $("#2pm-text").addClass("future");
} else if (current_hour > hour2) {
    $("#2pm-text").addClass("past");
} else if (current_hour = hour2) {
    $("#2pm-text").addClass("present");
}

if (current_hour < hour3) {
    $("#3pm-text").addClass("future");
} else if (current_hour > hour3) {
    $("#3pm-text").addClass("past");
} else if (current_hour = hour3) {
    $("#3pm-text").addClass("present");
}

if (current_hour < hour4) {
    $("#4pm-text").addClass("future");
} else if (current_hour > hour4) {
    $("#4pm-text").addClass("past");
} else if (current_hour = hour4) {
    $("#4pm-text").addClass("present");
}

if (current_hour < hour5) {
    $("#5pm-text").addClass("future");
} else if (current_hour > hour5) {
    $("#5pm-text").addClass("past");
} else if (current_hour = hour5) {
    $("#5pm-text").addClass("present");
}