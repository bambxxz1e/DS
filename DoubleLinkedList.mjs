class Node{
    constructor(data, next = null, prev = null){ // 생성자
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DoubleLinkedList{
    constructor(){ // 생성자
        this.head = null; // 삽입
        this.tail = null; // 삭제
        this.count = 0;
    }

    insertAt(index, data){ // 새 노드 추가
        if(index > this.count || index < 0){
            throw new Error("범위를 넘어갔습니다.");
        }

        let newNode = new Node(data);

        if(index == 0){ // 가장 앞에 삽입
            newNode.next = this.head; // 헤드가 가리키던 노드를 newNode의 next가 가리키게
            
            if(this.head != null){ // 양방향 노드니까 이전 노드가 있다면 이전 노드의 prev가 newNode를 가리키게
                this.head.prev = newNode;
            }

            this.head = newNode;
        }
        else if(index == this.count){ // 맨 뒤에 삽입
            newNode.next = null;
            newNode.prev = this.tail;
            this.tail.next = newNode;
        }
        else{ // 중간에 삽입
            let currentNode = this.head; // 삽입하려는 노드 바로 앞 노드 = currentNode
            for(let i = 0; i < index - 1; i++){ // 0번부터 쭉 가면서~ currentNode를 찾음
                currentNode = currentNode.next;
            }

            newNode.next = currentNode.next; // newNode의 next가 currentNode의 next를 가리킴
            currentNode.next = newNode; // currentNode의 next는 newNode를 가리킴
            currentNode.next.prev = newNode; // currentNode의 next의 prev(이전 노드)가 newNode를 가리킴
            newNode.prev = currentNode; // newNode의 prev(이전 노드)가 currentNode를 가리킴
        }

        if(newNode.next == null){
            this.tail = newNode;
        }

        this.count++;
    }

    printAll(){
        let currentNode = this.head;
        let text = "[";

        while(currentNode != null){
            // console.log(currentNode.data);
            text += currentNode.data;
            currentNode = currentNode.next;

            if(currentNode != null){
                text += ", ";
            }
        }

        text += "]";

        console.log(text);
    }

    clear(){
        this.head = null;
        this.count = 0;
    }

    insertLast(data){
        this.insertAt(this.count, data);
    }

    deleteAt(index){
        if(index > this.count || index < 0){
            throw new Error("범위를 넘어갔습니다.");
        }

        let currentNode = this.head;

        if(index == 0){ // 가장 앞 노드 삭제
            let deleteNode = this.head;
            
            if(this.head.next == null){ // 노드가 하나만 있을 때
                this.head = null;
                this.tail = null;
            }
            else{
                this.head = this.head.next;
                this.head.prev = null; 
            }

            this.count--;
            return deleteNode;
        }
        else if(index == this.count -1){ // 마지막 노드 삭제
            let deleteNode = this.tail;

            this.tail.prev.next = null; // 이전 노드의 next를 null로(연결 끊기)
            this.tail = this.tail.prev; // tail을 원래 tail의 이전 노드로

            this.count--;
            return deleteNode;
        }
        else{ // 중간 노드 삭제
            for(let i = 0; i < index - 1; i++){
                currentNode = currentNode.next;
            }

            let deleteNode = currentNode.next;

            currentNode.next = deleteNode.next;
            deleteNode.next.prev = currentNode;

        }
    }

    deleteLast(){
        return this.deleteAt(this.count - 1);
    }

    getNodeAt(index){
        if(index > this.count || index < 0){
            throw new Error("범위를 넘어갔습니다.");
        }

        let currentNode = this.head;

        for(let i = 0; i < index; i++){
            currentNode = currentNode.next;
        }

        return currentNode.data;
    }
}

export{Node, DoubleLinkedList};