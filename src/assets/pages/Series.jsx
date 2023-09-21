import styles from "./Series.module.css";
import MoviesBox from "../components/MoviesBox";

export default function Series() {
 

  return (
    <div className={styles.container}>
      <div className={styles.titoliPagine}>SERIE TV</div>
    <MoviesBox url="tv/popular" title="name" type="tv"/>
    </div>
  );
}
