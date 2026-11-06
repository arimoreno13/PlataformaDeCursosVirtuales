import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar({ search, setSearch }) {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Buscar cursos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.searchInput}
      />
    </div>
  );
}

export default SearchBar;