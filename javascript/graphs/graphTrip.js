function businessTrip(graph, cities) {
  if (!cities || cities.length < 2) {
    return null;
  }

  let cost = 0;

  for (let i = 1; i < cities.length; i++) {
    if (!graph[cities[i - 1]] || !graph[cities[i - 1]][cities[i]]) {
      return null;
    }
    cost += graph[cities[i - 1]][cities[i]];
  }

  return cost;
}

module.exports = businessTrip;
