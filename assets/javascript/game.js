
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

var questionList = [

    [ // Question 1
    quest = "What year was it when Gordon missed his important penalty shot?",
    answer = "1973",
    optionList = ["1976", "1981", "1983",],
    ],

    [ // Question 2
    quest = "What number did Gordon Bombay wear when he played hockey as a child?",
    answer = "66",
    optionList = ["99", "9", "6",],
    ],

    [ // Question 3
    quest = "<img src='assets/images/duck_wu.jpg'>",
    answer = "Kenny Wu",
    optionList = ["Russ Tyler", "Charlie Conway", "Forest Whitaker",],
    ],

    [ // Question 4
    quest = "<img src='assets/images/duck_russ.jpg'>",
    answer = "Russ Tyler",
    optionList = ["Kenny Wu", "Luis Mendoza", "Jesse Hall",],
    ],

    [ // Question 5
    quest = "<img src='assets/images/duck_guy.jpg'>",
    answer = "Guy Germaine",
    optionList = ["Luis Mendoza", "Jesse Hall", "Charlie Conway",],
    ],

    [ // Question 6
    quest = "What is the name of the famous formation the Ducks use?",
    answer = "The Flying V",
    optionList = ["The Mighty Ducks", "The Duck Dash", "The Sweeper",],
    ],

    [ // Question 7
    quest = "The Ducks called Adam Banks a 'cake eater', what does that mean?",
    answer = "He's from Edina",
    optionList = ["He's French", "He's fat", "He's spoiled",],
    ],

    [ // Question 8
    quest = "Coach Bombay takes on the team for community service. How many hours does he have to do?",
    answer = "500",
    optionList = ["300", "400", "600",],
    ],

    [ // Question 9
    quest = "The rival team to the Ducks is the Hawks. What is the name of their coach?",
    answer = "Jack Reilley",
    optionList = ["Ted Orion", "Wolf Stansson", "Adam Banks",],
    ],

    [ // Question 10
    quest = "Finish this quote from Coach Riley: 'It's not worth winning if you can't win __________!",
    answer = "big",
    optionList = ["fairly", "for yourself", "with honor",],
    ],
    
];


$("#timerBox").html("Click HERE to start the trivia!");
$("#timerBox").on("click", function(){
$("#timerBox").empty();
$("#timerBox").off();
startTimer();
});

function startTimer() {
    console.log(questionList.length)
    if (questionList.length === 0) {
    timer.stop();
    $("#questionBox").empty();
    $("#timerBox").empty();
    $("#options").empty();
    $("#questionBox").html("You have completed the trivia!")
    } else if (questionList.length !== 0) {
    timer.start()
    $("#timerBox").text("30");
    questions()
    }
}
    
    function questions() {
    randNum = Math.floor(Math.random() * questionList.length);
    randQuest = questionList[randNum];
    question = randQuest[0];
    answer = randQuest[1];
    wrongOptions = randQuest[2];
    options = [wrongOptions[0], wrongOptions[1], wrongOptions[2], answer]
    index = questionList.indexOf(questionList[randNum]);
    console.log(questionList.indexOf(questionList[randNum]));
    remove();
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
    questionList.splice(index, 1);
    console.log(questionList)
}

    function win() {
        $("#options").hide();
        timer.stop();
        timer.time = 0;
        wins++;
        $("#timerBox").html("You guessed RIGHT!");
        $("#wins").html(wins)
        setTimeout(function() {
        $("#timerBox").html("The next question is coming up...");
        }, 2000);
        setTimeout(function() {
            timer.time = 30;
            startTimer()
        }, 8000)
        chosenAnswer;
        answer;
        return wins
    }
    
    function lose() {
        $("#options").hide();
        timer.stop();
        timer.time = 0;
        losses++;
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
        chosenAnswer;
        answer;
        return losses
    }
    
    function outOfTime() {
        $("#options").hide();
        timer.stop();
        timer.time = 0;
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
        chosenAnswer;
        answer;
        return timeOut;
    }

}); // jQuery Document Ready Closing