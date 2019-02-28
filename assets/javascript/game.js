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
var loss = 0;
var win = 0;

var computerPick = Math.floor(Math.random() * 111) + 9; {
console.log(computerPick)}
$("#random-number").html(computerPick)

//So we need to wait for the page to load
//we need to assign random numbers to html

function theGemValues() {
    $('#gem1').attr('data-value', 0);
    $('#gem2').attr('data-value', 1);
    $('#gem3').attr('data-value', 2);
    $('#gem4').attr('data-value', 3)
}

//$(".gemClick").theGemValues();


var totalScore = 0
$(document).ready(function(){
    $('#gem1').attr('data-value', gemValue());
    $('#gem2').attr('data-value', gemValue());
    $('#gem3').attr('data-value', gemValue());
    $('#gem4').attr('data-value', gemValue());


    function gemValue (){
        return Math.floor(Math.random() * 9 + 1);
    }

    $(".gemClick").on("click", function(){
   var valueFromElement = $(this).attr('data-value');
        console.log(valueFromElement)
      $(".gemClick").html(gemValue);
       totalScore += gemValue();
       $("#total-score").text(totalScore);
       console.log("our total score " + totalScore)
   
    })


});











