if (1 < 2) {   //IF statement example  
    document.write('The left number is smaller than the number on the right.' + "<br>") ///While display this text in HTML if TRUE
}

var X = 10;             /////Example of a GLOBAL variable 
function Add_numbers_1() {  ///meaning the variable "X" can be used in other functions
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100 + "<br>"); /////Therefore the code can use the variable "X" in this function
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() { ///Example of LOCAL variable
    var Y = 10;             ////Meaning thr variable "Y" can ONLY be used
    document.write(20 + Y + "<br>"); ////for the function in which it is embedded in
}
function Add_numbers_4() { ///example shows with a LOCAL you cannot use the "Y"
    document.write(Y + 100); ///variable to display code on HTML
}
Add_numbers_3();
Add_numbers_4();

function More_Numbers() { ///another example of  LOCAL variable with a debugging
    var B = 5;
    console.log( B + 14);
}
function More_Numbers_1() { ///LOCAL example with debugging to show issues in console
    console.log( B + 12);
}


function get_Date() {    //Displaying text-phrase if code ran before 6:00pm
    if (new Date().getHSours() < 18) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function Guest_Function() { //Declaring a function
    Age = document.getElementById("Age").value;
    if (Age >= 21) {            //Setting an IF condition, will display if answer is TRUE
        Answer = "You are welcomed into the lounge, please come in.";
    }
    else {                          //Setting an ELSE condition,will display is answer is FALSE
        Answer = "Sorry, no minors allowed inside the lounge.";
    }
    document.getElementById("Access").innerHTML = Answer;
}

function Time_function() { //////Function to get time from computer
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {    ///upon time being before noon but after midnight
        Reply = "It is morning time!"; ///text displays in HTML
    }
    else if (Time >= 12  == Time < 18) {
        Reply = "It is the afternoon!";
    }
    else {
        Reply = "It is the evening!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
