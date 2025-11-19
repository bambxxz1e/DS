class Node{
    constructor(data, next = null){ // 생성자
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){ // 생성자
        this.head = null;
        this.count = 0;
    }

    insertAt(index, data){ // 새 노드 추가
        if(index > this.count || index < 0){
            throw new Error("범위를 넘어갔습니다.");
        }

        let newNode = new Node(data);

        if(index == 0){ // 인덱스 0이면 가장 앞 순번 노드 만들겠다는 뜻
            newNode.next = this.head; // 헤드가 가리키던 노드를 newNode의 next가 가리키게
            this.head = newNode; // 헤드는 새 노드 가리킴
        }
        else{
            let currentNode = this.head; // 삽입하려는 노드 바로 앞 노드 = currentNode
            for(let i = 0; i < index - 1; i++){ // 0번부터 쭉 가면서~ currentNode를 찾음
                currentNode = currentNode.next;
            }

            newNode.next = currentNode.next; // newNode의 next가 currentNode의 next 가리킴
            currentNode.next = newNode // currentNode의 next는 newNode의 가리킴
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

        if(index == 0){
            let deleteNode = this.head;
            this.head = this.head.next;
            this.count--;
            return deleteNode;
        }
        else{
            for(let i = 0; i < index - 1; i++){
                currentNode = currentNode.next;
            }

            let deleteNode = currentNode.next;
            currentNode.next = currentNode.next.next;
            this.count--;
            return deleteNode;
        }
    }

    deleteLast(){
        this.deleteAt(this.count - 1);
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

export{Node, LinkedList};