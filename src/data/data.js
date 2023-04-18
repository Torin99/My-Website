import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import handle from "../images/Handle.png";
import website from "../images/Website.png";
import comingSoon from "../images/ComingSoon.png";
import lcs from "../images/LCS.jfif";
import ibm from "../images/IBM.jfif";

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
    image: handle,
    link: "https://github.com/Torin99/Handle",
  },
  {
    key: 2,
    title: "Personal Website",
    description:
      "Personal portfolio website made in ReactJS. The Site you're on right now!",
    image: website,
    link: "https://github.com/Torin99/My-Website",
  },
  {
    key: 3,
    title: "Working On It...",
    description: "Hey no peeking! This one's not done yet. Check back soon!",
    image: comingSoon,
    link: "https://github.com/Torin99",
  },
];
const experience = [
  {
    key: 1,
    position: "Technical Account Associate",
    employer: "IBM Canada",
    type: "Internship",
    duration: "April 2022 - Present",
    description:
      "Assisted TAM's with client accounts using IBM technology while also designing new tools in React and Plotly to simplify the TAM and Seller workflows",
    image: ibm,
  },
  {
    key: 2,
    position: "Event Coordinator",
    employer: "Laurier Computing Society",
    type: "School Club",
    duration: "September 2022 - Present",
    description:
      "Planned, organized, and presented over x events for the WLU's Fossa Club of the Year",
    image: lcs,
  },
];

export { links, projects, experience };
