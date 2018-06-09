function coinchange(money) {
    const coinvalue = [25, 10, 5, 1];
    const coinname = ["Quarter", "Dime", "Nickel", "Penny"]
    let coins = [0, 0, 0, 0];
    money *= 100;
    for (var i = 0; i < 4; i++) {
        coins[i] = Math.floor(money / coinvalue[i]);
        money %= coinvalue[i];
        if (coins[i] > 0) {
            console.log(coinname[i] + ": " + coins[i]);
        }
    }

}
coinchange(1.96);
coinchange(1.18);