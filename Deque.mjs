import { DoubleLinkedList } from "./DoubleLinkedList.mjs";

class Deque{
	constructor(){
		this.list = new DoubleLinkedList();
	}

	printAll(){
		this.list.printAll();
	}

	addFirst(data){ // head 위치에 삽입
		this.list.insertAt(0, data);
	}

	removeFirst(){ // head 위치에 삭제
		return this.list.deleteAt(0);
	}

	addLast(data){ // tail 위치에 삽입
		this.list.insertLast(data);
	}

	removeLast(){ // tail 위치에 삭제
		return this.list.deleteLast();
	}

	isEmpty(){
		return (this.list.count == 0);
	}
}

export {Deque}