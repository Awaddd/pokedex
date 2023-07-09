import ReactDOM from 'react-dom/client'
import './style/css/index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home'
import PokemonDetails from './routes/PokemonDetails'
import AllPokemon from './routes/AllPokemon'
import ErrorPage from './routes/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
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
