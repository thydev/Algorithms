const SinglyLinkedList = require('./singlyList');

let sll = new SinglyLinkedList();
sll.insert(6, "head");
sll.insert(5, 6);
sll.insert(3, 5);
sll.insert(1, 3);
sll.insert(8, 1);
sll.insert(7, 8);
sll.insert(2, 7);
sll.insert(4, 2);

// Before Sorting
console.log('Before sorting:');
sll.display();

function mergeSortLinkedList(sll) {
    if (sll.nodeCount() < 2) {
        return sll;
    }

    let left = new SinglyLinkedList();
    let right = new SinglyLinkedList();
    let currentListNode = sll.head;
    let currentLeftNode = left.head;
    let currentRightNode = right.head;

    for (let idx = 0; idx < sll.nodeCount(); idx++) {
        if (idx < (sll.nodeCount() / 2)) {
            // push to the left
            left.insert(currentListNode.next.element, currentLeftNode.element);
            currentLeftNode = currentLeftNode.next;
        } else {
            // push to the right
            right.insert(currentListNode.next.element, currentRightNode.element);
            currentRightNode = currentRightNode.next;
        }
        currentListNode = currentListNode.next;
    }

    return mergeLinkedLists(mergeSortLinkedList(left), mergeSortLinkedList(right));

}

function mergeLinkedLists(left, right) {
    let output = new SinglyLinkedList();
    let currentOutput = output.head;

    // case 1
    while (left.nodeCount() > 0 && right.nodeCount() > 0) {
        if (left.head.next.element <= right.head.next.element) {
            output.insert(left.head.next.element, currentOutput.element);
            left.remove(left.head.next.element);
            currentOutput = currentOutput.next;
        } else {
            output.insert(right.head.next.element, currentOutput.element);
            right.remove(right.head.next.element);
            currentOutput = currentOutput.next;
        }
    }
    // case 2
    while (left.nodeCount() > 0) {
        output.insert(left.head.next.element, currentOutput.element);
        left.remove(left.head.next.element);
        currentOutput = currentOutput.next;
    }
    // case 3
    while (right.nodeCount() > 0) {
        output.insert(right.head.next.element, currentOutput.element);
        right.remove(right.head.next.element);
        currentOutput = currentOutput.next;
    }

    return output;
}

var answer = mergeSortLinkedList(sll);
console.log('After sorting:');
answer.display();

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8