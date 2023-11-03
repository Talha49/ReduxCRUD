
import './index.css';
import Navbar from './Components/Navbar';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {


  return (
    <>
    <BrowserRouter>  
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Create/>}  />
      <Route exact path='/read' element={<Read/>}  />
      <Route exact path='/update/:id' element={<Update />}  />
    </Routes>
    
    </BrowserRouter>
 
    </>

  );
}

export default App;
