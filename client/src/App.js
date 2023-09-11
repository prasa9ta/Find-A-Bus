import './App.css';
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Add from './components/Add'
import Report from './components/Report'
import Error from './components/Error'
import Todo from './components/todoreact/todo'
import Signup from './components/Signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element = { <Home/>} />
          <Route path='/add' element = { <Add/>} />
          <Route path='/report' element = { <Report/>} />
          <Route path='*' element = { <Error/>} />
          <Route path='/signup' element = { <Signup/>} />
          <Route path='/todo' element = { <Todo/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
