import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import WelcomeSection from './components/WelcomeSection';

function App() {
  return (
    <div className="App">
        <Navbar />
        <WelcomeSection />
    </div>
  );
}

export default App;
