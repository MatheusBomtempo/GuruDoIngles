import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import ScrollToTop from './componentes/ScrollToTop/ScrollToTop'
import Home from './Page/Home/Home'
import Venda from './Page/Venda/Venda';


function App() {

  

  return (
    
      <Router>
        
          <Routes>
            <ScrollToTop>
              <Route path="/" element={<Home></Home>} />
              <Route path="/venda" element={<Venda></Venda>} />    
            </ScrollToTop>
          </Routes>
          
      </Router>
  );
}

export default App;
