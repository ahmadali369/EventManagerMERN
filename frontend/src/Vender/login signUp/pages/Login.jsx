import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";




const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "",
  });
  const options = [
    { label: "Admin", value: "Admin" },
    { label: "Student", value: "Student" },
  ];

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
      console.log(user);
      const response = await axios.post(
        "http://localhost:5000/auth/login",
        user
      );
      storeTokenInLS(response.data.token);
      setUser({
        email: "",
        password: "",
        role: "<--Select an option-->",
      });
      alert(response.data.msg);
      navigate("/services");
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert("Invalid Email or Password");
    }
  };
  return (
    <>
    <section>
    <Navbar />
    </section>

      <section className="signup">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
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
          <label htmlFor="role">Role</label>
          <select
            name="role"
            id="role"
            value={user.role}
            onChange={handleInput}
            required
            placeholder="Select Option"
          >
            <option value="">{"<--Select an option-->"}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <button type="submit">Sign In</button>
        </form>
      </section>
    </>
  );
};

export default Login;
