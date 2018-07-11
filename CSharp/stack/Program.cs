using System;

namespace stack
{
    class Program
    {
        static void Main(string[] args)
        {
            string s1 = "string1";
            string temp = s1;
            // temp = "temp string";
            s1 = "string2";
            System.Console.WriteLine(s1);
            System.Console.WriteLine(temp);
            Console.WriteLine("Hello World!");
        }
    }

    public class Stack
    {
        private int maxSize;
        private string[] stackArray;
        private int top;

        public Stack(int size)
        {
            maxSize = size;
            stackArray = new string[maxSize];
            top = -1;
        }

        public void push(string m)
        {
            if (isFull())
            {
                System.Console.WriteLine("This stack is full");
            }
            else
            {
                top++;
                stackArray[top] = m;
            }
        }

        public string pop()
        {
            if (isEmpty())
            {
                System.Console.WriteLine("The stack is empty.");
                return "--";
            }
            else
            {
                int old_top = top;
                top--;
                return stackArray[old_top];
            }
        }
        private bool isFull()
        {
            return (maxSize - 1 == top);
        }

        public bool isEmpty()
        {
            return top == -1;
        }
    }
}
