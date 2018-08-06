using System;
using System.Collections;
using System.Collections.Generic;
/*
Questions
#2
Given a binary tree, return the level order traversal of its nodes&#39; values. (ie, from left to right, level by level).
For example:
Given binary tree
{3,9,20,#,#,15,7},

3
/  \
9    20
/ \  
7   15 

return its level order traversal as:
[
[3],
[9,20],
[15,7]
]
*/
namespace bsttraversal
{
    class Node
    {
        public int Value { get; set; }
        public Node Left { get; set; }
        public Node Right { get; set; }

        public Node(int val)
        {
            Value = val;
        }

        public void AddLeft(Node left)
        {
            Left = left;
        }

        public void AddRight(Node right)
        {
            Right = right;
        }

        public void InsertNode(int val)
        {
            if (val <= Value)
            {
                if (Left == null)
                {
                    AddLeft(new Node(val));
                }
                else
                {
                    Left.InsertNode(val);
                }
            }
            else
            {
                if (Right == null)
                {
                    AddRight(new Node(val));
                }
                else
                {
                    Right.InsertNode(val);
                }
            }
        }

        public List<List<int>> NodeByLevel(Node root)
        {
            List<List<int>> result = new List<List<int>>();
            Queue<Node> q1 = new Queue<Node>();
            Queue<Node> q2 = new Queue<Node>();
            q1.Enqueue(root);
            while (q1.Count > 0 || q2.Count > 0)
            {
                List<int> temp = new List<int>();
                while (q1.Count > 0)
                {
                    var node = q1.Dequeue();
                    temp.Add(node.Value);
                    if (node.Left != null)
                    {
                        q2.Enqueue(node.Left);
                    }
                    if (node.Right != null)
                    {
                        q2.Enqueue(node.Right);
                    }
                }
                if (temp.Count > 0) result.Add(temp);
                temp = new List<int>();
                while (q2.Count > 0)
                {
                    var node = q2.Dequeue();
                    temp.Add(node.Value);
                    if (node.Left != null)
                    {
                        q1.Enqueue(node.Left);
                    }
                    if (node.Right != null)
                    {
                        q1.Enqueue(node.Right);
                    }
                }
                if (temp.Count > 0) result.Add(temp);
            }
            return result;
        }
    }


    class Program
    {
        static void Main(string[] args)
        {
            // {9, 7, 15, 12, 20},
            Node bt1 = new Node(9);
            bt1.InsertNode(7);
            bt1.InsertNode(15);
            bt1.InsertNode(12);
            bt1.InsertNode(20);
            bt1.InsertNode(5);
            bt1.InsertNode(8);

            List<List<int>> result = new List<List<int>>();
            result = bt1.NodeByLevel(bt1);

            foreach (var item in result)
            {
                System.Console.WriteLine();
                foreach (var item2 in item)
                {
                    System.Console.Write(item2.ToString() + " ");
                }
            }
            System.Console.WriteLine();
        }
    }
}
