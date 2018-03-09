// "a x a"
// "aa"
// "racecar"
// "What up, daddy-0" -> "dad"
// "uh ... not much" -> "u"
// "Yikes! my favorite racecar erupted!" -> "e racecar e"
function longestPalindrome(str){
    var arrPal = []
    for(var i=0; i < str.length; i++){
        var tmp = str[i]
        var left = i - 1;
        var right = i + 1;
        while (left >= 0 && right <= str.length){
            if (str[left] == str[right]){
                tmp = str[left] + tmp + str[right];
                left--;
                right++;
            } else {
                break;
            }
        }
        arrPal.push(tmp);
        // Check "aa"
        tmp = ""
        left = i;
        right = i+1;
        while (left >= 0 && right <= str.length){
            if (str[left] == str[right]){
                tmp = str[left] + tmp + str[right];
                left--;
                right++;
            } else {
                break;
            }
        }
        if (tmp != ""){
            arrPal.push(tmp)
        }
    }

    var iLong = 0;
    var tempLength = arrPal[iLong].length;
    for(var i = 1; i < arrPal.length; i++){
        if (arrPal[i].length > tempLength){
            tempLength = arrPal[i].length;
            iLong = i;
        }
    }
    return arrPal[iLong];
}
console.log(longestPalindrome("a x a"))
console.log(longestPalindrome("aa"))
console.log(longestPalindrome("racecar"))
console.log(longestPalindrome("What up, daddy-0"))
console.log(longestPalindrome("uh ... not much")) //??? No special charater
console.log(longestPalindrome("Yikes! my favorite racecar erupted!"))