import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div
      style={{
        background: "#141414",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.8)",
          padding: "40px",
          borderRadius: "10px",
          width: "400px",
          boxShadow: "0 0 20px rgba(255,0,0,0.3)",
        }}
      >
        <h1 style={{ color: "red", textAlign: "center" }}>CineVerse</h1>

        <h2>Sign Up</h2>

        <input
          type="text"
          placeholder="Full Name"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "none",
          }}
        />

        <input
          type="email"
          placeholder="Email"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "none",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "none",
          }}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "none",
          }}
        />

        <select
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "none",
          }}
        >
          <option>User</option>
          <option>Theatre Owner</option>
        </select>

        <button
          style={{
            width: "100%",
            padding: "12px",
            background: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Create Account
        </button>

        <p style={{ marginTop: "20px" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "red" }}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}