/*
1) hard code the html blocks for the time to start
    each hour block is its own div
    within it are the text of the current hour, a text block and then the save button
2) use moment to pull in current day/time DONE
3)


*/
// variable to select the schedule container for appending
var scheduleEl = document.querySelector("#schedule");

var setDate = function () {
    // create date variable with date formated to spec
    var date = moment().format("dddd, MMMM, Do");
    // set text value of currentDay to the date
    $('#currentDay').text(date);
};

var loadSchedule = function () {
    // for loop pulling from local storage
    for (i = 7; i < 24; i++) {
        var text = JSON.parse(localStorage.getItem("hr" + i));
        // console.log(text);
        $("#" + i).text(text);

        // set variables for hour start and end to compare against current time 
        // use iterator i to set the value per a 24hr clock
        var timeBlockStart = moment().hour(i).minute(0).second(0); // i:00:00
        var timeBlockEnd = moment().hour(i + 1).minute(0).second(0); // (i + 1):00:00

        // if current time is between the block start and end then it is the present hour
        if (moment().isBefore(timeBlockEnd) && moment().isAfter(timeBlockStart)) {
            $("#" + i).addClass("present");
        }
        // if current time is after the block end, then that block is in the past
        else if (moment().isAfter(timeBlockEnd)) {
            $("#" + i).addClass("past");
        } 
        // if current time is before block start then that block is in the future
        else if (moment().isBefore(timeBlockStart)) {
            $("#" + i).addClass("future");
        }
    };
};
/*
var createTimeBlock = function (time) {
    // based on 24hr clock, determine if am or pm based on time value
    if (time < 12) {
        var oDay = "am";
    } else {
        var oDay = "pm";
    }

    var blockEl = $("<div>").addClass("row col-12");
    var timeEl = $("<div>").addClass("hour time-block col-2").text(time + oDay);
    var textEl = $("<textarea>").addClass("col-8 text-center").attr("id", time);
    var buttonEl = $("<button>").addClass("saveBtn col-2").attr("id", "btn-" + time);

    blockEl.append(timeEl, textEl, buttonEl);
    scheduleEl.append(blockEl);
}
*/

$(".saveBtn").click(function () {
    // save button is clicked and we then pull its ID, btn-8 for example.
    // That is then split on a - into an array to get the id name of the associated text area
    var input = $(this).attr("id").split("-")[1];

    // the text area is then targeted via string concatenation and its text stores in a value
    // the value can then be saved to local storage.
    var value = $("#" + input).val();

    // saves it to local storage, but the value is lost on refresh
    // correctly logs with unique key, hr8 for example when btn-8 is pressed
    // use 24 hour clock on the backend
    localStorage.setItem("hr" + input, JSON.stringify(value));
});

setDate();
loadSchedule();