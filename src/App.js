
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import WatchHistory from './pages/WatchHistory';


import './App.css';
import LandingPage from './pages/LandingPage';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
     
<Header/>

<Routes>
<Route path='/' element={<LandingPage/>}/>
<Route path='/home' element={<Home/>}/>
<Route path='/watchhistory' element={<WatchHistory/>}/>

</Routes>

<Footer/>


    </div>
  );
}

export default App;
