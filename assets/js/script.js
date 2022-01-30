/*
1) hard code the html blocks for the time to start
    each hour block is its own div
    within it are the text of the current hour, a text block and then the save button
2) use moment to pull in current day/time DONE
3)


*/
var setDate = function () {
    // create date variable with date formated to spec
    var date = moment().format("dddd, MMMM, Do");
    console.log(date); // log to test
    $('#currentDay').text(date); // set text value of currentDay to the date
};

var saveSchedule = function () {
    // save the array of timeblocks to local storage stirngy etc
    // Bundle the timblock as an object and save that object to local storage
    localStorage.setItem('');
};

var loadSchedule = function() {

// code to create an array of timeblock objects
};

// click event listener for the time-block class and target the specific line with this

$(".row").click(function () {
    var eventText = $(this).text();
    var eventArr = eventText.split(" ");

    console.log(eventText);
    console.log(eventArr[0]);
    console.log(eventArr[1]);
});


setDate();