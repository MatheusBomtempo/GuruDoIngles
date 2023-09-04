import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import ScrollToTop from './componentes/ScrollToTop/ScrollToTop'
import Home from './Page/Home/Home'
import Venda from './Page/Venda/Venda';
import Loading from './Page/Loading/Loading';
import Contatos from './Page/Contatos/Contatos';
import Formulario from './Page/Formulario/Formulario';


function App() {

  

  return (
    
      <Router>
        
          <Routes>
            <ScrollToTop>
              <Route path="/" element={<Home></Home>} />
              <Route path="/venda" element={<Venda></Venda>} />    
            </ScrollToTop>

            <Route path="/contatos" element={<Contatos></Contatos>} /> 

            <Route path="/emBreve" element={<Loading></Loading>} /> 

            <Route path="/formulario" element={<Formulario></Formulario>} /> 
          </Routes>
          
      </Router>
  );
}

export default App;
