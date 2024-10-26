import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainPage from "./pages/MainPage"
import Currency from "./pages/Currency"
function App() {
  return (
    <>
    <div className='body'> 
    <div className="App">
   <h1>Coin Lore
   </h1>
   </div>
  <div>
        <Router>
     <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/currency/:id" element={<Currency />} />
      </Routes>
        </Router>

  </div>

    </div>
    </>


  );
}

export default App;
