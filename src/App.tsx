import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { RouterProvider } from 'react-router'
import routes from './routes'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <RouterProvider router={routes}/>
      <Footer></Footer>
    </>
  )
}

export default App
