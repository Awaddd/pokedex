import { AllPokemon, AllPokemonDTO } from "../types/all-pokemon";

// Seems redundant because the response api matches the fields we're looking for
// but this protects us from the edge case where the api changes but we're still using the previous properties
// directly in our code - with this approach we're able to easily reflect api changes
export const AllPokemonMapper = function ({
  name,
  url,
}: AllPokemonDTO): AllPokemon {
  return {
    name,
    url,
  };
};
