import React from 'react'
import "./Component.css";
import { useNavigate} from 'react-router-dom';

function Header() {

  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/'); // Navigate to the Home page
  };

  const goToLogin = () => {
    navigate('/login'); // Navigate to the Login page
  };

  return (
    <div className='header'>
        <h1> Movie Library </h1>
        <div onClick={goToHome} style={{ cursor: 'pointer' }}>Home</div>
      <div onClick={goToLogin} style={{ cursor: 'pointer' }}>Login</div>
    </div>
  )
}

export default Header