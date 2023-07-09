import { Outlet } from "react-router-dom";
import { Header, Layout } from "../style/styled-components/home";

function Home() {
  return (
    <Layout>
      <Header>Pokedex</Header>
      <Outlet />
    </Layout>
  );
}

export default Home;
