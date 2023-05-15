import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Player from './components/Player';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Player/>
      <Footer/>
    </div>
  );
}

export default App;
