import { Link } from "react-router-dom";

export default function Login() {
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
          width: "350px",
          boxShadow: "0 0 20px rgba(255,0,0,0.3)",
        }}
      >
        <h1 style={{ color: "red", textAlign: "center" }}>CineVerse</h1>

        <h2>Login</h2>

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
          Sign In
        </button>

        <p style={{ marginTop: "20px" }}>
          New User?{" "}
          <Link to="/signup" style={{ color: "red" }}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}