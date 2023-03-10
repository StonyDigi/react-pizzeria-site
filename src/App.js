import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

  {/** azokat az elemeket fogjuk felvenni a routerben amit mindegyik routerben(aloldalon) látni akarunk */}
function App() {
  {/* Amit ide a Router komponenseb belül helyezünk el az minden aloldalon látható és fix marad!!*/}
  return (
  
    <Router>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;