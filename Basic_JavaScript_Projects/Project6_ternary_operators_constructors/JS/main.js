function Ride_Function() { //Declaring a function
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; //comparing height to make sure 52 inches or higher
    document.getElementById("Ride").innerHTML = Can_ride + " to ride the rollercoaster.";
}

function Vote_Function() { //Declaring a function
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not eligible":"You are eligible"; //comparing age to see if 18 or or higher
    document.getElementById("Vote").innerHTML = Can_vote + " to vote."
}


function Vehicle(Make, Model, Year, Color) { // decalring a function Assigning variables
    this.Vehicle_Make = Make;   //assigning variables
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");//Constructor Creating an oject
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");//Constructor Creating an oject
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");// Creating an oject
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}

function Animal(Species, Age, Diet, Color) { //Declaring a function
    this.Animal_Species = Species; //Assigning variables
    this.Animal_Age = Age;
    this.Animal_Diet = Diet;
    this.Animal_Color = Color;
}
var Leo = new Animal("Lion", 6, "Carnivore", "Tawny"); // Constructor Creating an oject
var Chuck = new Animal("Beaver", 2, "Herbavore", "Brown");//Constructor Creating an oject
var Jasper = new Animal("Wolf", 9, "Omnivore", "White");//Constructor Creating an oject
function myAnimal() {
    document.getElementById("Animal_Constructor").innerHTML =
    "Jasper is a " + Jasper.Animal_Color + " -colored " + Jasper.Animal_Species + 
    " with an age of " + Jasper.Animal_Age;
}

function count_Function() {    ///Nested Function 
    document.getElementById("Nested_Function").innerHTML = Count ();
    function Count() {
        var Starting_point = 119;
        function Plus_one() {Starting_point -= 1;} ///Subtraction subfunction
        Plus_one();
        return Starting_point;
     }
}