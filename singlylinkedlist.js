
function Node(val){
    this.value = val;
    this.next = null;
}

function SinglyLinkedList(){
    this.head = null;
}

SinglyLinkedList.prototype.addToFront = (val)=>{
    var newnode = new Node(val);
    console.log('add funtion->This is this.head', this.head);
    console.log('new node-->', newnode);
    if (this.head === undefined){
        console.log("This suppose to be null: this.head before assigning: ", this.head, ' :----null');
        this.head = newnode;
        console.log(this.head, 'This is this.head after assiagned')
    } else {
        var currentNote = this.head;
        console.log(this.head);
        newnode.next = currentNote;
        this.head = newnode;
    }
    return newnode;
};
SinglyLinkedList.prototype.getHead = () =>{
    return this.head;
};


var list1 = new SinglyLinkedList();

list1.addToFront("First");
console.log("???get Head from the property: ", list1.head);
console.log("???Get Head from method: ", list1.getHead());
list1.addToFront("BeforeFirst");
list1.addToFront("b4BeforeFirst");


var current = list1.getHead();
console.log(current.value);
while(current !== null){
    console.log('take out val', current.value);
    current = current.next;
}