import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from './components/pages/Home';
import Room from './components/pages/Room';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <>
      <Router>
        <div>
          
            <Navbar />

            <Switch>
             
              <Route path="/room"><Room /></Route>
              <Route path="/"><Home /></Route>
            </Switch>


        </div>
      </Router>
    </>
  );
}

export default App;
