import React, {useEffect, useState} from 'react'
import Login from './Components/Login';
import Home from './Components/Home';
import Header from "./Components/Header";

function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);

useEffect(()=>{
  const storedValue = localStorage.getItem('isLoggedIn');
  if(storedValue === '1'){
    setLoggedIn(true)
  }
},[])


const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', '1')
    setLoggedIn(true)
}

const logoutHandler = () => {
  localStorage.removeItem('isLoggedIn');
  setLoggedIn(false);
}

  return (
    <>
      <Header isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogin={logoutHandler} />}
      </main>
    </>
  );
}

export default App
