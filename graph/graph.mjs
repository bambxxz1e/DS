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

let ben = new Vertax("ben");
let jake = new Vertax("jake");
let joy = new Vertax("joy");
let ivy = new Vertax("ivy");
let elin = new Vertax("elin");
let david = new Vertax("david");
let anna = new Vertax("anna");

ben.addAdjacentVertax(jake);

jake.addAdjacentVertax(ben);

joy.addAdjacentVertax(ben);
joy.addAdjacentVertax(ivy);

ivy.addAdjacentVertax(joy);
ivy.addAdjacentVertax(ben);

elin.addAdjacentVertax(ivy);
elin.addAdjacentVertax(anna);

anna.addAdjacentVertax(elin);
anna.addAdjacentVertax(david);
anna.addAdjacentVertax(ben);

david.addAdjacentVertax(anna);

console.log(anna.adjacent_vertices);
anna.removeAdjacentVertax(david);
console.log(anna.adjacent_vertices);
