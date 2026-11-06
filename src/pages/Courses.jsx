import React from "react";
import CourseList from "../components/CourseList";

function Courses() {
  return (
    <div style={{ padding: "1rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Nuestros Cursos</h2>
      <CourseList />
    </div>
  );
}

export default Courses;