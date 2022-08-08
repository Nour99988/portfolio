import { Briefcase, ChatDotsFill, HouseFill, ListTask, PersonFill } from "react-bootstrap-icons";

const colors = ["#ec1839", "#fa5b0f", "#37b182", "#1584b4", "#f021b2"];
const namePages = [
  { name: "Home", icon: <Briefcase /> },
  { name: "About", icon: <ChatDotsFill /> },
  { name: "Skills", icon: <HouseFill /> },
  { name: "Portfolio", icon: <ListTask /> },
  { name: "Contact", icon: <PersonFill /> },
];

export { colors, namePages };
