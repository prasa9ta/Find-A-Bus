import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
// import Home from './components/home(duprecated)'
import Home from './components/Home'
// import Add from './components/Add'
import Report from './components/Report'
import Error from './components/Error'
// import Todo from './components/todoreact/todo'
// import Signup from './components/Signup';
// import Logout from './components/Logout';
import About from './components/About';



function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element = { <Home/>} />
          {/* <Route path='/search' element = { <Home/>} /> */}
          {/* <Route path='/add' element = { <Add/>}/> */}
          <Route path='/report' element = { <Report/>} />
          {/* <Route path='/logout' element = { <Logout/>} /> */}
          <Route path='*' element = { <Error/>} />
          {/* <Route path='/signup' element = { <Signup/>} /> */}
          <Route path='/about' element = { <About/>} />
          {/* <Route path='/todo' element = { <Todo/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;