import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Carrinho from './pages/Carrinho/Carrinho';
import Footer from './components/Rodape/Rodape';
import FinalizarCompra from './pages/FinalizarCompra/FinalizarCompra';
import { GlobalStyle } from './GlobalStyle';
import Pedidos from './pages/HistoricoPedidos/Pedidos';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/sobre" element={<div>Sobre</div>} />
        <Route path="/contato" element={<div>Contato</div>} />
        <Route path="/finalizar" element={<FinalizarCompra />} />
        <Route path="/pedidos" element={<Pedidos />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
