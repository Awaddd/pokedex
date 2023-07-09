import { useParams } from "react-router-dom";
import { usePokemon } from "../hooks/usePokemon";
import { capitalise } from "../helpers/capitalise-first-letter";
import { Pokemon, PokemonTypes } from "../style/styled-components/pokemon";

function PokemonDetails() {
  const { id } = useParams();
  const [pokemon] = usePokemon(parseInt(id!));

  if (!pokemon) return null

  return (
    <Pokemon>
      <img src={pokemon.image} alt={pokemon.name} />

      <PokemonTypes>
        {pokemon.types.map(type => (
          <li key={type}>{capitalise(type)}</li>
        ))}
      </PokemonTypes>

      <h2>{capitalise(pokemon.name)}</h2>

      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>

      <ul>
        {pokemon.stats.map(stat => (
          <li key={stat.name}>{capitalise(stat.name)}: {stat.value}</li>
        ))}
      </ul>
    </Pokemon>
  )
}

export default PokemonDetails;