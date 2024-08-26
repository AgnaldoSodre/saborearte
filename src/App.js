import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Catalogo from './components/pages/Catalogo'
import Contato from './components/pages/Contato'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';
import Carrinho from './components/pages/Carrinho';
import Pagamento from './components/pages/Pagamento';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Container customclass="min_height">
            <Routes>
              <Route  path="/" element={<Home />}  />

              <Route path="/catalogo" element={<Catalogo />} />

              <Route path="/contato" element={<Contato /> } />

              <Route path="/carrinho" element={<Carrinho /> } />

              <Route path="/pagamento" element={<Pagamento /> } />

            </Routes>
        </Container>

      <Footer />
      </Router>

    </>
  );
}

export default App;
