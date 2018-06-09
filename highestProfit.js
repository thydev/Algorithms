function highestProfit(arr) {
    let sumProfit = 0;
    for (let i = 0; i < arr.length; i++) {
        let tempProfit = arr[i + 1] - arr[i];
        if (tempProfit <= 0) {
            continue;
        } else {
            if (i + 2 >= arr.length - 1) {
                if (tempProfit > (arr[i + 2] - arr[i])) {
                    sumProfit += tempProfit;
                } else {
                    sumProfit += (arr[i + 2] - arr[i]);
                }
                return sumProfit;
            } else {
                let j = i + 2;
                while (j < arr.length) {
                    if (tempProfit > (arr[j] - arr[i])) {
                        sumProfit += tempProfit;
                        i = j - 1;
                        break;
                    } else {
                        tempProfit = arr[j] - arr[i];
                        j++;
                    }
                }
            }
        }
    }
    return sumProfit;
}
console.log(highestProfit([100, 180, 240, 310, 40, 545, 690]));
// 180 - 100 = 80
// 240 - 100 = 140
// 310 - 100 = 210 ====> 210
// 545 - 40 = 505
// 690 - 40 = 650 ====> 650
// sumProfit = 210 + 650
// sumProfit = 860