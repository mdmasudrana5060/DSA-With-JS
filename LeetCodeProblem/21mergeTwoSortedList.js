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

    insert(value) {
        let node = new Node(value);
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }
    print() {
        let data = this.head;
        while (data) {
            console.log(data.value);
            data = data.next;
        }
    }
}


let list1 = new LinkedList(1);
list1.insert(2);
list1.insert(4);

console.log(list1);
let list2 = new LinkedList(1);
list2.insert(3);
list2.insert(4);
console.log(list2);


function mergeTwoSortedList(list1, list2) {
    let newList = new LinkedList(0);
    let headOfNewList = newList;
    while (list1 != null && list2 != null) {
        if (list1.val < list2.val) {
            newList.next = list1;
            list1 = list1.next;
        }
        else {
            newList.next = list2;
            list2 = list2.next;
        }
        newList = newList.next;
    }


    if (list1 == null) {
        newList.next = list2;
    }
    else {
        newList.next = list1;
    }

    return headOfNewList.next;
}


console.log(mergeTwoSortedList(list1, list2));
let newList = mergeTwoSortedList(list1, list2);
newList.print()