import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Carrinho from './pages/Carrinho/Carrinho';
import Footer from './components/Rodape/Rodape';
import { GlobalStyle } from './GlobalStyle';

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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
