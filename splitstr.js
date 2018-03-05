function splitstr(str, sep){
    var arr = [];
    var temp = "";
    for (var i = 0; i < str.length; i++){
        if (str[i] != sep){
            temp += str[i];
        } else {
            if (temp != ""){ //Avoid when there are more than one separatoer next to each other
                arr.push(temp);
                temp = "";
            }
        }
    }
    // Add the last element if there is not the separater at the end of the string
    if (temp != "") arr.push(temp); 
    return arr;
}

console.log(splitstr("This is Sunday", " ")); //[ 'This', 'is', 'Sunday' ]
console.log(splitstr("This   is    Sunday   ", " ")); //[ 'This', 'is', 'Sunday' ]
console.log(splitstr("This is Sunday", "i")); //[ 'Th', 's ', 's Sunday' ]
console.log(splitstr("Too many o characters", "o")) //[ 'T', ' many ', ' characters' ]
