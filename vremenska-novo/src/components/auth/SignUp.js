import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../App.css"

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  
  const signUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      // Display an error message to the user if the passwords do not match
      return;
    }
    setErrorMessage("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  
  

  return (
    <div className="signup">
      <form onSubmit={signUp}>
  <h1>Create Account</h1>
  <input
    type="email"
    placeholder="Enter your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  ></input>
  <input
    type="password"
    placeholder="Enter your password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  ></input>
  <input
    type="password"
    placeholder="Confirm your password"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
  ></input>
  {errorMessage !== "" && <p className="error-message">{errorMessage}</p>}
  <button className="btn btn-primary btn-block btn-large" type="submit">Sign Up</button>
</form>
<p className="signedInAs">
      Already have an account? <br></br> <Link to="/sign-in">Click to Sign In!</Link>
    </p>
    </div>
  );
};

export default SignUp;