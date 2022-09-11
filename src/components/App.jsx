import Profile from "./Profile/Profile";
import Statistic from "./Statistics/Statistics";
import FriendList from "./FriendList/FrendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import user from "../data/user";
import statisticData from "../data/data";
import friends from "../data/friends";
import transactions from "../data/transactions"

export const App = () => {
  return (
    <div>
      <Profile dataUser={user}/>
      <Statistic title={'Upload stats'} stats={statisticData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </div>
  );
};
