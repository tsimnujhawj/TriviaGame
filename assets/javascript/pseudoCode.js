/* jQuery doc ready

var interval;
var clockrunning = false;
var wins;
var losses;
var timeOut;

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

var questionList = {
    question: ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5",],
    answer: ["Answer 1", "Answer 2", "Answer 3", "Answer 4", "Answer 5",],
    options: {
        optionOne: ["Option 1", "Option 1", "Option 1", "Option 1",],
        optionTwo: ["Option 2", "Option 2", "Option 3", "Option 2",],
        optionThree: ["Option 3", "Option 3", "Option 3", "Option 3",],
        optionFour: ["Option 4", "Option 4", "Option 4", "Option 4",],
        optionFive: ["Option 5", "Option 5", "Option 5", "Option 5",],
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
    while (timer.time > 0)
{
var randNum = Math.floor(Math.random() * questionList.question[length]);
var question = questionList.question[randNum]
var answer = questionList.answer[randNum]
var wrongOptions = questionList.options[randNum]
var options = [questionList.options[1], questionList.options[2], questionList.options[3], answer]

var shuffle = function(options) {
  var m = options.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = options[m];
    options[m] = options[i];
    options[i] = t;
  }

  return options;
}

DOM html question
DOM html options
event listener click function()
    {
    var chosenClick = this event
    if (chosenClick === answer)
        {
        win()
        }
        else if (chosenClick !== answer)
        {
        lose()
        }
    } else if (timer.time < 0) {
        outOfTime()
    }
}
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

function outOfTime() {
    timeOut++
    DOM html ("you ran out of time!")
    wait 5 seconds
    startTimer()
    return losses
}


*/ // jQuery doc ready closing
