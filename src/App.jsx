import { createBrowserRouter, createRoutesFromElements, Route, RouteProvider } from 'react-router-dom';
import Root from './components/Root';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Work from './components/Work';
import Footer from './components/Footer';

function App (){

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
        <Route index element={<About/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/work' element={<Work/>}/>
      </Route>
    )
  )

  return(
    <>
    <RouteProvider router={router}/>
    <Footer/>
    </>
  )
}

export default App
