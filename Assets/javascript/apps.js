
// Count of Right, Wrong, and unanswered Qustions
var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;

// countdown from a minute
var count = 60;

$(document).ready(function () {

    //game and end screen won't show because page times out after 60 secs
    $("#mid_game_container").hide();
    $("#end_container").hide();

    window.scrollTo(0, 400);


    //transition from start screen to game
    $("#start_button").on("click", function () {

        // Hide the start screen
        $("#start_container").hide();
        // Show Game 
        $("#mid_game_container").show();

        startCountdown();
        return;

    });


    // Counts down and displays time
    function countdown() {

        // counting down right here
        count--;

        // countdown is displayed
        $('#timer_number').html(count + " Seconds");

        // click "done" before time is up
        $("#done_button").on("click", function () {

            // Stop countdown and run the timeUp function
            count = 0;
            return;
        });

        // Finish the game when timer is complete 
        if (count == -1) {
            // Collect answers
            timeUp();
            // Hide the questionse
            $("#mid_game_container").hide();
        }
    }

    // countdown
    function startCountdown() {

        setInterval(countdown, 1000);
    }

    // Function starts after time is up
    function timeUp() {

        // validated values
        var Q1 = $('input:radio[name="q1"]:checked').val();
        var Q2 = $('input:radio[name="q2"]:checked').val();
        var Q3 = $('input:radio[name="q3"]:checked').val();
        var Q4 = $('input:radio[name="q4"]:checked').val();
        var Q5 = $('input:radio[name="q5"]:checked').val();
        var Q6 = $('input:radio[name="q6"]:checked').val();
        var Q7 = $('input:radio[name="q7"]:checked').val();
        var Q8 = $('input:radio[name="q8"]:checked').val();
        var Q9 = $('input:radio[name="q9"]:checked').val();
        var Q10 = $('input:radio[name="q10"]:checked').val();


        // right answers are below
        if (Q1 == undefined) {
            unansweredCount++;
        }
        else if (Q1 == "2009") {
            correctCount++;
        }
        else {
            wrongCount++;
        }

        if (Q2 == undefined) {
            unansweredCount++;
        }
        else if (Q2 == "Ethereum") {
            correctCount++;
        }
        else {
            wrongCount++;
        }

        if (Q3 == undefined) {
            unansweredCount++;
        }
        else if (Q3 == "Elon Musk") {
            correctCount++;
        }
        else {
            wrongCount++;
        }

        if (Q4 == undefined) {
            unansweredCount++;
        }
        else if (Q4 == "Tron") {
            correctCount++;
        }
        else {
            wrongCount++;
        }

        if (Q5 == undefined) {
            unansweredCount++;
        }
        else if (Q5 == "VeChain") {
            correctCount++;
        }
        else {
            wrongCount++;
        }

        if (Q6 == undefined) {
            unansweredCount++;
        }
        else if (Q6 == "$28,000") {
            correctCount++;
        }
        else {
            wrongCount++;
        }

        if (Q7 == undefined) {
            unansweredCount++;
        }
        else if (Q7 == "Satoshi Nakamoto") {
            correctCount++;
        }
        else {
            wrongCount++;
        }

        if (Q8 == undefined) {
            unansweredCount++;
        }
        else if (Q8 == "Consensus") {
            correctCount++;
        }
        else {
            wrongCount++;
        }

        if (Q9 == undefined) {
            unansweredCount++;
        }
        else if (Q9 == "All of the Above") {
            correctCount++;
        }
        else {
            wrongCount++;
        }


        if (Q10 == undefined) {
            unansweredCount++;
        }
        else if (Q10 == "35,334%") {
            correctCount++;
        }
        else {
            wrongCount++;
        }

        // correct, wrong, and unanswered questions added up
        $('#correct_answers').html(correctCount);
        $('#wrong_answers').html(wrongCount);
        $('#unanswered').html(unansweredCount);

        // Shows end container
        $("#end_container").show();

        window.scrollTo(0, 550);

    }

});

