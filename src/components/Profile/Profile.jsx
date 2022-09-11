import ProfileStats from './ProfileStats/ProfileStats';
import { string, shape } from 'prop-types';

const Profile = ({ dataUser }) => {
    const { username, tag, location, avatar, stats } = dataUser;
    return (
            <div className="profile">
                <div className="description">
                    <img
                    src={avatar}
                    alt="User avatar"
                    className="avatar"
                    />
                <p className="name">{username}</p>
                    <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
            </div>
            
            <ProfileStats stats={stats} />
            </div>
    );
};

Profile.propTypes = {
    dataUser: shape({
        username: string.isRequired,
        tag: string.isRequired,
        location: string.isRequired,
        avatar: string.isRequired,
    }).isRequired,
};

export default Profile;