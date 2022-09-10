import Profile from "./Profile/Profile";
import user from "../data/user"

export const App = () => {
  return (
    <div>
      <Profile dataUser={user}/>
    </div>
  );
};
