var X = 5;
X++; 
document.write(X);  // Trying to demonstrate an increment operator
                    // *****Not working properly*****



var X = 6;          // Trying to demonstrate a decrement operator
X--;                // ****Not working properly****
document.write(X);

function subtraction_Function() {   // Displays a subtraction problem
    var Subtraction = 8 - 2;
    document.getElementById("Math").innerHTML = "8 - 2 = " + Subtraction;
}

function addition_Function() {      // Displays an addition problem
    var Addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + Addition;
}

function multiplication () {        // Displays a multiplication problem
    var simple_Math = 5 * 5;
    document.getElementById("Math").innerHTML = "5 x 5 = " + simple_Math;
}

function division () {      // Displays a division problem
    var simple_Math = 16 / 4;
    document.getElementById("Math").innerHTML = "16 / 4 = " + simple_Math;

}

function more_Math() {      // Displays a multi operator equation
    var simple_Math = (1+2) * 10 + 5;
    document.getElementById("Extra").innerHTML = "1 plus 2, multipled by 10 plus 5 equals " + simple_Math;

}

function modulus_Operator () {  // Displays the remainder of 20 after divided by 3
    var simple_Math = 20 % 3;
    document.getElementById("mod").innerHTML ="When you divide 20 by 3 you have a remainder of: " + simple_Math;
}

function negation_Operator () {   // Displays negative 25
    var x = 25;
    document.getElementById('Neg').innerHTML =-x;
}


window.alert(Math.random()); //brings up a window alert box with a random 
                            // number bewtween 0 and 1

window.alert(Math.random() * 100); // brings up a window alert box with a random
                                    // number between 0 and 100