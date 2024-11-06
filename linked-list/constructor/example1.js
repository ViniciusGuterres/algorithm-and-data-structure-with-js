class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const node = new Node(value);
        
        this.head = node;
        this.tail = node;
        this.length = 1;
    }

    printList() {
        let temp = this.head;

        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log('Head: null');
            return;
        }

        console.log(`Head: ${this.head.value}`);        
    }

    getTail() {
        if (this.head === null) {
            console.log("Tail: null");
            return;
        } 

        console.log("Tail: " + this.tail.value);
    }

    getLength() {
        console.log("Length: " + this.length);
    }
}

let myLinkedList = new LinkedList(4);

myLinkedList.getHead();
myLinkedList.getTail();
myLinkedList.getLength();
console.log("\nLinked List:");
myLinkedList.printList();