/* jQuery doc ready

var interval;
var clockrunning = false;

var timer = {
    time: 30,
    start: function() {
        if (!clockrunning) {
            interval = setInterval(timer.count, 1000);
            clockrunning = true;
        }
    },

    count: function() {
        timer.time--;
    },

    stop: function() {
        clearInterval(interval);
        clockrunning = false;
    }
}

DOM html start game (click HERE to start)

DOM start game event listener click function(){
DOM empty
disable button
startTimer()
}

function startTimer() {
DOM html (30 seconds)
timer.start()
questions()
}

function questions()
{
    while (timer > 0)
{
DOM html random question and choices
event listener click function()
    {
    var chosenClick = this event
    if (chosenClick === this event)
        {
        win()
        }
        else if (chosenClick !== this event)
        {
        lose()
        }
    }
}
console.log("Test-End")
}

function win() {
    wins++
    DOM html ("you won!")
    wait 5 seconds
    startTimer()
    return wins
}

function lose() {
    losses++
    DOM html ("you lost!")
    wait 5 seconds
    startTimer()
    return losses
}


*/ // jQuery doc ready closing