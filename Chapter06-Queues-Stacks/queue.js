// go on ------
// enqueue
// dequeue

// ---> contains(queue, val)
// ---> contains(stack)
// ===> compare(s1, s2) // compare stacks
// ===> Q using 2 stacks
//     - StackQ {
//         this.stack1 = new stack()
//         this.stack2 = new stack()
//     }
//     - Make method : enqueue, dequeue
//     - contains - optional

function Node(val) {
    this.value = val;
    this.next = null;
}

function Queue() {
    this.head = null;
}

// Add to back // enqueue
Queue.prototype.add = (val) => {
    const node = new Node(val);
    if (!this.head) {
        this.head = node;
        return this;
    }
    let runner = this.head;
    while (runner.next) {
        runner = runner.next;
    }
    runner.next = node;
    return this;
}

// Remove front // dequeue //
Queue.prototype.dequeue = () => {
    if (!this.head) return this;
    this.head = this.head.next;
    return this;
}
Queue.prototype.display = () => {
    let runner = this.head;
    while (runner) {
        console.log(runner.value);
        runner = runner.next;
    }
}

let q1 = new Queue();
q1.add(10);
q1.add(20);
q1.add(30);
q1.display();
console.log('====== Dequeue ======')
q1.dequeue();
q1.display();