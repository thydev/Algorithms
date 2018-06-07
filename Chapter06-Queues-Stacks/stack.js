function Node(val) {
    this.value = val;
    this.next = null;
}

function Stack() {
    this.top = null;
}

Stack.prototype.push = function (val) {
    var newnode = new Node(val);
    newnode.next = this.top;
    this.top = newnode;
}

Stack.prototype.pop = function () {
    if (this.top == null) return null;
    var val = this.top.val;
    this.top = this.top.next
    return this.top;
}

Stack.prototype.display = function () {
    var runner = this.top;
    var arrtmp = [];
    // console.log(runner)
    while (runner) {
        arrtmp.push(runner.value);
        console.log(runner.value)
        runner = this.pop();
    }
    while (arrtmp.length > 0) {
        this.push(arrtmp.shift())
    }
}

var stack = new Stack();

stack.push("Bulbasaur");
stack.push("Charmander");
stack.push("Squirtle");
stack.display();

console.log("====>Taking out Squirtle");
stack.pop();
stack.display();
console.log("====>Adding Pikachu");
stack.push("Pikachu");
stack.display();