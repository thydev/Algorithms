function censorWords(str, wordList) {
    var censorIndex = [];
    for (let i = 0; i < wordList.length; i++) {
        for (var istr = 0; istr < str.length; istr++) {
            if (str[istr] == wordList[i][0]) {
                var startIndex = istr;
                var isMatch = true;
                for (var iword = 1; iword < wordList[i].length; iword++) {
                    if (str[startIndex + iword] != wordList[i][iword]) {
                        isMatch = false;
                        break;
                    }
                }
                if (isMatch) {
                    for (var i2censor = 0; i2censor < wordList[i].length; i2censor++) {
                        censorIndex.push(startIndex + i2censor);
                    }
                    istr += wordList[i].length
                }
            }
        }
    }
    var strCensor = "";
    for (var i = 0; i < str.length; i++) {
        var isCensor = false;
        for (var ics = 0; ics < censorIndex.length; ics++) {
            if (i == censorIndex[ics]) {
                isCensor = true;
                break;
            }
        }
        if (isCensor) {
            strCensor += "$";
        } else {
            strCensor += str[i];
        }
    }
    return strCensor;
}

console.log(censorWords("Today is a Great day", ["day", "eat"]));
console.log(censorWords("Today is a Great day", ["da", "Gre"]));