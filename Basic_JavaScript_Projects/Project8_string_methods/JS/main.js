function full_Quote() { ///strings that are connected together to make a sentence
    var part_1 = "Roses are red, ";
    var part_2 = "Violets are blue, ";
    var part_3 = "Sugar is sweet ";
    var part_4 ="and so are You!";
    var whole_quote = part_1.concat(part_2, part_3, part_4);
    document.getElementById("New_concat").innerHTML = whole_quote;
}

function method_Slice() { //extracts a word from sentence
    var Sentence = "I wanna dance with somebody!";
    var Section = Sentence.slice(2,13); //based on these number (place in string)
    document.getElementById("Slice").innerHTML = Section;
}

function upper_Function() { //example of an Uppercase method
    var str = "Told you so!";
    var res = str.toUpperCase();
    document.getElementById("case").innerHTML = res;
}

function search_Function() { //example of a search()method
    var str = "Miss Greene has a green colored house"
    var n = str.search("green");
    document.getElementById("search").innerHTML = n;
}
function method_String() { //example of a number string function
    var C =1995;
    document.getElementById("string_num").innerHTML = C.toString();
}
function method_Precision() { //Precision method sets how many decimal places you want to display 
    var X = 1337.653549
    document.getElementById("Precision").innerHTML = X.toPrecision(6);
}
function method_Fixed() { //Fixed example, converts number into a string and converts to the designated decimals
    var num = 1988.44
    var n = num.toFixed(3); //adds zeros to meets desired decimal count
    document.getElementById("fix").innerHTML = n;
}
function method_ValueOf() {//Primitive value method
    var str = "Good Morning America!";
    var res = str.valueOf();
    document.getElementById("val").innerHTML = res;
}