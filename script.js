function myFunction() {
    var answer = document.getElementById("answer").value;
    var text;

    if (answer == "Hello") {
        text = "Welcome. You next hint is: ()"

    } else if (answer == "You may call me the nurse.") {
        text = "Not quite. \n hint: What's my name?";
    } else if (answer == "The nurse") {
        text = "Not quite... \n hint: 'The' is not a name."
    } else if (answer == "nurse") {
        text = "Not quite. Names are capital..."
    } else if (answer == "Nurse") {
        text = "Correct! ()"
    } else if (answer == "ASM") {
        text = "Correct! ()"
    } else if (answer == "L") {
        text = "Congrats! You made if through get-a-clue week. Contact your big with the name of the game: ()"
    } else {
        text = "Incorrect. Please try again. \n Contact your big if you need a hint. []"
    }
    document.getElementById("demo").innerHTML = text;
    }

