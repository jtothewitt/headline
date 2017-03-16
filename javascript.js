 var time = new Date().getHours(); 
if (time < 10) {
    greeting = "top of the mornin' to ya";
} else if (time < 23) {
    greeting = "howdy, hope the day is going well, keep it up";
} else {
    greeting = "why are you still up?";
}
