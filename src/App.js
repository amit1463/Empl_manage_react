import React, {useEffect, useState} from 'react'
import Login from './Components/Login';
import Home from './Components/Home';
import Header from "./Components/Header";
import './App.css';

function App() {

  const [isloggedIn, setloggedIn] = useState(false);

useEffect(()=>{
  const storedValue = localStorage.getItem('isloggedIn');
  if(storedValue === '1'){
    setloggedIn(true)
  }
},[])


const loginHandler = (email, password) => {
    localStorage.setItem('isloggedIn', '1')
    setloggedIn(true)
}

const logoutHandler = () => {
  localStorage.removeItem('isloggedIn');
  setloggedIn(false);
}

  return (
    <>
      <Header isAuthenticated={isloggedIn} onLogout={logoutHandler} />
      <main className="main">
        {!isloggedIn && <Login onLogin={loginHandler} />}
        {isloggedIn && <Home onLogin={logoutHandler} />}
      </main>
      
    </>
  );
}

export default App
