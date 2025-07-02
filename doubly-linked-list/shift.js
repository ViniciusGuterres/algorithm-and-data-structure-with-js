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

    unshift(node) {
        if (!node) return null;

        const newNode = new Node(node);

        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.setNext(this.head);
            this.head.setPrev(newNode);

            this.head = newNode;
        }

        this.length++;
        return this;
    }

    shift() {
        if (this.head == null) return null;

        if (this.head.next == null) {
            this.head = null;
            this.tail = null;
        } else {
            const tmpHead = this.head;
            this.head = this.head.next;
            this.head.setPrev = null;
            tmpHead.next = null;
        }

        this.length--;
        return this;
    }
}

let myDoublyLinkedList = new DoublyLinkedList(2);
// myDoublyLinkedList.push(3);
// myDoublyLinkedList.push(3);
// myDoublyLinkedList.push(20);

console.log('unishif: ', myDoublyLinkedList.shift());
console.log('unishif: ', myDoublyLinkedList.shift());
console.log('unishif: ', myDoublyLinkedList.shift());

