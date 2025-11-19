import { Queue } from "./../Queue.mjs";

class Vertax {
  constructor(value) {
    this.value = value;
    this.adjacent_vertices = [];
  }

  addAdjacentVertax(vertax) {
    this.adjacent_vertices.push(vertax);
  }

  removeAdjacentVertax(vertax) {
    for (let i = 0; i < this.adjacent_vertices.length; i++)
      if (this.adjacent_vertices[i] === vertax)
        this.adjacent_vertices.splice(i, 1);
  }
}

function BFS(vertax) {
  let queue = new Queue();
  let visited_vertices = {};
  visited_vertices[vertax.value] = true;
  queue.enqueue(vertax);

  while (!queue.isEmpty()) {
    let currentVertax = queue.dequeue().data;
    console.log(`정점 : ${currentVertax.value}`);

    for (let adjacent of currentVertax.adjacent_vertices) {
      if (visited_vertices[adjacent.value]) {
        continue;
      } else {
        visited_vertices[adjacent.value] = true;
        queue.enqueue(adjacent);
      }
    }
  }
}

let ben = new Vertax("ben");
let jake = new Vertax("jake");
let joy = new Vertax("joy");
let ivy = new Vertax("ivy");
let elin = new Vertax("elin");
let david = new Vertax("david");
let anna = new Vertax("anna");
let owen = new Vertax("owen");

ben.addAdjacentVertax(ivy);
ben.addAdjacentVertax(jake);
ben.addAdjacentVertax(anna);
ben.addAdjacentVertax(david);

ivy.addAdjacentVertax(ben);
ivy.addAdjacentVertax(joy);

joy.addAdjacentVertax(ivy);
joy.addAdjacentVertax(jake);

jake.addAdjacentVertax(joy);
jake.addAdjacentVertax(ben);

anna.addAdjacentVertax(ben);

david.addAdjacentVertax(ben);
david.addAdjacentVertax(elin);

elin.addAdjacentVertax(david);
elin.addAdjacentVertax(owen);

owen.addAdjacentVertax(elin);

BFS(ben);
