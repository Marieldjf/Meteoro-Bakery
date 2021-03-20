import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';
import cookies from './pages/cookies';
import home from './components/home';
import brownies from './pages/brownies';
import cakes from './pages/cakes';


function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      
      {/* <SideMenu/> */}
      
      <Switch>
        <Route exact path='/' component={home}/>
        <Route path='/cakes' component={cakes}/>
        <Route path='/brownies' component={brownies}/>
        <Route path='/cookies' component={cookies} />
      </Switch>
      
      
      </BrowserRouter>
    </div>
    

  );
}

export default App;
