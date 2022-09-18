import { string, number, shape, bool, arrayOf } from 'prop-types';
import { Frend, Status, Image } from './FrendListItem.styled';

const FriendListItem = ({ friends }) => {
    return (
        friends.map(({ id, avatar, name, isOnline }) => (
            <Frend key={id}>
                <Status isOnline={isOnline}></Status>
                <Image src={avatar} alt="User avatar" height="48" />
                <p className="name">{name}</p>
            </Frend>
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