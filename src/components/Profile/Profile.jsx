import ProfileStats from './ProfileStats/ProfileStats';
import { string, shape } from 'prop-types';
import css from './Profile.module.css';
import { number } from 'prop-types';
import { Box } from 'components/Box/Box';

const Profile = ({ name, tag, location, avatar, stats }) => {
    return (
        <Box
            mb={5}
            as='section'
        >
            <Box
                maxWidth={400}
                mr='auto'
                ml='auto'
                textAlign='center'
                fontSize='m'
                color='text'
            >
                <div className="description">
                    <img
                    src={avatar}
                    alt="User avatar"
                    className={css.avatar}
                    width="250"
                    height="300"
                    />
                <p className={css.name}>{name}</p>
                    <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>
           
                <ProfileStats stats={stats}/>
            </Box>
        </Box>
    );
};

Profile.propTypes = {
    name: string.isRequired,
    tag: string.isRequired,
    location: string.isRequired,
    avatar: string.isRequired,
    stats: shape({
        followers: number.isRequired,
        views: number.isRequired,
        likes: number.isRequired,
    }).isRequired,
};

export default Profile;