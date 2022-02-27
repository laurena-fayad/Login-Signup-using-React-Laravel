import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Nav from './components/Nav'
import Login from './pages/Login'
import Landing from './pages/Landing'
import Register from './pages/Register'

function App() {
  return (
    <div className="App">
    
      <Router>
          <Nav/>
          <Routes>
            <Route exact path='/' element={<Landing/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
      </Router>
    </div>
  );
};

export default App;
