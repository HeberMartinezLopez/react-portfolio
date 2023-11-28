import { createBrowserRouter,
  createRoutesFromElements,
 Route,
RouterProvider  } from 'react-router-dom';


import Root from './components/Root';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {

const router = createBrowserRouter(
 createRoutesFromElements(
   <Route path="/" element={<Root/>} >
     <Route index element={<About/>} />
     <Route path="/gallery" element={<Gallery/>} />
     <Route path="/contact" element={<Contact/>} />
     <Route path="/resume"  element={<Resume/>} />
   </Route>
 )
)

 return (
   <>
   <RouterProvider router={router} />
   <Footer/>
   </>
 )
}

export default App