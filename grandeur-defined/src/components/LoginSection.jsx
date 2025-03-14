import { Quote } from "lucide-react";
import React, { useState } from "react";

const AuthSection = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!formData.email || !formData.password) {
      setError("All fields are required!");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Invalid email format!");
      return;
    }

    // Additional signup validation
    if (!isLogin) {
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords don't match!");
        return;
      }
      if (formData.password.length < 6) {
        setError("Password must be at least 6 characters long!");
        return;
      }
      if (!formData.name) {
        setError("Name is required!");
        return;
      }
    }

    // Simulate auth logic (replace with actual API call)
    alert(`${isLogin ? "Logged in" : "Signed up"} successfully with email: ${formData.email}`);
    // Reset form
    setFormData({ email: "", password: "", confirmPassword: "", name: "" });
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError("");
    setFormData({ email: "", password: "", confirmPassword: "", name: "" });
  };

  return (
    <div className="login-page">
      <div className="grand">
        <h1 className="grandeur-fill">Welcome to <b>GRANDEUR DEFINE'S</b></h1>
        <img src="../images/logo.png" alt="logo" className="login-logo"/>
        <p className="quote">- "Confidence is the most beautiful thing you can wear."</p>
      </div>
      <div className="auth-container">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          {error && <p className="error-message">{error}</p>}
          
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="input-field"
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="input-field"
            required
          />

          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="input-field"
              required
            />
          )}

          <button type="submit" className="submit-button">
            {isLogin ? "Login" : "Sign Up"}
          </button>

          <p className="toggle-mode">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              onClick={toggleMode}
              className="toggle-button"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthSection;
