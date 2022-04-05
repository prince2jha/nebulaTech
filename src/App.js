import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import {Switch,Route} from 'react-router-dom';
import Register from './components/Register';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
      {/* <Home />
      <About />
      <Services />
      <Contact />
      <Footer /> */}
      <Footer />
    </>
  );
}

export default App;
