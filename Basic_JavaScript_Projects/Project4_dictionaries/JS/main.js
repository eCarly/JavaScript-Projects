function my_Dictionary() { //Function defined
    var Pet = {             //Key is defined
        Species: "Fish",        // Start of values defined
        Color: "Blue",          
        Breed: "Guppy",
        Food: "Shrimp",
        Tank: 10,                  //End of values defined
       
    } ;
    delete Pet.Color        //Deletes value 'Color' within the dictionary
    document.getElementById("Dictionary").innerHTML = Pet.Color; // Returns value when given key, note this is for example purposes and the code will return as 'undefined' in HTML
}