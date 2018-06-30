using System;

namespace linkedList
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Hello World!");

      SinglyLinkedList sl1 = new SinglyLinkedList();
      sl1.insertFirst(12);
      sl1.insertFirst(23);
      sl1.insertFirst(32);
      sl1.insertFirst(90);
      sl1.insertLast(999);
      sl1.displayList();
      sl1.deleteFirst();
      sl1.displayList();
    }
  }

  public class SinglyLinkedList
  {
    private Node head;
    public bool isEmpty()
    {
      return (head == null);
    }

    public void insertFirst(int data)
    {
      Node newNode = new Node();
      newNode.data = data;
      newNode.next = head;
      head = newNode;
    }

    public Node deleteFirst()
    {
      Node temp = head;
      head = head.next;
      return temp;
    }

    public void displayList()
    {
      System.Console.WriteLine("Displaying.....");
      Node current = head;
      while (current != null)
      {
        current.displayNoe();
        current = current.next;
      }
    }

    public void insertLast(int data)
    {
      Node current = head;
      while (current.next != null)
      {
        current = current.next;
      }
      Node newNode = new Node();
      newNode.data = data;
      current.next = newNode;
    }
  }

  public class Node
  {
    public int data;
    public Node next;

    public void displayNoe()
    {
      Console.WriteLine("<" + data + ">");
    }
  }

}
