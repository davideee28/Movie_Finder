import Header from "../components/Header";
import styles from "./About.module.css";
const foto = "serieTv.jpg";
export default function About() {
  return (
    <div className={styles.container}>
      <h2>ABOUT US</h2>
      <div className={styles.contenitore}>
        <div className={styles.descrizione}>
          Movie Finder is one of the best site to watch movies online for free.
          We give full access to a database of over 20000 movies and 5000 Tv
          series in high quality for free streaming, with no registration
          required. Movie Finder updates new content on a daily basis and with
          our huge database, you can find all your favorite movies and shows
          easily. Please support us by sharing streamy site with your friends
          and family. Thanks! It is time to cut the cord or cancel your
          subscription! You now do not need to proceed at your own risk to watch
          your favorite movies on free movie sites. Thousands of movies and TV
          shows at streamy are available for free users. And thanks to the
          site's ad-free feature, you can enjoy them without any worries.
          Watching movies with zero ads is no longer an exclusive benefit for
          paid users. Normally, sites are either free but ad-supported or
          premium without ads. But Movie Finder brings you the best of both
          worlds: it does not require any payment and it does not have ads. Why
          spend your hard-earned money on paid streaming services when you can
          watch your favorite movies safely and freely on movie finder?
        </div>
        
      </div>
    </div>
  );
}
