import './App.css';
import Navbar from "./components/Navbar"
import WelcomeSection from './components/WelcomeSection';
import AboutSection from './components/AboutSection';
import CarSection from './components/CarSection';
import Footer from './components/Footer';
import CategorySorter from './components/CategorySorter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <WelcomeSection />
      <AboutSection />
      <CarSection />
      <Footer />
    </div>
  );
}

export default App;