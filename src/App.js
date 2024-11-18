import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Profile from './components/Profile';
import Product from './components/Product';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='Product' Component={Product} />
        <Route path='Profile' Component={Profile} />
      </Routes>
    </Router>
  );
}

export default App;
