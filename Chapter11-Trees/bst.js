// Binary Search Tree

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
}

BST.prototype.Add = (val, node = this.root) => {

    if (!node) {
        node = new Node(val);
        return this;
    }

    if (val < node.val) {
        this.Add(val, node.left);
    } else {
        this.Add(val, node.right);
    }

};

BST.prototype.Size = (node = this.root, count = 0) => {
    if (!node) return count;
    count++;
    count = this.Size(node.left, count);
    count = this.Size(node.right, count);
    return count;
}

BST.prototype.PrintAll = (node = this.root) => {
    if (node) {
        console.log(node.val);
        this.PrintAll(node.left);
        this.PrintAll(node.right);
    }
}