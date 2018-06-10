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

$( document ).ready(function() { // jQuery Document Ready Opening

$("#options").hide()

var interval;
var clockrunning = false;
var wins = 0;
var losses = 0;
var timeOut = 0;

var randNum;
var question;
var answer;
var wrongOptions;
var options;

var opOne;
var opTwo;
var opThree;
var opFour;

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
        $("#timerBox").text(timer.time);
        if (timer.time < 0) {
            timer.stop();
            outOfTime()
        }
    },

    stop: function() {
        clearInterval(interval);
        clockrunning = false;
    }
}

var questionList = {
    question: ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5",],
    answer: ["Answer 1", "Answer 2", "Answer 3", "Answer 4", "Answer 5",],
    options: [
        optionOne = ["Option 1", "Option 1", "Option 1",],
        optionTwo = ["Option 2", "Option 2", "Option 2",],
        optionThree = ["Option 3", "Option 3", "Option 3",],
        optionFour = ["Option 4", "Option 4", "Option 4",],
        optionFive = ["Option 5", "Option 5", "Option 5",],
    ]
}


$("#timerBox").html("Click HERE to start the trivia!");
$("#timerBox").on("click", function(){
$("#timerBox").empty();
$("#timerBox").off();
startTimer();
});

function startTimer() {
    timer.start()
    $("#timerBox").text("30");
    questions()
    }
    
    function questions() {

    randNum = Math.floor(Math.random() * questionList.question.length);
    question = questionList.question[randNum]
    answer = questionList.answer[randNum]
    wrongOptions = questionList.options[randNum]
    options = [wrongOptions[0], wrongOptions[1], wrongOptions[2], answer]
    $("#questionBox").html(question);

    for (var i = options.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = options[i];
        options[i] = options[j];
        options[j] = temp;
        $("#options").show();
        opOne = $("#optionsOne").html(options[0]);
        opTwo = $("#optionsTwo").html(options[1]);
        opThree = $("#optionsThree").html(options[2]);
        opFour =  $("#optionsFour").html(options[3]);

        opOne.attr("data-name", options[0]);
        opTwo.attr("data-name", options[1]);
        opThree.attr("data-name", options[2]);
        opFour.attr("data-name", options[3]);
    };

    $("#optionsOne").on("click", checkClick);
    $("#optionsTwo").on("click", checkClick);
    $("#optionsThree").on("click", checkClick);
    $("#optionsFour").on("click", checkClick);

};


    function checkClick() {
    var chosenAnswer = $(this).attr("data-name");
    if (chosenAnswer === answer){
    win()
    } else if (chosenAnswer !== answer) {
    lose()
    }
};

    function win() {
        timer.stop();
        timer.time = 0;
        wins++
        $("#timerBox").html("You guessed RIGHT!");
        $("#wins").html(wins)
        setTimeout(function() {
        $("#timerBox").html("The next question is coming up...");
        }, 2000);
        setTimeout(function() {
            timer.time = 30;
            startTimer()
        }, 8000)
        return wins
    }
    
    function lose() {
        timer.stop();
        timer.time = 0;
        losses++
        $("#timerBox").html("You guessed WRONG!");
        $("#losses").html(losses);
        setTimeout(function() {
        $("#timerBox").html("The correct answer was " + answer + "!");
        }, 500);
        setTimeout(function() {
        $("#timerBox").html("The next question is coming up...");
        }, 3000);
        setTimeout(function() {
            timer.time = 30;
            startTimer()
        }, 8000)
        return losses
    }
    
    function outOfTime() {
        timeOut++;
        $("#timerBox").html("You're out of time!");
        $("#timeout").html(timeOut);
        setTimeout(function() {
        $("#timerBox").html("The next question is coming up...");
        }, 2000)
        setTimeout(function() {
            timer.time = 30;
            startTimer()
        }, 8000)
        return timeOut;
    }

}); // jQuery Document Ready Closing