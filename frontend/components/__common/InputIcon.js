import { FaUserAlt, FaLock } from "react-icons/fa";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";

export const InputIcon = ({ icon }) => {
  //console.log(icon);
  switch (icon) {
    case "FaUserAlt":
      return <FaUserAlt color="gray.300" />;
    case "FaLock":
      return <FaLock color="gray.300" />;
    case "PhoneIcon":
      return <PhoneIcon color="gray.300" />;
    default:
      return <FaUserAlt color="gray.300" />;
  }
};
