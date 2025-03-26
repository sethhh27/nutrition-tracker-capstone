import React, { useState } from "react";

// Just the UI and layout for now
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login clicked with:", email, password);
    // Firebase login logic goes here later
  };

  const handleSignup = () => {
    console.log("Signup clicked with:", email, password);
    // Firebase signup logic goes here later
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#1e1e1e",
        color: "white",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h1 style={{ marginBottom: "2rem", fontSize: "2.5rem" }}>
        NUTRITION TRACKER
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          minWidth: "300px"
        }}
      >
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          />
        </label>

        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <button
            onClick={handleLogin}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              cursor: "pointer"
            }}
          >
            Log In
          </button>
          <button
            onClick={handleSignup}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#2196F3",
              color: "white",
              border: "none",
              cursor: "pointer"
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
