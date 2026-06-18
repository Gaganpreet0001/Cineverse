import { Link } from "react-router-dom";

import avengers from "../assets/movies/avengers.jpg";
import batman from "../assets/movies/batman.jpg";
import inception from "../assets/movies/inception.jpg";
import interstellar from "../assets/movies/interstellar.jpg";
import joker from "../assets/movies/joker.jpg";
import oppenheimer from "../assets/movies/oppenheimer.jpg";

export default function Landing() {
  const movies = [
    { title: "Avengers", image: avengers },
    { title: "Batman", image: batman },
    { title: "Inception", image: inception },
    { title: "Interstellar", image: interstellar },
    { title: "Joker", image: joker },
    { title: "Oppenheimer", image: oppenheimer },
  ];

  return (
    <div
      style={{
        backgroundColor: "#141414",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 50px",
          backgroundColor: "#000",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <h1 style={{ color: "red", fontSize: "2rem" }}>
          CineVerse
        </h1>

        <div>
          <Link to="/login">
            <button
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "10px 20px",
                marginRight: "10px",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "10px 20px",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Signup
            </button>
          </Link>
        </div>
      </nav>

      <section
        style={{
          height: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 60px",
          background:
            "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.4))",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            marginBottom: "10px",
          }}
        >
          Unlimited Movies & Entertainment
        </h1>

        <p
          style={{
            fontSize: "1.4rem",
            maxWidth: "600px",
          }}
        >
          Book movie tickets, watch trailers and explore the
          latest blockbusters with CineVerse.
        </p>
      </section>

      <section style={{ padding: "40px 50px" }}>
        <h2 style={{ marginBottom: "20px" }}>
          Trending Movies
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {movies.map((movie) => (
            <div
              key={movie.title}
              style={{
                overflow: "hidden",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform =
                  "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform =
                  "scale(1)")
              }
            >
              <img
                src={movie.image}
                alt={movie.title}
                style={{
                  width: "100%",
                  height: "350px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              <h3
                style={{
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                {movie.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}