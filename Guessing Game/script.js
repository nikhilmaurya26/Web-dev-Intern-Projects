var msg1 =document.getElementById("message1");
var msg2 =document.getElementById("message2");
var msg3 =document.getElementById("message3");

var answer = Math.floor(Math.random()*100)+1;
var no_of_guesses = 0;
var guessed_no= [];

function play(){
    var user_guess =  document.getElementById("guess").value  ;

    if(user_guess <1 || user_guess>100){
        alert("Are !! Choose a number between 1 to 100");
    }
    else{
        guessed_no.push(user_guess);
        no_of_guesses+=1;

        if(user_guess<answer){
            msg1.textContent= "bas bas sahi ja rhe thoda bada socho"
            msg2.textContent="No. of guesses:" + no_of_guesses;
            msg3.textContent="Gusses number are:" + guessed_no;
        }
        else if(user_guess>answer){
            msg1.textContent= "Jyda bada ho gaya thoda chota socho"
            msg2.textContent="No. of guesses:" + no_of_guesses;
            msg3.textContent="Gusses number are:" + guessed_no;
        }
        else if(user_guess=answer){
            msg1.textContent= "Yippe Champ ! YOU WIN"
            msg2.textContent="The No. was" + answer;
            msg3.textContent="You guessed it in" + no_of_guesses + "gusses"; 
        }           
    }
}
