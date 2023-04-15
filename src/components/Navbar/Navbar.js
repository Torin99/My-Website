import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* <div className="title">
        <p>Torin's Website</p>
      </div> */}
      <ul className="list">
        <li>Home</li>
        <li>About</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
export default Navbar;
