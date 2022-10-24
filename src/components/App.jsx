
import User from "./User/User";
import user from "../Json/user.json";

import Data from "./Data/Data";
import data from "../Json/data.json";

import FriendList from "./FriendList/FriendList";
import friends from "../Json/friends.json";

import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "../Json/transactions.json";

function App() {
  return (
    <div>
      <User
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Data title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
