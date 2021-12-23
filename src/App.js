import react from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx'
import Body from './components/Body/Body.jsx'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Body/>
        <Footer/>
    </div>
  );
}

export default App;
