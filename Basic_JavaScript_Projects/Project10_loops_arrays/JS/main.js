function Call_Loop() { //Example of a WHILE Loop  
    var Digit = "";
    var X = 1;
    while (X < 21) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function my_String() { // Example of a function that counts the number of characters in the string
    var str = "I love dogs!";
    var n = str.length;
    document.getElementById("string").innerHTML = n;
}

var Instruments = ["Shetland Sheepdog", "Golden Retriever", "French Bulldog", "Greyhound", "Border Collie"];
var Content = "";
var Y;
function for_Loop() { //Example of a for Loop
for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {  ///Array example 
    var Dog_Act = [];
    Dog_Act[0] = "playing";
    Dog_Act[1] = "barking";
    Dog_Act[2] = "sleeping";
    Dog_Act[3] = "chewing";
    document.getElementById("Array").innerHTML = "In this video the dog  is " +
        Dog_Act[0] + ".";
}

function constant_function() { ///Constant fuction example
    const Dog_Food = {type:"kibble", brand: "Purina", flavor: "chicken"};
    Dog_Food.flavor = "beef";
    Dog_Food.price = "$30";
    Dog_Food.size = "small morsels"
    document.getElementById("Constant").innerHTML = "A popular dog food is " + 
        Dog_Food.flavor + "-flavored " + Dog_Food.type + " sized " + Dog_Food.size;
}

var X = 100; //practice with scope of variables
document.write(X);
{
    var X = 50;  //practice with scope of variables
    document.write("<br>" + X);
}

function scope_Function() { /// example of return method to display value of PI 
    return Math.PI;
}

document.getElementById("Return").innerHTML = scope_Function();

let dog = { ///using let to declare an onject
    breed: "Collie ",
    class: "herding ",
    size: "large-sized ",
    description : function () {
        return "This dog is a " + this.size + this.class + this.breed;
    }

};
document.getElementById("Dog_Object").innerHTML = dog.description(); //HTML reference

var text = ""; //example of a Break within a Loop 
var i;
for (i = 0; i < 10; i++) {
    if (i === 6) { break; }
    text += "This number is " + i + "<br>";
}
document.getElementById("break").innerHTML = text;

var words = ""; //example of a Continue in a Loop
var a;
for (a = 0; a < 13; a++) {
    if (a === 6) {continue; }
    words += "This number is " + a + "<br>";
}
document.getElementById("demo").innerHTML = words;