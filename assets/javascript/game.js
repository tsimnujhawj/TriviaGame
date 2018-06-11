
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
var quest;
var optionList;
var used;
var index;

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

// var questionList = {
//     question: ["What differentiates ducks from most other birds?", "How many species of duck are there?", "<img src='assets/images/duck_wu.jpg'>", "<img src='assets/images/duck_russ.jpg'>", "<img src='assets/images/duck_guy.jpg'>",],
//     answer: ["They swim well", "150", "Kenny Wu", "Russ Tyler", "Guy Germaine",],
//     options: [
//         optionOne = ["They fly long distances", "They're monogamous", "They have web feet",],
//         optionTwo = ["100", "250", "400",],
//         optionThree = ["Russ Tyler", "Charlie Conway", "Forest Whitaker",],
//         optionFour = ["Kenny Wu", "Luis Mendoza", "Jesse Hall",],
//         optionFive = ["Luis Mendoza", "Jesse Hall", "Charlie Conway",],
//     ]
// }

var questionList = [

    [ // Question 1
    quest = "What differentiates ducks from most other birds?",
    answer = "They swim well",
    optionList = ["They fly long distances", "They're monogamous", "They have web feet",],
    used = false,
    ],

    [ // Question 2
    quest = "How many species of duck are there?",
    answer = "150",
    optionList = ["100", "250", "400",],
    used = false,
    ],

    [ // Question 3
    quest = "<img src='assets/images/duck_wu.jpg'>",
    answer = "Kenny Wu",
    optionList = ["Russ Tyler", "Charlie Conway", "Forest Whitaker",],
    used = false,
    ],

    [ // Question 4
    quest = "<img src='assets/images/duck_russ.jpg'>",
    answer = "Russ Tyler",
    optionList = ["Kenny Wu", "Luis Mendoza", "Jesse Hall",],
    used = false,
    ],

    [ // Question 5
    quest = "<img src='assets/images/duck_guy.jpg'>",
    answer = "Guy Germaine",
    optionList = ["Luis Mendoza", "Jesse Hall", "Charlie Conway",],
    used = false,
    ],
    
];


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
    randNum = Math.floor(Math.random() * questionList.length);
    randQuest = questionList[randNum];
    question = randQuest[0];
    answer = randQuest[1];
    wrongOptions = randQuest[2];
    options = [wrongOptions[0], wrongOptions[1], wrongOptions[2], answer]
    index = randQuest.indexOf(question);
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
    }

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

function remove() {
    questionList.splice(index, randNum);
    console.log(questionList)
}

    function win() {
        remove();
        $("#options").hide();
        timer.stop();
        timer.time = 0;
        wins += 1;
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
        remove();
        $("#options").hide();
        timer.stop();
        timer.time = 0;
        losses += 1;
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
        remove();
        $("#options").hide();
        timer.stop();
        timer.time = 0;
        timeOut += 1;
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