class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }

    setNext(node) {
        this.next = node;
    }

    setPrev(node) {
        this.prev = node;
    }
}

class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);

        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);

        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.setNext(newNode);
            newNode.setPrev(this.tail);
            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    pop() {
        if (this.head == null) return null;

        if (this.head?.next != null) {
            let tmpTail = this.tail;
            this.tail = tmpTail.prev;
            this.tail.setNext(null);

            tmpTail.setPrev(null);

            this.length--;

            return tmpTail;
        }

        this.head = null;
        this.tail = null;
        this.length = 0;

        return null;
    }
}

let myDoublyLinkedList = new DoublyLinkedList(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.push(20);

console.log('pop: ', myDoublyLinkedList.pop())
// console.log('pop: ', myDoublyLinkedList.pop())
// console.log('pop: ', myDoublyLinkedList.pop())


console.log("🚀 ~ myDoublyLinkedList:", myDoublyLinkedList)