import styles from "./Movies.module.css";
import MoviesBox from "../components/MoviesBox";

export default function Movies() {
  return (
    <div className={styles.container}>
      <div className={styles.titoliPagine}>MOVIES</div>
    <MoviesBox url ="movie/popular" title="title" type="movie"/>
    </div>
  );
}
