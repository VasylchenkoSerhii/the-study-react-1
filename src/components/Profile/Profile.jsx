import ProfileStats from './ProfileStats/ProfileStats';
import { string, shape } from 'prop-types';
import { number } from 'prop-types';
import { Box } from 'components/Box/Box';
import { Avatar, Name, Tag, Location } from './Profile.styled';

const Profile = ({ name, tag, location, avatar, stats }) => {
    return (
        <Box mb={5} pt={3} as='section'>
            <Box
                maxWidth={399}
                mr='auto'
                ml='auto'
                textAlign='center'
                fontSize='m'
                color='text'
            >
            <div className="description">
                <Avatar
                src={avatar}
                alt="User avatar"
                width="250"
                height="300"
                />
                <Name>{name}</Name>
                    <Tag>@{tag}</Tag>
                <Location>{location}</Location>
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