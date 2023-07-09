import { useAllPokemon } from "../hooks/useAllPokemon";

function AllPokemon() {
  const [allPokemon] = useAllPokemon();

  if (!allPokemon) {
    return null;
  }

  function viewDetails() {
    //
  }

  return (
    <>
      {allPokemon.map(item => (
        <div key={item.name} onClick={viewDetails}>
          <p>{item.name}</p>
          <img src={item.image} alt={item.name} height={150} width={150} />
        </div>
      ))}
    </>
  )
}

export default AllPokemon;