import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Catalogo from './components/pages/Catalogo'
import Contato from './components/pages/Contato'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';

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

            </Routes>
        </Container>

      <Footer />
      </Router>

    </>
  );
}

export default App;
