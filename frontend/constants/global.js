import {
  FiClock,
  FiFileMinus,
  FiList,
  FiUsers,
  FiBarChart2,
} from "react-icons/fi";
import {
  AiOutlineQuestionCircle,
  AiOutlineLogout,
  AiOutlineSetting,
  AiOutlineProfile,
} from "react-icons/ai";

const navLinks = [
  { title: "Dashbord", path: "/dashbord", icon: FiClock },
  { title: "Your Applications", path: "/applications", icon: FiFileMinus },
  { title: "Interviews", path: "/interviews", icon: FiList },
  { title: "Registered Applicants", path: "/applicants", icon: FiUsers },
  { title: "Rankings", path: "/rankings", icon: FiBarChart2 },
  { title: "Account", path: "/account", icon: AiOutlineSetting },
  { title: "Profile", path: "/profile", icon: AiOutlineProfile },
  { title: "Help", path: "/help", icon: AiOutlineQuestionCircle },
  { title: "Log Out", path: "/logout", icon: AiOutlineLogout },
];
const AccountQuestions1 = [
  { title: "Dashbord", path: "/dashbord", icon: FiClock },
  { title: "Your Applications", path: "/applications", icon: FiFileMinus },
  { title: "Interviews", path: "/interviews", icon: FiList },
  { title: "Registered Applicants", path: "/applicants", icon: FiUsers },
  { title: "Rankings", path: "/rankings", icon: FiBarChart2 },
  { title: "Account", path: "/account", icon: AiOutlineSetting },
  { title: "Profile", path: "/profile", icon: AiOutlineProfile },
  { title: "Help", path: "/help", icon: AiOutlineQuestionCircle },
  { title: "Log Out", path: "/logout", icon: AiOutlineLogout },
];

export { navLinks };
export { AccountQuestions1 };
