document.getElementById("foot01").innerHTML = "<p>&copy; " + new Date().getFullYear() + " Kate. </p>";

var date = new Date();
var day = date.getDay();
var monthNum = date.getMonth();
var year = date.getFullYear();

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function todayDay() {
    "use strict";
    document.log(date + " " + months[monthNum] + " " + year);
}

function functiontoGoo() {
    "use strict";
    location.href = 'https://www.google.com';
}
