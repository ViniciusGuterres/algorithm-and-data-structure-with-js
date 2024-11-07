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
        // Otherwise, just add a new node a set to this list tail
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

    // Removes the last element of the linked list
    popNode() {
        // The the list cannot be empty
        let removedNode = undefined;

        if (!this.length) return removedNode;

        // Case the list has just one node
        if (this.length === 1) {
            removedNode = this.head;

            this.head = null;
            this.tail = null;
        } else {
            removedNode = this.tail;
            
            let tmpNode = this.head;

            while (tmpNode !== null) {
                const nextNode = tmpNode.next;

                if (nextNode.next === null) {
                    this.tail = tmpNode;
                    this.tail.setNext(null);
                    break;
                }

                tmpNode = tmpNode.next;
            }
        }

        this.length--;
        return removedNode;
    }
}

let myLinkedList = new LinkedList();

myLinkedList.pushNode(1);
myLinkedList.pushNode(2);
myLinkedList.pushNode(3);
myLinkedList.pushNode(4);
myLinkedList.pushNode(5);
myLinkedList.pushNode(6);

console.log("🚀 ~ myLinkedList.popNode():", myLinkedList.popNode());


console.log("\nLinked List:");
myLinkedList.getTail();
myLinkedList.printList();

console.log("\n---------------------------------------");
// 