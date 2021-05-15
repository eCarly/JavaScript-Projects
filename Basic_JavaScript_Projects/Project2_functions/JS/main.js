function My_First_Function() { //Defining a function
    var str = "This text should be blue!"; //Defining the string
    var result = str.fontcolor("blue"); // Defining the font color
    document.getElementById("Blue_Text").innerHTML = result; //Defining and ID of "Blue_Text"
}

function myFunction() { //Defining a function
    var sentence = "I am learning"; //Assigning a variable
    sentence += " a lot from this course!"; //Assining another variable
    document.getElementById("Concatenate").innerHTML = sentence;// Defining these variables connect
    }