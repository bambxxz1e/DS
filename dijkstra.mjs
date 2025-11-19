class City {
  constructor(name) {
    this.name = name;
    this.ajdcent_cities = {};
  }

  addAdjacentCity(city, distance) {
    this.ajdcent_cities[city.name] = distance;
  }

  removeAdjacentCity(city) {
    delete this.ajdcent_cities[city.name];
  }
}

class Dijkstra {
  constructor() {
    this.all_cities = {};
  }

  registerCity(city) {
    this.all_cities[city.name] = city;
  }

  shortestPath(start_city, end_city){
	let visited_cities = {};
	let unvisited_cities = {};
  }
}
