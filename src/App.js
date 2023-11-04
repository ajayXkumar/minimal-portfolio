import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './screens/navbar';
import Home from './screens/home';
function App() {
  return (
    <div className="App">
        <BrowserRouter>

        <Routes>
           
          <Route path='/' element={<Home/>}/>

        </Routes>
        
        </BrowserRouter>
    </div>
  );
}

export default App;
