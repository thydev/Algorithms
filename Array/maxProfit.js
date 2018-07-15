/*
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

Example 1:

Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
             Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Example 2:

Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.
Example 3:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // current day compare to the next day
  // current < next then buy
  // find profit,  profit = next - current,
  // find next profit, if next - current > profit, then profit = next - current else sell it and save profit
  // buy the next day, repeat

  var buy = 0;
  var profit = 0;
  for (var i = 0; i < prices.length - 1; i++) {
    console.log(prices[i], prices[i + 1]);
    if (prices[i] < prices[i + 1]) {
      buy = prices[i];
      console.log(buy, 'buy');
      // find profit
      var tmpProfit = prices[i + 1] - buy;
      for (var j = i + 1; j < prices.length - 1; j++) {
        if (prices[j + 1] < prices[j]) {
          // Sell for profit
          if (prices[j] - buy > tmpProfit) {
            console.log('sell', prices[j]);
            tmpProfit = prices[j] - buy;
            i = j;
          }
        } else {
          break;
        }
      }
      console.log(i, 'i');
      profit += tmpProfit;
    }
  }

  return profit;
};

console.log('Output', maxProfit([7, 1, 5, 3, 6, 4])); // Output 7
console.log('Output', maxProfit([1, 2, 3, 4, 5])); // Output 4
console.log('Output', maxProfit([2, 1, 4, 5, 2, 9, 7])); // Output 11

var maxProfit2 = function(prices) {
  let result = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      result += prices[i] - prices[i - 1];
    }
  }
  return result;
};

console.log('Output', maxProfit2([7, 1, 5, 3, 6, 4])); // Output 7
console.log('Output', maxProfit2([1, 2, 3, 4, 5])); // Output 4
console.log('Output', maxProfit2([2, 1, 4, 5, 2, 9, 7])); // Output 11
