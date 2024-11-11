class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    setNext(node) {
        this.next = node;
    }

    setValue(value) {
        this.value = value;
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

    // Add a element in the head of the linked list
    unshift(value) {
        const newNode = new Node(value);

        //
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.setNext(this.head);
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;

        let tmp = this.head;

        for (let i = 0; i < index; i++) {
            tmp = tmp.next;
        }

        return tmp;
    }

    set(index, value) {
        let myNode = this.get(index);
        
        if (!myNode) return false;
        
        myNode.setValue(value)
        return true;
    }
}

let myLinkedList = new LinkedList();

myLinkedList.pushNode(20);
myLinkedList.pushNode(19);
myLinkedList.pushNode(18);
myLinkedList.pushNode(17);
myLinkedList.pushNode(16);
myLinkedList.pushNode(15);

console.log(myLinkedList.set(4, 155));
console.log(myLinkedList.set(5, 200));

console.log("\nLinked List:");
myLinkedList.getHead();
myLinkedList.getTail();
myLinkedList.printList();

console.log("\n---------------------------------------");
// 