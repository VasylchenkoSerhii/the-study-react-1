import Profile from "./Profile/Profile";
import Statistic from "./Statistics/Statistics";
import user from "../data/user"
import statisticData from "../data/data"

export const App = () => {
  return (
    <div>
      <Profile dataUser={user}/>
      <Statistic title={'Upload stats'} stats={statisticData}/>
    </div>
  );
};
