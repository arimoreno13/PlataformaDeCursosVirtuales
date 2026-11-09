import { useState } from "react";
import CourseCard from "./CourseCard";
import styles from "./CourseList.module.css";
import SearchBar from "./SearchBar";

// Lista de cursos de prueba
const COURSES_DATA = [
  {
    id: 1,
    title: "Desarrollo Web Full Stack",
    description: "Aprende HTML, CSS, JavaScript, React y Node.js desde cero.",
    category: "Programación",
    price: 49.99,
    thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=500&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Diseño UX/UI Avanzado",
    description: "Domina Figma y diseña interfaces modernas e intuitivas.",
    category: "Diseño",
    price: 39.99,
    thumbnail: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=500&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Python para Ciencia de Datos",
    description: "Analiza datos y crea modelos con Pandas, NumPy y Matplotlib.",
    category: "Data Science",
    price: 59.99,
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Marketing Digital y Redes Sociales",
    description: "Estrategias efectivas para potenciar marcas e incrementar ventas.",
    category: "Marketing",
    price: 29.99,
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Inglés de Negocios y Profesional",
    description: "Mejora tu fluidez, redacción de correos y técnicas de entrevista en inglés.",
    category: "Idiomas",
    price: 34.99,
    thumbnail: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=500&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Finanzas Personales e Inversiones",
    description: "Aprende a gestionar tu dinero, crear un presupuesto y empezar a invertir en la bolsa.",
    category: "Finanzas",
    price: 45.00,
    thumbnail: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Edición de Video con Premiere Pro",
    description: "Crea piezas audiovisuales profesionales, añade efectos y exporta en alta calidad.",
    category: "Multimedia",
    price: 49.99,
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Fotografía Digital desde Cero",
    description: "Domina el manejo de cámaras réflex, iluminación, composición y revelado digital.",
    category: "Fotografía",
    price: 39.99,
    thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "Inteligencia Artificial desde Cero",
    description: "Comprende los fundamentos del Machine Learning y cómo usar herramientas de IA generativa.",
    category: "Tecnología",
    price: 54.99,
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=500&auto=format&fit=crop"
  },
  {
    id: 10,
    title: "Gestión de Proyectos con Agile y Scrum",
    description: "Aprende a liderar equipos de trabajo eficientes bajo metodologías ágiles.",
    category: "Negocios",
    price: 42.00,
    thumbnail: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&auto=format&fit=crop"
  },
  {
    id: 11,
    title: "Diseño 3D con Blender",
    description: "Modela personajes, objetos y escenarios tridimensionales para videojuegos o animación.",
    category: "Diseño",
    price: 49.99,
    thumbnail: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?w=500&auto=format&fit=crop"
  },
  {
    id: 12,
    title: "Ciberseguridad y Hacking Ético",
    description: "Protege redes, sistemas informáticos y detecta vulnerabilidades web como un profesional.",
    category: "Seguridad",
    price: 64.99,
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&auto=format&fit=crop"
  }
];

function CourseList() {
  const [courses] = useState(COURSES_DATA);
  const [search, setSearch] = useState("");

  /* FILTRAR LOS CURSOS SEGÚN EL BUSCADOR */
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <SearchBar search={search} setSearch={setSearch} />
      
      <div className={styles.grid}>
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default CourseList;