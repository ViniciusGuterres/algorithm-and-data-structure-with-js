class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    setNext(node) {
        this.next = node;
    }
}

class LinkedList {
    head = null;
    tail = null;
    length = 0;

    constructor(value) {
        if (value) {
            const node = new Node(value);
            this.head = node;
            this.tail = node;
            this.length = 1;
        }
    }

    printList() {
        if (!this.head?.value) {
            console.log('This list is empty');
        }

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

        console.log(`Head: ${this.head?.value}`);
    }

    getTail() {
        if (this.head === null) {
            console.log("Tail: null");
            return;
        }

        console.log("Tail: " + this.tail?.value);
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    // Add a new node in the end of the linked list
    pushNode(value) {
        const newNode = new Node(value);

        // If it's the first list element, put in the head and tail
        // Otherwise, just add a new node and set to this list tail
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.setNext(newNode);
            this.tail = newNode;
        }

        this.length++;

        return this;
    }
}

let myLinkedList = new LinkedList();

myLinkedList.getHead();
myLinkedList.getTail();
myLinkedList.getLength();
console.log("\nLinked List:");
myLinkedList.printList();

console.log("\n---------------------------------------");
myLinkedList.pushNode(10);
myLinkedList.pushNode(11);
myLinkedList.pushNode(12);
console.log(myLinkedList.pushNode(13))



myLinkedList.getHead();
myLinkedList.getTail();
myLinkedList.getLength();
console.log("\nLinked List:");
myLinkedList.printList();