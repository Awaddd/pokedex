import { useAllPokemon } from "../hooks/useAllPokemon";
import { Link } from "react-router-dom";
import { capitalise } from "../helpers/capitalise-first-letter";
import { PokemonCard, PokemonGrid } from "../style/styled-components/all-pokemon";

function AllPokemon() {
  const [allPokemon, error] = useAllPokemon();

  if (error) return (
    <p>{error}</p>
  );

  if (!allPokemon) return null;

  return (
    <PokemonGrid>
      {allPokemon.map(item => (
        <Link key={item.id} to={`/pokemon/${item.id}`}>
          <PokemonCard>
            <h3>{capitalise(item.name)}</h3>
            <img src={item.image} alt={item.name} />
          </PokemonCard>
        </Link>
      ))}
    </PokemonGrid>
  );
}

export default AllPokemon;