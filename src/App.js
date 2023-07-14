// import './App.css';
import Footer from './components/Footer/Footer';
import Main from './components/Main';
import Navigation from './components/Navigation/Navigation';
import { Routes, Route } from "react-router-dom";
import PlayersMap from './components/Player/PlayersMap';
import Contact from './components/Navigation/Contact';
import Detail from './components/Detail/Detail';
import About from './components/Navigation/About';
import News from './components/Navigation/NewsMap';
import FilmsMap from './components/Film/FilmsMap';
import Dashboard from './components/Dashboard/Dashboard';
import Add from './components/Dashboard/Add';
import Edit from './components/Dashboard/Edit';
import Delete from './components/Dashboard/Delete';
import Protected from './components/Protected/Protected';
import Login from './components/Navigation/Login';

function App() {
  return (
    <div className="App">
      {/* <StateClass/>
      <hr/>
      <StateFunc/> */}
      <Navigation />
      {/* <Main /> */}
      <Routes>
        {/* <Route path='/' element={<PlayersMap/>}></Route> */}
        <Route path='/' element={<FilmsMap/>} ></Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/news' element={<News/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dashboard' element={
          <Protected>
            <Dashboard/>
          </Protected>
        }></Route>
        <Route path='/add' element={
          <Protected>
            <Add/>
          </Protected>
        }></Route>
        <Route path='/edit/:id' element={
          <Protected>
            <Edit/>
          </Protected>
        }></Route>
        <Route path='/delete/:id' element={
          <Protected>
            <Delete/>
          </Protected>
        }></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
