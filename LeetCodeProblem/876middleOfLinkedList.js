class Node {
    constructor(data, next = null) {
        this.value = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(data) {
        let node = new Node(data);
        this.head = this.tail = node;
        this.length = 1
    }
    insert(value) {
        let node = new Node(value);
        this.tail.next = node;
        this.tail = node;
        this.length++;

    }
    // append(value){
    //     let node=new Node(value);
    //     this.tail.next=node;
    //     this.tail=node;
    //     this.length++
    // }
    print() {
        let data = this.head;
        while (data) {
            console.log(data.value);
            data = data.next;

        }
    }

    // middle node
    middleNode() {
        let data = this.head;
        let slow = this.head;
        let mid;

        let fast = this.head;
        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow


    }

}
let list = new LinkedList(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);
list.insert(6);
list.print();
console.log(list.middleNode());