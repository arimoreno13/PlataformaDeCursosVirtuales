import React from "react";

function About() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333", padding: "3rem 1.5rem", maxWidth: "900px", margin: "0 auto" }}>
      {/* Encabezado */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "2.5rem", color: "#1e3c72", marginBottom: "1rem" }}>
          Sobre <span style={{ color: "#00d2ff" }}>EduOnline</span>
        </h2>
        <p style={{ color: "#666", fontSize: "1.1rem", maxWidth: "650px", margin: "0 auto", lineHeight: "1.6" }}>
          Somos una plataforma dedicada a transformar la educación en línea, brindando acceso a programas de alta calidad que potencian el crecimiento profesional de nuestros estudiantes.
        </p>
      </div>

      {/* Bloque de Misión y Visión */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
        <div style={{ background: "white", padding: "2rem", borderRadius: "12px", border: "1px solid #e9ecef", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)" }}>
          <h3 style={{ color: "#1e3c72", fontSize: "1.3rem", marginBottom: "0.8rem" }}>🎯 Nuestra Misión</h3>
          <p style={{ color: "#666", lineHeight: "1.5", fontSize: "0.95rem" }}>
            Democratizar la educación de calidad permitiendo que cualquier persona, sin importar su ubicación, adquiera habilidades prácticas altamente demandadas en el mercado laboral actual.
          </p>
        </div>
        <div style={{ background: "white", padding: "2rem", borderRadius: "12px", border: "1px solid #e9ecef", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)" }}>
          <h3 style={{ color: "#1e3c72", fontSize: "1.3rem", marginBottom: "0.8rem" }}>🚀 Nuestra Visión</h3>
          <p style={{ color: "#666", lineHeight: "1.5", fontSize: "0.95rem" }}>
            Convertirnos en la comunidad de aprendizaje virtual líder en Iberoamérica, reconocida por la excelencia de nuestros instructores y el éxito profesional de nuestros egresados.
          </p>
        </div>
      </div>

      {/* Valores */}
      <div style={{ background: "#f8f9fa", padding: "2.5rem", borderRadius: "12px", textAlign: "center", border: "1px solid #e9ecef" }}>
        <h3 style={{ color: "#1e3c72", fontSize: "1.5rem", marginBottom: "1.5rem" }}>Nuestros Valores</h3>
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <span style={{ fontSize: "1.5rem" }}>💡</span>
            <p style={{ fontWeight: "bold", margin: "0.5rem 0 0 0", color: "#444" }}>Innovación</p>
          </div>
          <div>
            <span style={{ fontSize: "1.5rem" }}>🤝</span>
            <p style={{ fontWeight: "bold", margin: "0.5rem 0 0 0", color: "#444" }}>Compromiso</p>
          </div>
          <div>
            <span style={{ fontSize: "1.5rem" }}>⭐</span>
            <p style={{ fontWeight: "bold", margin: "0.5rem 0 0 0", color: "#444" }}>Calidad</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;