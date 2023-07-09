import { AllPokemon } from "../types/all-pokemon";

// Extract official pokemon id from the url given to us
// this is safer than adding 1 to the index of the pokemon array
// because this is the actual value supported by the api
export const getPokemonId = (url: AllPokemon["url"]): number | undefined => {
  if (!url) return;

  const regex = /\/(\d+)\/$/;
  const match = url.match(regex);

  if (!match) return;
  return parseInt(match[1]);
};
