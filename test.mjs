import { Node, LinkedList } from "./LinkedList.mjs"; // ./는 현재 디렉토리 즉 같은 공간에 잇다

// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(3);

// node1.next = node2; // 주소 넘겨줌 (Call by reference)
// node2.next = node3;

// console.log(node1.data);
// console.log(node1.next.data);
// console.log(node1.next.next.data);

let list = new LinkedList();

console.log("=== insertAt() 호출 ===")
list.insertAt(0, 1);
list.insertAt(1, 2);
list.insertAt(2, 3);
list.insertAt(3, 4);
list.printAll();

list.insertAt(3, 99);
list.printAll();

console.log("=== clear() 호출 ===")
list.clear();
list.printAll();

console.log("=== insertLast() 호출 ===")
list.insertLast(77);
list.insertLast(78);
list.insertLast(79);
list.insertLast(80);
list.printAll();

console.log("=== deleteAt() 호출 ===");
list.deleteAt(2);
list.printAll();
list.deleteAt(0);
list.printAll();

list.insertLast(81);
list.insertLast(82);
list.insertLast(83);
list.printAll();

console.log("=== deleteLate() 호출 ===");
list.deleteLast();
list.printAll();

console.log("=== getNodeAt() 호출 ===");
console.log(list.getNodeAt(3));