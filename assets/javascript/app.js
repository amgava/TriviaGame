$(window).load(function () {
    $("#button").on("click", countdown.start);

});

var questions = {

    q1: {
        q: "Whose 2013 world tour was called ‘The Mrs Carter Show’?",
        a: ["Peggy Carter", "Beyonce", "Lynda Carter", "P!nk"],
        answer: "Beyonce"
    },

    q2: {
        q: "Who was the first on-screen James Bond?",
        a: ["Sean Connery", "Pierce Brosnan", "Barry Nelson", "Idris Elba"],
        answer: "Barry Nelson"
    },

    q3: {
        q: "*What is the better known stage name of Robyn Fenty?",
        a: ["Robyn", "Bjork", "Madonna", "Rihanna"],
        answer: "Rihanna"
    },

    q4: {
        q: "*Which of these is NOT a Pixar film?",
        a: ["Toy Story", "Shrek", "Finding Nemo", "Cars"],
        answer: "Shrek"
    },

    q5: {
        q: "How old was Harry Potter in the first book of the same name?",
        a: ["13", "14", "11", "12"],
        answer: "11"
    },

    q6: {
        q: "Which film is the heroine 'Satine' from?",
        a: ["Chicago", "Moulin Rouge", "Rent", "Les Miserables"],
        answer: "Moulin Rouge"
    },

    q7: {
        q: "Who plays the role of Lara Croft in the 2018 American action-adventure film, 'Tomb Raider'? ",
        a: ["Margot Robbie", "Alicia Vikander", "Angelina Jolie", "Brie Larson"],
        answer: "Alicia Vikander"
    },

    q8: {
        q: "What two countries tied for the most gold medals won at the 2018 Winter Olympics?",
        a: ["Germany and Norway", "Germany and Canada", "Germany and Sweden", "Germany and United States"],
        answer: "Germany and Norway",
        atest: this.a[0]
    }
};

var countdown = {

    start: function () {
        clearInterval(this.time);
        this.time = setInterval(decrement, 1000);
    },

    time: 30,
};

function decrement() {
    countdown.time--;
}









function gameOver() {
    $("#game").html("<h2>Time 's Up!</h2>");
}

gameOver();