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
        this.length = 1;

    }
    insert(data) {
        let node = new Node(data);
        this.tail.next = node;
        this.tail = node;
        this.length++;

    }

    delete() {
        let data = this.head;

        while (data) {
            if (data.next && data.value == data.next.value) {
                data = data.next.next
            }
            else {
                data = data.next;
            }
        }
        return data;
    }
    print() {
        let data = this.head;
        while (data) {
            console.log(data.value);
            data = data.next
        }
    }



}

let list = new LinkedList(1);
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(3);
list.delete();

console.log('from' + list.delete());
list.print();
