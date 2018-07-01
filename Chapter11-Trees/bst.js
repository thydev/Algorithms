// Binary Search Tree

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

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

  add(val, node) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    this.root.add(newNode);
    return this;
    // if (!node) {
    //   node = new Node(val);
    //   // this.root = node;
    //   return this;
    // }

    // if (val < node.val) {
    //   this.add(val, node.left);
    // } else {
    //   this.add(val, node.right);
    // }
  }

  printAll(node = this.root) {
    if (node) console.log(node.val, 'in print');
    if (node) {
      this.printAll(node.left);
      this.printAll(node.right);
    }
  }
}

// BST.prototype.add = function(val, node = this.root) {
//   console.log(node);
//   if (!node) {
//     node = new Node(val);
//     // this.root = node;
//     console.log(node);
//     return this;
//   }

//   if (val < node.val) {
//     this.add(val, node.left);
//   } else {
//     this.add(val, node.right);
//   }
// };

BST.prototype.size = function(node = this.root, count = 0) {
  if (!node) return count;
  count++;
  count = this.size(node.left, count);
  count = this.size(node.right, count);
  return count;
};

// BST.prototype.printAll = function(node = this.root) {
//   console.log(node, 'in print');
//   if (node) {
//     console.log(node.val);
//     this.printAll(node.left);
//     this.printAll(node.right);
//   }
// };

let bst1 = new BST();
bst1.add(10);
bst1.add(6);
bst1.add(7);
bst1.add(20);
bst1.printAll(bst1.root);
