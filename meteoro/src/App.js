import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import cookies from './pages/cookies';
import home from './components/home';
import brownies from './pages/brownies';
import cakes from './pages/cakes';
import checkout from './pages/checkout';


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
        <Route path='/checkout' component={checkout}/>
      </Switch>
      
      
      </BrowserRouter>
    </div>
    

  );
}

export default App;
