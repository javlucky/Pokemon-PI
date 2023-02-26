import { Home, Landing, Detail, Form } from './views';
import './App.css';
import { Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';


function App() {
  const location = useLocation();
  
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" render={() => <Landing /> } />
      <Route path="/home" render={() => <Home /> } />
      <Route exact path="/detail" render={() => <Detail /> } />
      <Route exact path="/create" render={() => <Form /> } />
      
      

    </div>
  );
}

export default App;
