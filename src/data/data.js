import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { ImProfile } from "react-icons/im";

const links = [
  {
    id: 1,
    icon: <AiFillGithub />,
    text: "Github",
    class: "icon",
    link: "https://github.com/Torin99",
  },
  {
    id: 2,
    icon: <AiFillLinkedin />,
    text: "LinkedIn",
    class: "icon",
    link: "https://www.linkedin.com/in/torinwylder/",
  },
  {
    id: 3,
    icon: <ImProfile />,
    text: "Resume",
    class: "resume-icon",
    link: "https://github.com/Torin99",
  },
];

const projects = [
  {
    key: 1,
    title: "Handle: The ASL Word Guessing Game",
    description:
      "My spin on the popular puzzle game Wordle, Handle takes in detected Sing Language letters as input using MediaPipe Hands",
    image: "Handle.png",
    link: "https://github.com/Torin99/Handle",
  },
  {
    key: 2,
    title: "Personal Website",
    description:
      "Personal portfolio website made in ReactJS. The Site your on right now!",
    image: "Website.png",
    link: "https://github.com/Torin99/My-Website",
  },
  {
    key: 3,
    title: "Working On It...",
    description: "Hey no peeking! This one's not done yet. Check back soon!",
    image: "ComingSoon.png",
    link: "https://github.com/Torin99",
  },
];

export { links, projects };
