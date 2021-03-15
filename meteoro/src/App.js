import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <SideMenu/>
      <Footer/>
    </div>
  );
}

export default App;
