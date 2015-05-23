var DateNow = new Date();
var DateFlight = new Date(2015,5,16,15);

function calcDaysRemain(date1, date2, display) {
    var diffDates = (date2 - date1)/(1000*3600*24);
    
    if (display == "alert") {
        alert("days remaining til flight: " + Math.floor(diffDates));
    }
    else (console.log(diffDates));

}

calcDaysRemain(DateNow, DateFlight, "alert");