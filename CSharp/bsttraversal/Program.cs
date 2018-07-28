using System;
using System.Collections;
using System.Collections.Generic;
/*
Questions
#2
Given a binary tree, return the level order traversal of its nodes&#39; values. (ie, from left to right, level by
level).
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

        private List<List<int>> resultLeftRight;
        public List<List<int>> TraverseLeftRight(Node root)
        {
            resultLeftRight = new List<List<int>>();
            if (root != null)
            {
                List<int> tmp = new List<int>();
                tmp.Add(root.Value);
                resultLeftRight.Add(tmp);
                TraverseLeftRightHelper(root);
            }
            return resultLeftRight;
        }

        private void TraverseLeftRightHelper(Node root)
        {
            if (root == null)
            {
                return;
            }
            List<int> tmp = new List<int>();
            if (root.Left != null)
            {
                tmp.Add(root.Left.Value);
            }
            if (root.Right != null)
            {
                tmp.Add(root.Right.Value);
            }
            if (tmp.Count > 0)
            {
                resultLeftRight.Add(tmp);
            }
            TraverseLeftRightHelper(root.Left);
            TraverseLeftRightHelper(root.Right);
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


            List<List<int>> result = new List<List<int>>();
            result = bt1.TraverseLeftRight(bt1);

            foreach (var item in result)
            {
                System.Console.WriteLine();
                foreach (var item2 in item)
                {
                    System.Console.Write(item2.ToString() + " ");
                }
            }
        }


    }
}
