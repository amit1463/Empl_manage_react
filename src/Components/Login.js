import React, {useState} from 'react';
import classes from "./Login.module.css";
import secureLogo from "../assets/log.png"




function Login(props) {

  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // const [val,setVal] = useState(false);
     
  const [email,setEmail] = useState(false);
  const [pass,setPass] = useState(false); 


  const emailVal = "user@gmail.com";
  const passVal = "pass";
  
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    if(event.target.value === emailVal){
      setEmail(true)
    } 
    setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    if(event.target.value===passVal){
      setPass(true);
    }
    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };

  // validation
  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  //submit
  const submitHandler = (e) => {
    e.preventDefault();
    
    if(enteredEmail!=="" || enteredPassword!==""){
      if(email===true && pass===true){
        props.onLogin(enteredEmail,enteredPassword)
      }else{
          alert("wrong username or password");
        
      }
    setEnteredEmail("");
    setEnteredPassword("");
    
  }
}

    return (
      <>
      <div className={classes.card}>
        <div>
          <img src={secureLogo} alt="logo" />
        </div>
        <form onSubmit={submitHandler}>
          <div className={classes.email}>
            <label className={classes.email_input} htmlFor="email">
              Email :
            </label>
            <input
              type="email"
              id="email"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
            />
          </div>
          <div className={classes.pass}>
            <label className={classes.pass_input} htmlFor="password">
              Password :
            </label>
            <input
              type="password"
              id="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
            />
          </div>
          <div className="">
            <button type="submit" className={classes.logBtn}>
              Login
            </button>
          </div>
        </form>
        
      </div>
      <h4>The email is "user@gmail.com" and password is "pass"<br/>
      else will show an alert about wrong username or password
    </h4>
    </>
    );
}

export default Login;
