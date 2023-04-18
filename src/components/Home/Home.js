import "./Home.css";
import { links } from "../../data/data";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-banner">
        <h1>Torin Borton-McCallum</h1>
        {/* <p>Welcome To My Website :)</p> */}
        <ul className="icons">
          {links.map((link) => {
            return (
              <li className={link.class} key={link.id}>
                <a href={link.link} target="_blank" rel="noreferrer">
                  {link.icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
export default Home;
