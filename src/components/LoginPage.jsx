import React, { useState } from "react";
import "../styles/LoginPage.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [name,setName] = useState("");
  const [pass,setPass] = useState("");
  const [check,setCheck] = useState(false);
  function handelSubmit(e) {
    e.preventDefault()
    console.log(name,pass,check) //server part
      
  }

  return (
    <div className="container">
      <div className="left-section">
        <div className="logo">LOGO</div>
        <h1>TCS employee commute</h1>
        <p className="intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          fermentum lacinia neque, quis condimentum turpis rhoncus eget.
          Praesent rutrum consectetur semper. Vivamus quam urna, tincidunt at
          nisl id, condimentum.
        </p>
      </div>
      <div className="right-section">
        <h2>Let's log you in</h2>
        <form onSubmit={handelSubmit}>
          <label htmlFor="email">TCS email ID</label>
          <input type="email" id="email" placeholder="Enter email" name="email" value={name} onChange={e => setName(e.target.value)} required />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Type here"
            name="password"
            value={pass}
            onChange={e => setPass(e.target.value)}
            required
          />

          <div className="options">
            <div>
              <input type="checkbox" id="remember" name="checkbox" value={check} onChange={ e => setCheck(!check)} />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit">Log in</button>
        </form>
        <p className="register">
          Don’t have an account? <Link to="/create-account">Create your account here</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
