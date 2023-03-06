import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './views/Home/Home.jsx';
import Landing from './views/Landing/Landing.jsx';
import Detail from './views/Detail/Detail.jsx';
import Form from './views/Form/Form.jsx';
//import NavBar from './components/NavBar/NavBar';


function App() {
  //const location = useLocation();
  /*{location.pathname !== "/" && <NavBar />}*/
  return (
    <div className="App">
      
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={Home} />
      <Route path="/detail/:id" component={Detail} />
      <Route path="/create" component={Form} />
    </div>
  );
}

export default App;
