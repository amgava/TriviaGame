// $(window).on( "load" , function() {});


function newButtons() {
    var len = questions.q1.a.length;
    for (var i = 0; i < len; i++) {

        $("<input />", {
                type: "radio",
                id: "a" + [i + 1],
                name: "answer"
            })
            .after("<br>")
            .appendTo("#a");

    }
}

function newQuestion() {
    $( "#q" ).html(questions.q1.q);
}

newQuestion();



$("#start").click(function () {
    $(this).hide();
    $("#timeLeft").html("<p>Time Remaining: " + time + " seconds</p>");
    timer();
});






var questions = {

    q1: {
        q: "1. Whose 2013 world tour was called ‘The Mrs Carter Show’?",
        a: ["Peggy Carter", "Beyonce", "Lynda Carter", "P!nk"],
        correct: "Beyonce"
    },

    q2: {
        q: "2. Who was the first on-screen James Bond?",
        a: ["Sean Connery", "Pierce Brosnan", "Barry Nelson", "Idris Elba"],
        correct: "Barry Nelson"
    },

    q3: {
        q: "3. What is the better known stage name of Robyn Fenty?",
        a: ["Robyn", "Bjork", "Madonna", "Rihanna"],
        correct: "Rihanna"
    },

    q4: {
        q: "4. Which of these is NOT a Pixar film?",
        a: ["Toy Story", "Shrek", "Finding Nemo", "Cars"],
        correct: "Shrek"
    },

    q5: {
        q: "5. How old was Harry Potter in the first book of the same name?",
        a: ["13", "14", "11", "12"],
        correct: "11"
    },

    q6: {
        q: "6. Which film is the heroine 'Satine' from?",
        a: ["Chicago", "Moulin Rouge", "Rent", "Les Miserables"],
        correct: "Moulin Rouge"
    },

    q7: {
        q: "7. Who plays the role of Lara Croft in the 2018 American action-adventure film, 'Tomb Raider'? ",
        a: ["Margot Robbie", "Alicia Vikander", "Angelina Jolie", "Brie Larson"],
        correct: "Alicia Vikander"
    },

    q8: {
        q: "8. What two countries tied for the most gold medals won at the 2018 Winter Olympics?",
        a: ["Germany and Norway", "Germany and Canada", "Germany and Sweden", "Germany and United States"],
        correct: "Germany and Norway"
    }
};

console.log(questions[0]);

var time = 30;

var countdown;

function decrement() {
    time--;
    $("#timeLeft").html("<p>Time Remaining: " + time + " seconds</p>");

    if (time === 0) {

        stop();

        gameOver();
    }
}

function timer() {
    clearInterval(countdown);
    countdown = setInterval(decrement, 1000);
}

function gameOver() {
    $("#game").html("<h2>Time's Up!</h2>");
}

function stop() {

    clearInterval(countdown);
}