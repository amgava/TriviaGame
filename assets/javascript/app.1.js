$(window).on( "load" , function () {
    $( "#q-1" ).html(questions.q1.q);
    $("#q-1-a").attr("value", questions.q1.a[0]);
    // var len = questions.q1.a.length;
    // for (var i = 0; i < len; i++) {
    //     $("#q-1-a").html(questions.q1.a[i]);
    // }
});

$( "#start" ).click(function () {
    $( this ).hide();
    $( "#timeLeft" ).html( "<p>Time Remaining: " + time + " seconds</p>" );
    go();
});
 
var questions = {
 
    q1: {
        q: "1. Whose 2013 world tour was called ‘The Mrs Carter Show’?",
        a: ["Peggy Carter", "Beyonce", "Lynda Carter", "P!nk"],
        answer: "Beyonce"
    },
 
    q2: {
        q: "2. Who was the first on-screen James Bond?",
        a: ["Sean Connery", "Pierce Brosnan", "Barry Nelson", "Idris Elba"],
        answer: "Barry Nelson"
    },
 
    q3: {
        q: "3. What is the better known stage name of Robyn Fenty?",
        a: ["Robyn", "Bjork", "Madonna", "Rihanna"],
        answer: "Rihanna"
    },
 
    q4: {
        q: "4. Which of these is NOT a Pixar film?",
        a: ["Toy Story", "Shrek", "Finding Nemo", "Cars"],
        answer: "Shrek"
    },
 
    q5: {
        q: "5. How old was Harry Potter in the first book of the same name?",
        a: ["13", "14", "11", "12"],
        answer: "11"
    },
 
    q6: {
        q: "6. Which film is the heroine 'Satine' from?",
        a: ["Chicago", "Moulin Rouge", "Rent", "Les Miserables"],
        answer: "Moulin Rouge"
    },
 
    q7: {
        q: "7. Who plays the role of Lara Croft in the 2018 American action-adventure film, 'Tomb Raider'? ",
        a: ["Margot Robbie", "Alicia Vikander", "Angelina Jolie", "Brie Larson"],
        answer: "Alicia Vikander"
    },
 
    q8: {
        q: "8. What two countries tied for the most gold medals won at the 2018 Winter Olympics?",
        a: ["Germany and Norway", "Germany and Canada", "Germany and Sweden", "Germany and United States"],
        answer: "Germany and Norway"
    }
};
 
var time = 30;
 
var countdown;
 
function decrement() {
    time--;
    $( "#timeLeft" ).html( "<p>Time Remaining: " + time + " seconds</p>" );
 
    if (number === 0) {
        
        stop();
        
        gameOver();
    }
}
 
function go() {
    clearInterval(countdown);
    countdown = setInterval(decrement, 1000);
}
 
function gameOver() {
    $( "#game" ).html( "<h2>Time's Up!</h2>" );
}

function stop() {

    clearInterval(countdown);
}