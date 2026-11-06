import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
      {/* Sección Principal (Hero) */}
      <header
        style={{
          background: "linear-gradient(135deg, #2b6e5e 0%, #2a5298 100%)",
          color: "white",
          textAlign: "center",
          padding: "5rem 2rem",
        }}
      >
        <h1 style={{ fontSize: "2.8rem", marginBottom: "1.2rem", lineHeight: "1.2" }}>
          Impulsa tu futuro profesional con <span style={{ color: "#00d2ff" }}>EduOnline</span>
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "650px", margin: "0 auto 2rem auto", opacity: "0.9" }}>
          Accede a nuestros cursos virtuales especializados. Aprende a tu propio ritmo desde cualquier lugar.
        </p>
        <div>
          <Link
            to="/courses"
            style={{
              backgroundColor: "#00d2ff",
              color: "#1e3c72",
              padding: "0.8rem 1.8rem",
              borderRadius: "25px",
              textDecoration: "none",
              fontWeight: "bold",
              display: "inline-block",
            }}
          >
            Explorar Cursos
          </Link>
        </div>
      </header>

      {/* Sección de Características */}
      <section style={{ maxWidth: "1000px", margin: "4rem auto", padding: "0 1.5rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "2.5rem", color: "#1e3c72" }}>
          ¿Por qué estudiar con nosotros?
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
          <div style={{ background: "white", border: "1px solid #121414", padding: "2rem", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🎓</div>
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.8rem" }}>Certificación</h3>
            <p style={{ color: "#666", fontSize: "0.95rem" }}>Obtén constancias al finalizar cada programa de estudio.</p>
          </div>
          <div style={{ background: "white", border: "1px solid #0b0d0f", padding: "2rem", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>⏰</div>
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.8rem" }}>Flexibilidad</h3>
            <p style={{ color: "#666", fontSize: "0.95rem" }}>Estudia a tu ritmo, sin horarios fijos ni complicaciones.</p>
          </div>
          <div style={{ background: "white", border: "1px solid #070808", padding: "2rem", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>👨‍🏫</div>
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.8rem" }}>Práctico</h3>
            <p style={{ color: "#666", fontSize: "0.95rem" }}>Contenido directo al grano enfocado en habilidades reales.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;