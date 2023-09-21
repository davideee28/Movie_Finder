import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="logo">
        <div>MF</div>
      </div>
      <div className="contatti">
        <h3>CONTACT US:</h3>
        <ul>
          <li>
            <a className="link" href="https://www.instagram.com/">
              instragram
            </a>
          </li>
          <li>
            <a className="link" href="https://www.facebook.com/">
              facebook
            </a>
          </li>
          <li>
            <a className="link" href="https://www.twitter.com/">
              twitter
            </a>
          </li>
        </ul>
      </div>

      <div className="contatti">
        <h3>MOVIE FINDER:</h3>
        <ul>
          <li>
            <a className="link" href="/home">
              Home
            </a>
          </li>
          <li>
            <a className="link" href="/home">
              Term of services
            </a>
          </li>
          <li>
            <a className="link" href="/about">
              About us
            </a>
          </li>
        </ul>
      </div>

      <div className="contatti">
        <h3>SUGGESTIONS:</h3>
        <ul>
          <li>
            <a className="link" href="/home">
              You must Watch
            </a>
          </li>
          <li>
            <a className="link" href="/home">
              Recent release
            </a>
          </li>
          <li>
            <a className="link" href="/home">
              Top IMDB
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
