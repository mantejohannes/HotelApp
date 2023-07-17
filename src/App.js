import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from './components/pages/Home';
import Room from './components/pages/Room';
import Navbar from './components/layout/Navbar';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import ForgotPassword from './components/pages/ForgotPassword';
import Booking from './components/pages/Booking';
function App() {
  return (
    <>
      <Router>
        <div>
          
            <Navbar />

            <Switch>
             
              <Route path="/room"><Room /></Route>
              <Route path="/register"><Register /></Route>
              <Route path="/forgotpassword"><ForgotPassword /></Route>

              <Route path="/home"><Home /></Route>
              <Route path="/booking"><Booking /></Route>

              <Route path="/"><Login /></Route>

            </Switch>


        </div>
      </Router>
    </>
  );
}

export default App;
