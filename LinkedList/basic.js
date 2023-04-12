

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


        console.log(node);
    }
    insert(value) {
        let node = new Node(value);
        this.tail.next = node;
        this.tail = node;
        this.length++;

    }
    append(value) {
        let node = new Node(value);
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }
    // append and insert is same thing with a different name,there is no difference between them,they add or insert a value at tail or last

    // prepend means insert a value at the head of a linked list
    prepend(value) {
        let node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.length++;
    }

    // append at any position
    appendAtAnyPosition(value, n) {
        if (n === 1) {
            this.prepend(value);
            return
        }
        else if (n === this.length + 1) {
            this.append(value);
            return
        }
        let node = new Node(value);
        let previousNode = this.findNode(n - 1);
        let temp = previousNode.next;
        previousNode.next = node;
        node.next = temp;
        this.length++

    }
    update(value, n) {
        let node = this.findNode(n);
        node.value = value;
    }

    delete(n) {
        let prevNode = this.findNode(n - 1);

        prevNode.next = this.findNode(n + 1);
        this.length--;
    }

    // finding prvious node
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

    sum() {
        let sum = 0;
        let data = this.head;
        while (data) {
            sum = sum + data.value;
            data = data.next;


        }
        return sum;
    }
    matchingValue(targetValue) {

        let data = this.head;
        let index = 1
        while (data) {
            if (data.value == targetValue) {
                return index;
            }
            data = data.next;
            index++

        }
        return -1
    }
    // priniting data
    print() {
        let data = this.head;
        // ekhaneo data r moddhe this head save kora hoise jate head haraiya na jai;
        while (data) {
            console.log(data.value);
            data = data.next;
        }

    }
    // jodi duplicate element thake tahole oi element er first index and last index khuje ber kore
    firstAndLastIndexElement(targetValue) {
        let data = this.head;
        console.log(data.value);
        let indices = [];
        let index = 1;

        while (data) {
            if (data.value == targetValue) {
                indices.push(index);

            }
            index++;
            data = data.next

        }
        console.log(indices[0], indices[indices.length - 1]);
        return [indices[0], indices[indices.length - 1]]


    }
    // same as firstAndLastIndexElement
    firstAndLastIndex(targetValue) {
        let first = null;
        let last = null;
        let data = this.head;
        console.log(data.value);
        for (let i = 1; i < this.length; i++) {

            if (data.value == targetValue) {
                if (first == null) {
                    first = i;
                }
                else {
                    last = i
                }
                data = data.next;
            }
            else {
                data = data.next;
            }

        }
        return [first, last]
    };
    // middle node
    middleNode() {
        let slow_ptr = this.head;
        let fast_ptr = this.head;
        while (fast_ptr != null &&
            fast_ptr.next != null) {
            fast_ptr = fast_ptr.next.next;
            slow_ptr = slow_ptr.next;
        }
        return slow_ptr.value;






    }






}


let list = new LinkedList(20);
list.insert(30);
list.append(40);
list.insert(20);
list.prepend(10);

list.append(50)

list.append(60)
list.append(70)
list.appendAtAnyPosition(1.5, 1);


console.log(list.firstAndLastIndexElement(20));
console.log(list.firstAndLastIndex(20));
console.log(list.middleNode());
list.print();
list.sum();

console.log(list);


