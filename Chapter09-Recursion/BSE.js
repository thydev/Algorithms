// Binary String Extension
var str = "1?1"; // return ["101", "111"]

function BSE(str, res=[]) { 
    var qdx = str.indexOf('?');
    if (qdx === -1) {
        res.push(str);
    }
    var str0 = str.slice(0, qdx) + 0 + str.slice(qdx);
    var str1 = str.slice(0, qdx) + 1 + str.slice(qdx);
    BSE(str0, res);
    BSE(str1, res);
    return res;
}
Not working yet
console.log(BSE(str));