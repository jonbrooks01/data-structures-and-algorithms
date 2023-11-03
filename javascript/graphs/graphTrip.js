function businessTrip(graph, cities) {
  if (!cities) return null;

  let cost = 0;

  for (let i = 0; i < cities.length; i++)
    {
      if ( !graph[cities[i - 1]] || !graph[cities[i -1]cities[i]]) {
        return null;
    }
      cost += graph[cities[i - 1][cities[1]];
    }
  return cost;
}
