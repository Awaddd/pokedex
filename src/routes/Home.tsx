import { Link, Outlet } from "react-router-dom";
import { Header, Layout } from "../style/styled-components/home";

function Home() {
  return (
    <Layout>
      <Header><Link to={'/'}>Pokedex</Link></Header>
      <Outlet />
    </Layout>
  );
}

export default Home;
