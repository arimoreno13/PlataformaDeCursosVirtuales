import React from "react";
import styles from "./CourseCard.module.css";

function CourseCard({ course }) {
  return (
    <div className={styles.card}>
      <img src={course.thumbnail} alt={course.title} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{course.title}</h3>
        <p className={styles.description}>{course.description}</p>
        <span className={styles.category}>{course.category}</span>
        <div className={styles.footer}>
          <span className={styles.price}>${course.price}</span>
          <button className={styles.button}>Ver Curso</button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;