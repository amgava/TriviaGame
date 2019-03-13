$(document).ready(function () {
    $("#start").on("click", start);
});

var choice;
var right = 0;
var wrong = 0;
var unanswered = 0;
var intervalId;
var time = 30;

var quiz = {

    displayQuestions: function () {
        var box = $("#quiz-box");

        for (var i = 0; i < questions.length; i++) {

            box.append('<fieldset class="form-group cl" id="question' + i + '"><legend>' + questions[i].q + '</legend></fieldset>');
        }

    },

    displayAnswers: function () {

        for (var i = 0; i < questions.length; i++) {

            var arow = $('fieldset[id=question' + i + ']');
            var a1 = questions[i].a[0];
            var a2 = questions[i].a[1];
            var a3 = questions[i].a[2];
            var a4 = questions[i].a[3];

            arow.append('<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="answer'
            +i + '" id="choice'
            +0 + '" value="' + a1 + '"><label class="form-check-label" for="choice'
            +0 + '">' + a1 + '</label></div>');

            arow.append('<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="answer'
            +i + '" id="choice'
            +1 + '" value="' + a2 + '"><label class="form-check-label" for="choice'
            +1 + '">' + a2 + '</label></div>');

            arow.append('<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="answer'
            +i + '" id="choice'
            +2 + '" value="' + a3 + '"><label class="form-check-label" for="choice'
            +2 + '">' + a3 + '</label></div>');

            arow.append('<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="answer'
            +i + '" id="choice'
            +3 + '" value="' + a4 + '"><label class="form-check-label" for="choice'
            +3 + '">' + a4 + '</label></div>');

        }
    },

    check: function () {

        for (var i = 0; i < questions.length; i++) {
            var qright = questions[i].correct;
            choice = $('input[type=radio][name=answer'+i+']:checked').val();

            if (choice === qright) {
                right++;
            } else if (choice === undefined) {
                unanswered++;
            } else if (choice !== qright) {
                wrong++;
            }
        }
    },

    finished: function (right, wrong, unanswered) {
        $(".cl").empty();
        $("#timeLeft").addClass('d-none');
        $(".result").removeClass('d-none');
        if (right == 1) {
           $("#right").html("<p>You got " + right + " question right! Not your best subject, eh?</p>");
        } else {
            $("#right").html("<p>You got " + right + " questions right! Good Job!</p>");
        }
        if (wrong == 1) {
            $("#wrong").html("<p>You got " + wrong + " question wrong! Aww. So close.</p>");
        } else {
            $("#wrong").html("<p>You got " + wrong + " questions wrong! Whoops.</p>");
        }
        if (unanswered == 1) {
            $("#unanswered").html("<p>You missed " + unanswered + " question. You should've guessed!</p>");
        } else {
            $("#unanswered").html("<p>You missed " + unanswered + " questions. Yikes.</p>");
        }
    }
}

var questions = [

    {
        q: "1. Whose 2013 world tour was called ‘The Mrs Carter Show’?",
        a: ["Peggy Carter", "Beyonce", "Lynda Carter", "P!nk"],
        correct: "Beyonce"
    },

    {
        q: "2. Who was the first on-screen James Bond?",
        a: ["Sean Connery", "Pierce Brosnan", "Barry Nelson", "Idris Elba"],
        correct: "Barry Nelson"
    },

    {
        q: "3. What is the better known stage name of Robyn Fenty?",
        a: ["Robyn", "Bjork", "Madonna", "Rihanna"],
        correct: "Rihanna"
    },

    {
        q: "4. Which of these is NOT a Pixar film?",
        a: ["Toy Story", "Shrek", "Finding Nemo", "Cars"],
        correct: "Shrek"
    },

    {
        q: "5. How old was Harry Potter in the first book of the series?",
        a: ["13", "14", "11", "12"],
        correct: "11"
    },

    {
        q: "6. Which film is the heroine 'Satine' from?",
        a: ["Chicago", "Moulin Rouge", "Rent", "Les Miserables"],
        correct: "Moulin Rouge"
    },

    {
        q: "7. Who plays the role of Lara Croft in the 2018 American action-adventure film, 'Tomb Raider'? ",
        a: ["Margot Robbie", "Brie Larson", "Angelina Jolie", "Alicia Vikander"],
        correct: "Alicia Vikander"
    },

    {
        q: "8. What two countries tied for the most gold medals won at the 2018 Winter Olympics?",
        a: ["Germany and Norway", "Germany and Canada", "Germany and Sweden", "Germany and United States"],
        correct: "Germany and Norway"
    }
]

function start() {
    $("#start").hide();
    $("#timeLeft").html("<p>Time Remaining: " + time + " seconds</p>");
    clearInterval(intervalId);
    intervalId = setInterval(countdown, 1000);
    quiz.displayQuestions();
    quiz.displayAnswers();
}

function countdown() {

    time--;
    $("#timeLeft").html("<p>Time Remaining: " + time + " seconds</p>");
    if (time === 0) {
        stop(intervalId);
    }
}

function stop() {
    clearInterval(intervalId);
    $("#timeLeft").html("<p>Time Remaining: " + 0 + " seconds</p>");
    quiz.check();
    quiz.finished(right, wrong, unanswered);
}
