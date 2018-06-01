
function Node(val){
    this.value = val;
    this.next = null;
}

function Stack(){
    this.top = null;
}

Stack.prototype.push = function(val){
    var newnode = new Node(val);
    newnode.next = this.top;
    this.top = newnode;
}

Stack.prototype.pop = function() {
    if(this.top == null) return null;
    var val = this.top.val;
    this.top = this.top.next
    return val;
}