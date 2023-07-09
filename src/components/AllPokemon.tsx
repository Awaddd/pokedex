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
        // hardcoded id for now
        <Link key={item.name} to={`/pokemon/${1}`}>
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