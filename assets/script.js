// Display today's day and date
var displayTime = document.querySelector("#currentDay");

var currentTime = moment();

displayTime.textContent = currentTime.format("dddd, MMM Do YYYY");

$(".saveBtn").on("click", function() {
    // saveBtn click listener get row field class and row id values
    // Get nearby values of the description in JQuery
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time, value);
});

// Get item from local storage if any
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

// converting time and display
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

//get current number of hours.
var currentHour = moment().format('H');

// To check the time and add the classes for background indicators
if (currentHour < hour8) {
    $("#8am-text").addClass("future");
} else if (currentHour > hour8) {
    $("#8am-text").addClass("past");
} else if (currentHour = hour8) {
    $("#8am-text").addClass("present");
}

if (currentHour < hour9) {
    $("#9am-text").addClass("future");
} else if (currentHour > hour9) {
    $("#9am-text").addClass("past");
} else if (currentHour = hour9) {
    $("#9am-text").addClass("present");
}

if (currentHour < hour10) {
    $("#10am-text").addClass("future");
} else if (currentHour > hour10) {
    $("#10am-text").addClass("past");
} else if (currentHour = hour10) {
    $("#10am-text").addClass("present");
}

if (currentHour < hour11) {
    $("#11am-text").addClass("future");
} else if (currentHour > hour11) {
    $("#11am-text").addClass("past");
} else if (currentHour = hour11) {
    $("#11am-text").addClass("present");
}

if (currentHour < hour12) {
    $("#12pm-text").addClass("future");
} else if (currentHour > hour12) {
    $("#12pm-text").addClass("past");
} else if (currentHour = hour12) {
    $("#12pm-text").addClass("present");
}

if (currentHour < hour1) {
    $("#1pm-text").addClass("future");
} else if (currentHour > hour1) {
    $("#1pm-text").addClass("past");
} else if (currentHour = hour1) {
    $("#1pm-text").addClass("present");
}

if (currentHour < hour2) {
    $("#2pm-text").addClass("future");
} else if (currentHour > hour2) {
    $("#2pm-text").addClass("past");
} else if (currentHour = hour2) {
    $("#2pm-text").addClass("present");
}

if (currentHour < hour3) {
    $("#3pm-text").addClass("future");
} else if (currentHour > hour3) {
    $("#3pm-text").addClass("past");
} else if (currentHour = hour3) {
    $("#3pm-text").addClass("present");
}

if (currentHour < hour4) {
    $("#4pm-text").addClass("future");
} else if (currentHour > hour4) {
    $("#4pm-text").addClass("past");
} else if (currentHour = hour4) {
    $("#4pm-text").addClass("present");
}

if (currentHour < hour5) {
    $("#5pm-text").addClass("future");
} else if (currentHour > hour5) {
    $("#5pm-text").addClass("past");
} else if (currentHour = hour5) {
    $("#5pm-text").addClass("present");
}