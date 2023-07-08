import { Pokemon, PokemonDTO } from "../types/pokemon";

export const pokemonMapper = function ({
  id,
  name,
  height,
  weight,
  types,
  sprites,
  stats,
}: PokemonDTO): Pokemon {
  const pokemonTypes = types.map((item) => item.type.name);
  const pokemonStats = stats.map((item) => ({
    name: item.stat.name,
    value: item.base_stat,
  }));

  return {
    id,
    name,
    height,
    weight,
    types: pokemonTypes,
    image: sprites.other["official-artwork"].front_default,
    stats: pokemonStats,
  };
};
