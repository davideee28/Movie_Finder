import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="headerContainer">
      <a className="link" href="/movies">
        Film
      </a>
      <a className="link" href="/series">
        Serie TV
      </a>
      <a className="headerTitle" href="/home">
        MOVIE FINDER
      </a>
      <a className="link" href="/home">
        Home
      </a>
      <a className="link" href="/about">
        About
      </a>
    </div>
  );
}
