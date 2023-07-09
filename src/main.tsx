import ReactDOM from 'react-dom/client'
import './style/css/index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home'
import PokemonDetails from './routes/PokemonDetails'
import AllPokemon from './routes/AllPokemon'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <AllPokemon />
      },
      {
        path: '/pokemon/:id',
        element: <PokemonDetails />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
