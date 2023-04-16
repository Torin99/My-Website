import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* <div className="title">
        <p>Torin's Website</p>
      </div> */}
      <ul className="list">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
