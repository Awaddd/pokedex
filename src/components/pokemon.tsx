import { usePokemon } from "../hooks/usePokemon";

function AllPokemon() {

  const [pokemon] = usePokemon();

  if (!pokemon || pokemon.length === 0) {
    return null;
  }

  return (
    <>
      <p>connected</p>

      {pokemon.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <img src={item.image} alt={item.name} height={150} width={150} />
        </div>
      ))}
    </>
  )
}

export default AllPokemon;