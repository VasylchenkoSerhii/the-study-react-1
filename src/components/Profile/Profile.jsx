import ProfileStats from './ProfileStats/ProfileStats';
import { string, shape } from 'prop-types';
import css from './Profile.module.css';

const Profile = ({ dataUser }) => {
    const { username, tag, location, avatar, stats } = dataUser;
    return (
        <section className={css.section}>
            <div className={css.profile}>
                <div className="description">
                    <img
                    src={avatar}
                    alt="User avatar"
                    className={css.avatar}
                    width="250"
                    height="300"
                    />
                <p className={css.name}>{username}</p>
                    <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>
           
            <ProfileStats stats={stats} />
            </div>
        </section>
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