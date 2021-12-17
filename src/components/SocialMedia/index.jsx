import { AiFillLinkedin, AiFillGithub, AiFillBell } from "react-icons/ai";

import SocialMediaItem from "./SocialMediaItem";
import "./index.css";

const listOfSocialMedia = [
  {
    Icon: AiFillLinkedin,
    text: "Linkedin",
    type: "linkedin",
    href: "https://www.linkedin.com/in/mikhail-dziarkach-a487128a/",
  },
  {
    Icon: AiFillGithub,
    text: "GitHub",
    type: "github",
    href: "https://github.com/Mikhail1992",
  },
  {
    Icon: AiFillBell,
    text: "CV",
    type: "cv",
    href: "https://docs.google.com/document/d/1VB6wA2yxALEBjDOLLt9-wME-PtmEYJBF/edit?usp=sharing&ouid=116789553942220676642&rtpof=true&sd=true",
  },
];

const SocialMedia = () => {
  return (
    <ul className="social-media">
      {listOfSocialMedia.map(({ Icon, href, text, type }) => (
        <li className="social-media__item">
          <SocialMediaItem text={text} href={href} type={type}>
            <Icon />
          </SocialMediaItem>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
