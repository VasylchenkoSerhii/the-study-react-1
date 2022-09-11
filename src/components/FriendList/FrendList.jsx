import FrendListItem from "./FriendListItem/FrendListItem";

const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list"><FrendListItem friends={friends}/></ul>
    );
};

export default FriendList;