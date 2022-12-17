import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LoginContext } from '../contexts/LoginContext';

export default function MenuOpcoes() {
  const navigate = useNavigate();

  const { setLogin } = useContext(LoginContext);

  const logoff = () => {
    setLogin(false);
    localStorage.removeItem('login');
    navigate('/');
  };
  return (
    <div className="menu">
      <Link to="/menu">
        <div className="itemMenu">Capa</div>
      </Link>
      <Link to="/cadastro">
        <div className="itemMenu">Cadastro</div>
      </Link>
      <div className="itemMenu" onClick={logoff}>
        Logoff
      </div>
    </div>
  );
}
