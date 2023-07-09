import { Outlet } from "react-router-dom";
import { AppHeader, Layout } from "../style/styled-components/home";

function Home() {
  return (
    <Layout>
      <AppHeader>Pokedex</AppHeader>
      <Outlet />
    </Layout>
  );
}

export default Home;
