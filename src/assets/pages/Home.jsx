import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import fetcher from "../../fetcher";
import Card from "../components/Card";
import Slider from "../components/Slider";

export default function Home() {
  const [upcomingMovie, setUpcomingMovie] = useState();
  const [topRatedSeries, setTopRatedSeries] = useState();

  const getData = async () => {
    const newUpcoming = await fetcher
      .default("movie/upcoming")
      .then((response) => response);
    const newTopRated = await fetcher
      .default("tv/top_rated")
      .then((response) => response);
    setUpcomingMovie(newUpcoming.results);
    setTopRatedSeries(newTopRated.results);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.container}>
      <div className="titoli"> UPCOMING MOVIES </div>
      <Slider data={upcomingMovie} type="movie" title="title" />
      <div className="titoli"> TOP RATED SERIES </div>
      <Slider data={topRatedSeries} type="tv" title="name" />
    </div>
  );
}
