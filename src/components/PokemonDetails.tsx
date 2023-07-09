import { useEffect, useState } from "react";
import { Pokemon, PokemonDTO } from "../types/pokemon";
import { pokemonMapper } from "../network/pokemon-mapper";
import axios from "axios";
import { useParams } from "react-router-dom";
import { pokemonUrl } from "../network/api";

function PokemonDetails() {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      const { data } = await axios.get<PokemonDTO>(`${pokemonUrl}${id}`);
      setPokemon(pokemonMapper(data));
    };

    fetchData().catch(console.error);
  }, [id])

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