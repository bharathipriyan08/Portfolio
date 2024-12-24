import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Certificate from './components/Certificate';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/certificate' element={<Certificate/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
