import { useAllPokemon } from "../hooks/useAllPokemon";
import { Link } from "react-router-dom";

function AllPokemon() {
  const [allPokemon] = useAllPokemon();

  if (!allPokemon) {
    return null;
  }

  return (
    <>
      {allPokemon.map(item => (
        <Link key={item.id} to={`/pokemon/${item.id}`}>
          <div>
            <p>{item.name}</p>
            <img src={item.image} alt={item.name} height={150} width={150} />
          </div>
        </Link>
      ))}
    </>
  )
}

export default AllPokemon;