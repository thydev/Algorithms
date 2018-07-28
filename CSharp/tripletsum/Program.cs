using System;
using System.Collections.Generic;
using System.Collections;
/*
Questions # 3
  Given an array S of n integers, are there  elements a, b, c in S such that a + b + c = 0? Find all  unique triplets in the array which gives the sum of zero.
  Note: Elements in a triplet (a,b,c) must be in non-descending  order. (ie, a ≤  b ≤ c)
The solution set must not contain duplicate triplets.
For example, given array S = {-1 0 1 2 -1 -4},
 
 
   A solution set is:
      (-1, 0, 1)
      (-1, -1, 2)

 */
namespace tripletsum
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] arr = { -1, 0, 1, 2, -1, -4 };
            List<Tuple<int, int, int>> test;
            test = TripleZero(arr);
            foreach (var item in test)
            {
                System.Console.WriteLine(item);
            }
        }

        public static List<Tuple<int, int, int>> TripleZero(int[] arr)
        {
            List<Tuple<int, int, int>> result = new List<Tuple<int, int, int>>();
            for (int i = 0; i < arr.Length - 2; i++)
            {
                for (int j = i + 1; j < arr.Length - 1; j++)
                {
                    for (int k = j + 1; k < arr.Length; k++)
                    {
                        if ((arr[i] + arr[j] + arr[k] == 0)) // Show all triplets
                        {

                            List<int> ltmp = new List<int>() { arr[i], arr[j], arr[k] };
                            // non-descending  order. (ie, a ≤  b ≤ c)
                            ltmp.Sort();
                            Tuple<int, int, int> tmp = new Tuple<int, int, int>(ltmp[0], ltmp[1], ltmp[2]);
                            if (result.Count == 0)
                            {
                                result.Add(tmp);
                            }
                            else
                            {
                                bool isExist = false;
                                foreach (var item in result)
                                {
                                    // check duplicate
                                    if (item.Equals(tmp))
                                    {
                                        isExist = true;
                                        break;
                                    }
                                }
                                if (!isExist)
                                {
                                    result.Add(tmp);
                                }
                            }
                        }
                    }
                }
            }
            return result;
        }
    }
}
