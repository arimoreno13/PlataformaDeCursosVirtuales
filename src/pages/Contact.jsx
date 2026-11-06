import React from "react";

function Contact() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333", padding: "3rem 1rem", maxWidth: "600px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "2.2rem", color: "#1e3c72", marginBottom: "0.5rem" }}>
          Ponte en Contacto
        </h2>
        <p style={{ color: "#666", fontSize: "1.05rem" }}>
          ¿Tienes dudas sobre los cursos? Escríbenos y te responderemos lo antes posible.
        </p>
      </div>

      <form 
        onSubmit={(e) => { e.preventDefault(); alert("¡Mensaje enviado con éxito!"); }}
        style={{ background: "white", padding: "2.5rem", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)", border: "1px solid #e9ecef" }}
      >
        <div style={{ marginBottom: "1.5rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold", color: "#444" }}>
            Nombre completo
          </label>
          <input 
            type="text" 
            placeholder="Tu nombre" 
            required
            style={{ width: "100%", padding: "0.8rem", borderRadius: "6px", border: "1px solid #ccc", fontSize: "1rem", outline: "none" }} 
          />
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold", color: "#444" }}>
            Correo electrónico
          </label>
          <input 
            type="email" 
            placeholder="tucorreo@ejemplo.com" 
            required
            style={{ width: "100%", padding: "0.8rem", borderRadius: "6px", border: "1px solid #ccc", fontSize: "1rem", outline: "none" }} 
          />
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold", color: "#444" }}>
            Mensaje
          </label>
          <textarea 
            rows="4" 
            placeholder="¿En qué podemos ayudarte?" 
            required
            style={{ width: "100%", padding: "0.8rem", borderRadius: "6px", border: "1px solid #ccc", fontSize: "1rem", outline: "none", resize: "vertical" }}
          ></textarea>
        </div>

        <button 
          type="submit"
          style={{ width: "100%", backgroundColor: "#1e3c72", color: "white", padding: "0.9rem", border: "none", borderRadius: "6px", fontSize: "1rem", fontWeight: "bold", cursor: "pointer", transition: "background 0.2s" }}
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
}

export default Contact;