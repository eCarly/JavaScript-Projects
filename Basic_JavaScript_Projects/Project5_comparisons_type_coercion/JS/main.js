document.write(typeof ('Elephant') +"<br>"); // Uisplay string as value type
document.write(typeof(8) + "<br>");         //Display number as value type

console.log(2 + 8);
console.log (10 < 7);

document.write(('20' + 9) + "<br>");  //combinding a string
document.write((7 + 'eleven') + "<br>");   //combinding a string

document.write((4E310) + "<br>"); //infinity number

document.write((-5E310) + "<br>"); //negative infinity number

document.write((10 > 8) + "<br>"); // 10 greater than 8 return is TRUE

document.write((20 < 15) + "<br>"); //  20 lesser than 15 return is FALSE

document.write((50 == 50) + "<br>"); // Comparing these are equal return is TRUE

document.write((2 == 6) + "<br>"); // Comparing these are equal return is FALSE

A = 100
B = 100
document.write((A === B) + "<br>"); //Comparing is value and "type" is same/equal return is TRUE

C = "Cat"
D = 11
document.write((C === D) + "<br>");//Comparing is value and "type" is same/equal return is FALSE

E = 69
F = "69"
document.write((E === F) + "<br>"); //Comparing is value and "type" is same/equal return is FALSE

G = 25
H = 35
document.write((G === H) + "<br>"); //Comparing is value and "type" is same/equal return is FALSE

document.write((11 > 1 && 21 > 11) + "<br>"); // && means both must be correct to be true, this returns as TRUE
document.write((30 > 21 && 14 < 7) + "<br>"); // && means both must be correct to be true, this returns as FALSE

document.write((0 > 10 || 10 > 5) + "<br>"); // || means either or can be correct to be true, this returns as a TRUE
document.write((7 > 17 || 14 > 28) + "<br>"); // || means either or can be correct to be true, this returns as a FALSE

function not_Function() {
    document.getElementById("Not").innerHTML = !(7 > 28); // ! stands for "not",meaning that if the answer is incorrect it will return as true, this return would be TRUE

}
function nots_Function() {
    document.getElementById("Nots").innerHTML = !(18 > 10); // a "double negative" this return would be FALSE
}

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0; // Example of a NaN return (not a number)
}


function Function() {
    document.getElementById("Tests").innerHTML = isNaN('This is string example'); // isNaN states not a number, there is a string so return is TRUE
}

function Functions() {
    document.getElementById("Tester").innerHTML = isNaN('1995'); // isNaN states not a number, there is a number so return is FALSE
}