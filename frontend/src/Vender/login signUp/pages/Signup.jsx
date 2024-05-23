import  { useState } from "react";
import axios from "axios";
import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";


const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/signup",
        user
      );
      storeTokenInLS(response.data.token);
      setUser({
        username: "",
        email: "",
        password: "",
      });
      alert("Sign Up Successfull");
      navigate("/services");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>

    <Navbar />


      <section className="signup">
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            required
            value={user.username}
            onChange={handleInput}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            autoComplete="off"
            value={user.email}
            onChange={handleInput}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            autoComplete="off"
            value={user.password}
            onChange={handleInput}
          />
          <button type="submit">Sign up</button>
        </form>
      </section>
    </>
  );
};

export default Signup;
