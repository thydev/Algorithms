// Binary Search Tree

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
  // Let node handle all the insert
  add(node) {
    if (node.val > this.val) {
      if (this.right) {
        this.right.add(node);
      } else {
        this.right = node;
      }
    } else {
      if (this.left) {
        this.left.add(node);
      } else {
        this.left = node;
      }
    }
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    this.root.add(newNode);
    return this;
  }

  inOrder(node = this.root) {
    if (!node) return;
    this.inOrder(node.left);
    console.log(node.val);
    this.inOrder(node.right);
  }

  preOrder(node = this.root) {
    if (!node) return;
    console.log(node.val);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }

  postOrder(node = this.root) {
    if (!node) return;
    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.val);
  }

  // pre-order
  // printAll(node = this.root) {
  //   if (node) console.log(node.val, 'in print');
  //   if (node) {
  //     this.printAll(node.left);
  //     this.printAll(node.right);
  //   }
  // }

  printLeft(node = this.root) {
    if (node) {
      if (node.left) {
        console.log(node.left.val);
      }
      this.printLeft(node.left);
      this.printLeft(node.right);
    }
  }
}

BST.prototype.size = function(node = this.root, count = 0) {
  if (!node) return count;
  count++;
  count = this.size(node.left, count);
  count = this.size(node.right, count);
  return count;
};

BST.prototype.contain = function(val, node = this.root) {
  if (!node) return false;
  if (node.val === val) {
    return true;
  } else if (val > node.val) {
    return this.contain(val, node.right);
  } else {
    return this.contain(val, node.left);
  }
  // return false;
};

let bst1 = new BST();
bst1.add(10);
bst1.add(6);
bst1.add(7);
bst1
  .add(20)
  .add(15)
  .add(13)
  .add(28)
  .add(18)
  .add(4);
console.log(bst1);
console.log('======Size=======');
console.log(bst1.size());

console.log('=====Left======');
bst1.printLeft(bst1.root);
console.log('=====In-Ordeer======');
bst1.inOrder();
console.log('=====Pre-Ordeer======');
bst1.preOrder();
console.log('=====Post-Ordeer======');
bst1.postOrder();
console.log('=====Contain======');
console.log(bst1.contain(20));
console.log(bst1.contain(10));
console.log(bst1.contain(120));
