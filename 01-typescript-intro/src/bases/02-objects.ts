export const pokemonIds = [1, 20, 40, 34];

export interface Pokemon {
  id: number;
  name: string;
  age?: number;
}

export const bulbasor: Pokemon = {
  id: 1,
  name: "Bulbasaur",
};

export const charmander: Pokemon = {
  id: 4,
  name: "charmander",
  age: 2,
};

export const pokemons: Pokemon[] = [];

pokemons.push(charmander, bulbasor);
console.log(pokemons);
