import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import ScrollToTop from './componentes/ScrollToTop/ScrollToTop'
import Home from './Page/Home/Home'
import Venda from './Page/Venda/Venda';
import Loading from './Page/Loading/Loading';


function App() {

  

  return (
    
      <Router>
        
          <Routes>
            <ScrollToTop>
              <Route path="/" element={<Home></Home>} />
              <Route path="/venda" element={<Venda></Venda>} />    
            </ScrollToTop>

            <Route path="/emBreve" element={<Loading></Loading>} /> 
          </Routes>
          
      </Router>
  );
}

export default App;
