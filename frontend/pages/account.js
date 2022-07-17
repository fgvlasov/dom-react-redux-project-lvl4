import { useMatchContext } from "../context/match";
import AppicPageAccount from "../components/matches/MatchAppic/PageAccount";
import CasprPageAccount from "../components/matches/MatchCaspr/PageAccount";

export default function Account() {
  const [match, setMatch] = useMatchContext();
  switch (match) {
    case "_01_appic":
      return <AppicPageAccount match="_01_appic" />;
    case "_02_caspr":
      return <CasprPageAccount match="_02_caspr" />;
    default:
      return <AppicPageAccount match="_01_appic" />;
  }
}
