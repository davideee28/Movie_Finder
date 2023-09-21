import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import fetcher from "../../fetcher";
import styles from "./Details.module.css";
import Card from "../components/Card";
const API_image = "https://image.tmdb.org/t/p/w500/";

export default function Details() {
  const { id, type, title } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    const newData = await fetcher
      .fetcherDetails(id, type)
      .then((response) => response);
    setData(newData);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  const goBack = () => {
    navigate(-1);
  };



  return (
    <div className={styles.container}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${API_image + data.backdrop_path})` }}
      ></div>
      <button className={styles.button} onClick={goBack}>
        ❮
      </button>
      <div className={styles.primaParte}>
      
        GENRES:
        {data.genres?.map((item, index) => {
          return <span key={index}> {item.name} </span>;
        })}
        <p>
          RELEASE DATE: <br></br>
          {data.release_date}
        </p>
        <p>
          USERS VOTING: <br></br> {data.vote_average}
        </p>
      </div>

      <div className={styles.secondaParte}>
        <p>{data.tagline}</p>
        <p>{data.overview}</p>
        <a href={data.homepage}>WATCH</a>
      </div>

      <div className={styles.terzaParte}>
        <img src={API_image + data.poster_path} alt="image" />
      </div>
    </div>
  );
}
