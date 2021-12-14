import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// Importando as páginas
import Home from './components/pages/Home';
import Sobre from './components/pages/Sobre';
import Contato from './components/pages/Contato';
import NovoProjeto from './components/pages/NovoProjeto';
import Projetos from './components/pages/Projetos';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Container customClass="min-heght">
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projetos">
          <Projetos />
        </Route>
        <Route exact path="/Sobre">
          <Sobre />
        </Route>
        <Route exact path="/Contato">
          <Contato />
        </Route>
        <Route exact path="/NovoProjeto">
          <NovoProjeto />
        </Route>
        </Container>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
