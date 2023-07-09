import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <h1>Pokedex</h1>
      <Outlet />
    </>
  );
}

export default Root;
