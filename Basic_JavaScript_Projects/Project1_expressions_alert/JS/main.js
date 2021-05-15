window.alert ("Here\'s an ALERT!");

document.write(5*5);

var Pets = "House pets", Dog = "Copper", Cat= "Tuffy", Rabbit = "Frank"; //Defining multiple variables in one expression

var Pets = Pets.fontcolor("red"); // Assigning var Pets font color red
var Dog = Dog.fontcolor("orange"); //Assigning var Dog font color orange
var Cat = Cat.fontcolor("brown"); //Assigning var Car font color brown
var Rabbit = Rabbit.fontcolor("pink"); //Assigning var Rabbit font color pink
document.write(Rabbit); //Pulling the variable to display name an corrosponding font color

function myFunction() {
    var str1 = "How is the weather today?";
    var str2 = "The weather is great!";
    var result = str1.concat(str2);
    document.getElementById("Weather").innerHTML = result;
}