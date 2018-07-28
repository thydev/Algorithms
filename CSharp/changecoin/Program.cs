using System;
/*
Question1
You are given coins of different denominations and a total amount of money amount. 
Write a function to compute the fewest number of coins that you need to make up that amount.
If that amount of money cannot be made up by any combination of the coins, return -1.
Example 1:
    coins = [1, 2, 5], amount = 11
    return 3 (11 = 5 + 5 + 1)
Example 2:
    coins = [2], amount = 3
    return -1.
Note:
You may assume that you have an infinite number of each kind of coin.
 */
namespace changecoin
{
    class Program
    {
        public static int NumberOfCoins(int[] coins, int amount)
        {
            int result = 0;
            for (var i = coins.Length - 1; i >= 0; i--)
            {
                result += (int)Math.Floor((double)(amount / coins[i]));
                amount = amount % coins[i];
            }

            return amount == 0 ? result : -1;

        }
        static void Main(string[] args)
        {
            int[] coins = { 1, 2, 5 };
            int amount = 11;

            System.Console.WriteLine(NumberOfCoins(coins, amount)); // 3

            int[] coins2 = { 2 };
            int amount2 = 3;
            System.Console.WriteLine(NumberOfCoins(coins2, amount2)); // -1

        }
    }
}
