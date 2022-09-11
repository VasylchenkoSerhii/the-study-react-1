import { string, number, shape, bool, arrayOf } from 'prop-types';

const FriendListItem = ({ friends }) => {
    return (
        friends.map(({ id, avatar, name, isOnline }) => (
            <li key={id} className="item">
                <span data-status={isOnline} className="status"></span>
                <img className="avatar" src={avatar} alt="User avatar" width="48" />
                <p className="name">{name}</p>
            </li>
        ))
    )
};

FriendListItem.propTypes = {
    friends: arrayOf(shape({
        id: number.isRequired,
        avatar: string.isRequired,
        name: string.isRequired,
        isOnline: bool.isRequired,
    })).isRequired,
};

export default FriendListItem;