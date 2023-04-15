import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdWorkHistory } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
import { RiFileUserLine } from "react-icons/ri";
import { TbFileCertificate } from "react-icons/tb";
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

export default links;
