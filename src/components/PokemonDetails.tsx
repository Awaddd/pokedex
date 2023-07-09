import { Pokemon } from "../types/pokemon";

function PokemonDetails({ pokemon }: { pokemon: Pokemon }) {

  return (
    <>
      <div key={pokemon.id}>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.image} alt={pokemon.name} height={150} width={150} />
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>

        <ul>
          {pokemon.stats.map(stat => (
            <li>{stat.name}: {stat.value}</li>
          ))}
        </ul>

        <ul>
          {pokemon.types.map(type => (
            <li>{type}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default PokemonDetails;