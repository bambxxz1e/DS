class WeightedGraphVertax {
  constructor(value) {
    this.value = value;
    this.adjacent_vertices = {};
  }

  addAdjacentVertax(vertax, weight) {
    this.adjacent_vertices[vertax.value] = weight;
  }

  removeAdjacentVertax(vertax) {
    delete this.adjacent_vertices[vertax.value];
  }
}

let seoul = new WeightedGraphVertax('서울');
let wonju = new WeightedGraphVertax('원주');
let gangneung = new WeightedGraphVertax('강릉');
let daejeon = new WeightedGraphVertax('대전');
let jeonju = new WeightedGraphVertax('전주');
let daegu = new WeightedGraphVertax('대구');

seoul.addAdjacentVertax(wonju, 87);
seoul.addAdjacentVertax(gangneung, 165);
seoul.addAdjacentVertax(daejeon, 140);
seoul.addAdjacentVertax(jeonju, 187);

console.log(seoul.adjacent_vertices);

seoul.removeAdjacentVertax(gangneung);
seoul.removeAdjacentVertax(jeonju);

console.log(seoul.adjacent_vertices);
