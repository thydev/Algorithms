function isSupervocalic(str){
    var vow = {a: 0, e: 0, i: 0, o: 0, u: 0};
    for(var k in vow) {
        for(var i = 0; i < str.length; i++){
            if (str[i] === k) vow[k]++;
            if (vow[k] > 1) return false; //To exit early
        }

    }

    for(var k in vow){
        if (vow[k] != 1) return false;
    }
    return true;
}

console.log(isSupervocalic('supervocalic'));
console.log(isSupervocalic('banana'));
console.log(isSupervocalic('ambidextrous'));
console.log(isSupervocalic('milquetoast'));
console.log(isSupervocalic('menstruation'));