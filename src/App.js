import './App.css';
import { ToggleProvider } from './components/ToggleContext';
import Nav2 from './components/Nav2';
import Footer from './components/Footer';
import EventOwners from './pages/EventOwners';
import { Route, Routes } from 'react-router-dom';
import TokenHolders from './pages/TokenHolders';
import Signup from './modals/Signup';
import { useLocation } from 'react-router-dom';
import Login from './modals/Login';
import Dashboard from './components/Dashboard';


function App() {

  const location = useLocation();

  const isModalPath = location.pathname.includes('/signup');

  return (
    <ToggleProvider>
      <div className={isModalPath ? "modal-overlay" : ""}>
        <Routes>
          <Route path='/*' element={<Pages/>} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </ToggleProvider>
  );
}

const Pages = () => {
  return (
    <>
      <Nav2 about='Token Holders' home='Event Owners' />
      <Routes>
        <Route path="/" element={<EventOwners />} />
        <Route path="/create-account" element={<TokenHolders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/token-holders" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
