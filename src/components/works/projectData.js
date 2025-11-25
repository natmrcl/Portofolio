import jdih from "../../assets/jdih.png";
import game from "../../assets/gamedev.png";
import todo from "../../assets/todo.png";
import petro2 from "../../assets/petro2.png";
import petro3 from "../../assets/petro3.png";
import petro4 from "../../assets/petro4.png";
import game2 from "../../assets/game2.png";
import dsa from "../../assets/dsa.png";
import webarts1 from "../../assets/porto1.png";
import webarts2 from "../../assets/porto2.png";

const projects = [
  {
    title: "Forest Hunter",
    description:
      "This game was developed using Unity and the C# language. Forest Hunter is a platformer and third person shooter game where the main character is a hunter and this hunter will try to find a way out of the forest filled with wild animals.",
    tools: ["C#", "Unity"],
    projectLink: "#",
    liveSiteLink: "#",
    images: [game],
  },
  {
    title: "Art Studio Website",
    description:
      "A website designed to showcase an artist’s collection of paintings and visual works.",
    tools: ["ReactJS"],
    projectLink: "#",
    liveSiteLink: "#",
    images: [webarts1, webarts2],
  },
  {
    title: "Project Control Management Website",
    description:
      "In general, the project control management website is a website used to facilitate EPC Routine Investment Section employees in tracking project documents.",
    tools: ["ReactJS", "Material UI"],
    projectLink: "#",
    liveSiteLink: "#",
    images: [petro2, petro3, petro4],
  },
  {
    title: "Mobile Application JDIH Kementerian Perhubungan",
    description:
      "The application is a mobile version of the Ministry of Transportation's JDIH website. This application was developed using React Native by using the API provided by the Ministry of Transportation. This application is a search application for regulations issued by the Ministry of Transportation.",
    tools: ["React Native"],
    projectLink: "#",
    liveSiteLink: "#",
    images: [jdih],
  },
  {
    title: "To-Do List",
    description:
      "The application is a simple To-Do List application developed using HTML, CSS, and JavaScript.",
    tools: ["HTML", "CSS", "JavaScript"],
    projectLink: "#",
    liveSiteLink: "#",
    images: [todo],
  },
  {
    title: "Galasin Warrior",
    description:
      "This game was developed with Unity and C# language. Galasin Warrior is a game inspired by one of the traditional Indonesian games called gobak sodor/galah asin. This game development applies AI pytorch to train ML-Agent in unity.",
    tools: ["C#", "Unity"],
    projectLink: "#",
    liveSiteLink: "#",
    images: [game2],
  },
  {
    title: "DSA Indonesia",
    description:
      "This project focuses on designing the UI/UX for the DSA Indonesia website to support interaction, information sharing, and access to Development Studies resources. The design follows Lean UX methods and includes several testing phases.",
    tools: ["Figma", "UI/UX"],
    projectLink: "#",
    liveSiteLink: "#",
    images: [dsa],
  },
];

export default projects;
