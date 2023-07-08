import { usePokemon } from "../hooks/usePokemon";

function AllPokemon() {

  const [pokemon] = usePokemon();

  if (!pokemon) return null;

  return (
    <>
      <p>connected</p>
    </>
  )
}

export default AllPokemon;