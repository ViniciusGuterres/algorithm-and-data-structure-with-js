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

    setValue(value) {
        this.value = value;
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
        const tmpHead = this.head;

        if (this.head.next == null) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.setPrev(null);
            tmpHead.next = null;
        }

        this.length--;
        return tmpHead;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;

        let tmp = this.head;

        if (index < this.length / 2) {

            for (let i = 0; i < index; i++) {
                tmp = tmp.next;
            }
        } else {
            tmp = this.tail;

            for (let i = this.length - 1; i > index; i--) {
                tmp = tmp.prev;
            }
        }

        return tmp;
    }

    set(index, value) {
        if (value == null || index < 0 || index >= this.length) return null;

        let currentNode = this.get(index);

        if (currentNode) {
            currentNode.setValue(value);
            return currentNode;
        }

        return null;
    }

    printList() {
        if (!this.head?.value) {
            console.log('This list is empty');
        }

        let temp = this.head;

        while (temp !== null) {
            console.log(temp);
            temp = temp.next;
        }
    }

    getTail() {
        if (this.head === null) {
            console.log("Tail: null");
            return;
        }

        console.log("Tail: " + this.tail?.value);
    }

    getHead() {
        if (this.head === null) {
            console.log('Head: null');
            return;
        }

        console.log(`Head: ${this.head?.value}`);
    }
}

let myDoublyLinkedList = new DoublyLinkedList(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.push(4);
// myDoublyLinkedList.push(20);

myDoublyLinkedList.set(2, 8888);

myDoublyLinkedList.printList();
myDoublyLinkedList.getHead();
myDoublyLinkedList.getTail();


