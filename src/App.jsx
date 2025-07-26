import './App.css'
import Layout from './Layouts/Layout'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Portfolio from './Pages/Portfolio'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



const router = createBrowserRouter([
  {
    path: '', element: <Layout />, children:[
      {path: '/', element: <Home />},
      {path: '/about', element: <About />},
      {path: '/portfolio', element: <Portfolio />},
      {path: '/contact', element: <Contact />},
      {path: '*', element: <NotFound />}
    ]
  }
])




export default function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

