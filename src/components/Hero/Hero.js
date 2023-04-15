import "./Hero.css";
import links from "../../data/data";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <h1>Torin Borton-McCallum</h1>
        {/* <p>Welcome To My Website :)</p> */}
        <ul className="icons">
          {links.map((link) => {
            return (
              <li className={link.class} key={link.id}>
                <a href={link.link} target="_blank" rel="noreferrer">
                  {link.icon}
                </a>

                {/* <p>{link.text}</p> */}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
export default Hero;
