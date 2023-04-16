import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="bubble" id="bubble1"></div>
      <div className="bubble" id="bubble2"></div>
      <div className="bubble" id="bubble3"></div>
      <div className="bubble" id="bubble4"></div>

      <img src="Me.jfif" alt="Torin" />
      <div className="about-content">
        <h2 className="title">About Me</h2>
        <p>
          Hey! Thanks for visiting my website and taking the time to get to know
          me :) So... Who is Torin? Well, I'm a senior Computer Science student
          at Wilfrid Laurier University in Waterloo Ontario. I immediately knew
          I wanted to pursue a career in tech when I built my first project
          which was a musical Arduino keyboard. I have always been an artistic
          person and just loved designing and making things my own. So when I
          realized the endless creative possibilities computers and programming
          provide, I jumped on and never looked back. I'm so excited to expand
          on my tools and skill set so I can make many, many more projects that
          help or provide enjoyment to people.
        </p>
      </div>
    </section>
  );
}
export default About;
