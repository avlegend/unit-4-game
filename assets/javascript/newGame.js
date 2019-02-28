// pseudo code
// a game with 4 crystal and has random results
//The random number shown at the start of the game should be between 19 - 120.
// every crystal needs to have a random number between 1-12
// new random number should be generated every time user wins or loses
//when clicking image it should add to the score until it hits the total score 
// if the number is greater than random number the loss score goes up and the game starts over


//if it equals to the random result we increase the win count by one 
//the game starts over with a new random number 

//var game = {
//randomNum: 0,

//}
var game = {
    randomNumber: 0,
    totalScore: 0,
    start: function () {
        var computerPick = Math.floor(Math.random() * 111) + 9;
        $("#random-number").text(this.randomNumber);
        $("#total-score").text(this.totalScore);
    },

    reset: function () {
        $(".gemClick").empty();
        this.totalNumber = 0;
        this.start();
    },
}

$(".gemClick").on("click", function () {
    var valueFromElement = $(this).attr('data-value');
    console.log(valueFromElement)
    $(".gemClick").html(gemValue);
    totalScore += gemValue();
    $("#total-score").text(totalScore);
    console.log("our total score " + totalScore)

})
var totalScore = 0

