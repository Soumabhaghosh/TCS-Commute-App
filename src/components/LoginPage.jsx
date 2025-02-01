import React, { useState } from "react";
import "../styles/LoginPage.css";
import { Link } from "react-router-dom";
import { Button} from "@chakra-ui/react";
import axios from "axios";

const LoginPage = (props) => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [check, setCheck] = useState(false);
  const [isLoading,setIsLoading]= useState(false)
  async function handelSubmit(e) {
    e.preventDefault()
    setIsLoading(true)
    try {
      const response = await axios.get("https://api.zippopotam.us/us/33160")
      if(response){
        console.log(response.data);
        props.login()
      }
    } catch (error) {
      
    }
    
    
   


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
              <input type="checkbox" id="remember" name="checkbox" value={check} onChange={e => setCheck(!check)} />
              <label id="remember-me" htmlFor="remember">Remember me</label>
            </div>
            <a href="#">Forgot password?</a>
          </div>

          
          
          <Button type="submit" loading={isLoading} variant="solid" colorPalette="green">Login</Button>
        </form>


        <p className="register">
          Don’t have an account? <Link to="/create-account">Create your account here</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
