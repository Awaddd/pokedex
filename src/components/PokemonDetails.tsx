import { useParams } from "react-router-dom";
import { usePokemon } from "../hooks/usePokemon";

function PokemonDetails() {
  const { id } = useParams();
  const [pokemon] = usePokemon(parseInt(id!));

  if (!pokemon) return null

  return (
    <>
      <div key={pokemon.id}>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.image} alt={pokemon.name} height={150} width={150} />
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>

        <ul>
          {pokemon.stats.map(stat => (
            <li key={stat.name}>{stat.name}: {stat.value}</li>
          ))}
        </ul>

        <ul>
          {pokemon.types.map(type => (
            <li key={type}>{type}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default PokemonDetails;