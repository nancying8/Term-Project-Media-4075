import { LuFigma } from "react-icons/lu";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";
import { MdNavigateNext } from "react-icons/md";

const ProjectInfo = [
  {
    id: "1",
    title: "Blenz Coffee",
    subtitle: "Poster Redesign",
    image: "/assets/Blenz/blenz-mockup-1.jpg",
    skills: "Graphic Design",
    tools: <DiPhotoshop />, 
    description: "The new seasonal beverages",
    links: "/blenz",
    arrow: <MdNavigateNext />,
  },
  {
    id: "2",
    title: "Violet Cosmetic ",
    subtitle: "Business Card Design",
    image: "/assets/Violet/violetBCard.jpg",
    skills: "Graphic Design",
    tools: <DiPhotoshop />, 
    description: "A small cosmetics business",
    links: "/violet",
    arrow: <MdNavigateNext />,
  },
  {
    id: "3",
    title: "CFestival",
    subtitle: "Poster Design ",
    image: "/assets/CFestival/cfestival-Poster.jpg",
    skills: "Graphic Design",
    tools: <DiIllustrator />,
    description: "Summer Social Event Promo",
    links: "/cfestival",
    arrow: <MdNavigateNext />,
  },
  {
    id: "5",
    title: "GVFB",
    subtitle: "CTA Banners",
    image: "/assets/GVFB/gvfb-poster.jpg",
    skills: "Graphic Design",
    tools: <DiIllustrator  />,
    description: "A non-profit organization",
    links: "/gvfb",
    arrow: <MdNavigateNext />,
  },
  {
    id: "6",
    title: "\JobZz",
    subtitle: "Logo Design",
    image: "/assets/Jobzz/jobzz-poster.jpg",
    skills: "Graphic Design",
    tools: <LuFigma />,
    description: "A Job and Employment Website ",
    links: "/jobzz",
    arrow: <MdNavigateNext />,
  },
  {
    id: "4",
    title: "Kinemi's Kitchen",
    subtitle: "Website Redesign",
    image: "/assets/Kinemi/kinemi-mockup2.jpg",
    skills: "UI / UX",
    tools: <LuFigma />,
    description: "A Japanese-Italian Restaurant",
    links: "/Kinemi",
    arrow: <MdNavigateNext />,
  },
];

export default ProjectInfo;
