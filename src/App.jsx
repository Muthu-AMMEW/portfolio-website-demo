import './App.css';
import Home from './components/Home';
import Foot from './components/layouts/Foot';
import Head from './components/layouts/Head';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import ScrollToTop from './utils/ScrollToTop';


function App() {

  axios.defaults.baseURL = `${import.meta.env.VITE_SERVER_URL}`;
  axios.defaults.withCredentials = true;

  return (
    <Router>
      <div className="App">
        <HelmetProvider>
          <Head />
          <div>
            <ToastContainer theme='dark' />
            <ScrollToTop />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/projects' element={<Home />} />
            </Routes>
          </div>
          <Foot />
        </HelmetProvider>
      </div>
    </Router>
  );
}

export default App;
