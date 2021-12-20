import { v4 as uuid } from "uuid";

/* Select a random element from values array. */
function choice(values) {
  const randIdx = Math.floor(Math.random() * values.length);
  return values[randIdx];
}

// Format to get just the image url from Deck of Cards API
function formatCard(data) {
  return {
    id: uuid(),
    image: data.cards[0].image,
  };
}

// Format to get the front image, back image, and stats from Pokemon API
function formatPokemon(data) {
  return {
    id: uuid(),
    front: data.sprites.front_default,
    back: data.sprites.back_default,
    name: data.name,
    stats: data.stats.map((stat) => ({
      value: stat.base_stat,
      name: stat.stat.name,
    })),
  };
}

export { choice, formatCard, formatPokemon };
