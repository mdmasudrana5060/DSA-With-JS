class Node {
    constructor(data, next = null) {
        this.value = data;
        this.next = next

    }
}

class LinkedList {
    constructor(data) {
        let node = new Node(data);
        this.head = this.tail = node;
        this.length = 1;

    }
    insert(value) {
        let node = new Node(value);
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }
    delete(node) {
        node.val = node.next.val;
        node.next = node.next.next;
    }
}