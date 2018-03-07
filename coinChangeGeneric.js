
function sortDictToArray(aDict) {
    var arrSorted = [];
    for(key in aDict){
        arrSorted.push({
            name: key,
            rate: aDict[key]
        });
    }
    
    for(var i = 0; i < arrSorted.length; i++){
        var tmpMax = arrSorted[i];
        for (var j = i+1; j < arrSorted.length; j++){
            if (parseInt(arrSorted[j].rate) > parseInt(tmpMax.rate)){
                arrSorted[i] = arrSorted[j]
                arrSorted[j] = tmpMax;
                tmpMax = arrSorted[i];
            }
        }
    }
    return arrSorted;
}

function coinChangeGeneric(ledger, amount){
    var ledgerSorted = sortDictToArray(ledger);

    for(var i = 0; i < ledgerSorted.length; i++){
        ledgerSorted[i]["amount"] = Math.floor(amount / ledgerSorted[i].rate);
        amount %= ledgerSorted[i].rate;
    }
    return ledgerSorted;
}

var ledger = {
    C: 5,
    D: 1,
    A: 25,
    B: 10,
}
var ledger2 = {
    CC: 15,
    DD: 1,
    AA: 35,
    BB: 10,
}
console.log(coinChangeGeneric(ledger, 123))
console.log(coinChangeGeneric(ledger2, 123))
var change1 = coinChangeGeneric(ledger2, 123);
for (var i = 0; i < change1.length; i++){
    if (change1[i].amount > 0){
        console.log(change1[i].name,":", change1[i].amount)
    }
}