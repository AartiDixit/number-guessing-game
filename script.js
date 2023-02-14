var checkButton = document.getElementById('checkButton');
var againButton = document.getElementById('againButton');
var output = document.getElementById('outputText');
var randomNumber = Math.ceil(Math.random()*100);
function checkNumber(){
    var input = document.getElementById('userInput').value;
    if(input == randomNumber)
    {
        output.innerHTML = " You guessed right" + "," + "it was" + randomNumber;
        output.style.color = "green";
    }
    else if(input>randomNumber && input<100)
    {
        output.innerHTML = "You guessed to high";
    }
    else if(input<randomNumber && input>1)
    {
        output.innerHTML = "You guessed to low";
    }
    else if(input<1)
    {
        output.innerHTML = "Higher, it has to be between 1 and 100";
    }
    else if(isNaN(input)){
        output.innerHTML = "That is not a number";
    }
    else{
        output.innerHTML = "Lower,it has to be between 1 and 100"
    }
}

checkButton.addEventListener('click', checkNumber);
againButton.addEventListener('click', function(){
    location.reload();
})