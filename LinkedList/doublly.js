class Node {
    constructor(data, next = null) {
        this.value = data;
        this.next = next;
    }
}

class doubllyLinkedList {
    constructor(data) {
        let node = new Node(data);
        this.head = this.tail = node;
        this.length = 1;
        console.log(node);
    }


    // insert data
    insert(data) {
        let newNode = new Node(data);
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;

    }
    // append data
    append(data) {
        let newNode = new Node(data);
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;

    }
    // prepend data
    prepend(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;


    }
    findNode(n) {
        let data = this.head;
        // in data we saved this.head jate data haraiya na jai
        let count = 0;
        while (true) {
            count++;

            if (count === n) {
                break;
            };

            data = data.next
        }
        return data;
    }
    // insert at any position
    insertAtAnyPosition(data, n) {
        if (n === 1) {
            this.prepend(data);
            return;
        }
        else if (n === this.length - 1) {
            this.append(data);
            return;
        }
        let newNode = new Node(data);
        let previousNode = this.findNode(n - 1);
        let temp = previousNode.next;
        previousNode.next = newNode;
        let nextNode = this.findNode(n);
        let temp2 = nextNode.head;
        nextNode.head = newNode;
        newNode.next = nextNode;
        this.length++


    }

}

let list = new doubllyLinkedList(10);
list.insert(20);
list.insert(30);
list.prepend(5);
list.insertAtAnyPosition(15, 2)

list
console.log(list);

