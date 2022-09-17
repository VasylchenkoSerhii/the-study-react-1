import { shape, number } from 'prop-types';
import { Box } from 'components/Box/Box';
import { Label, Uantity } from './ProfileStats.styled';

const ProfileStats = ({ stats }) => {
    let markup = [];
    for (let key in stats) {
        markup.push(
            <Box
                as='li'
                key={key}
                flexBasis={120}
                p={3}
                border='normal'
                borderColor='border'
            >
                <Label>{ key }</Label>
                <Uantity>{stats[key]}</Uantity>
            </Box>) 
    };
    return (
        <Box
            as='ul'
            display='flex'
            justifyContent='space-around'
            bg='backgroundStats'
        >
            {markup}
        </Box>
    );
};

ProfileStats.propTypes = {
    stats: shape({
        followers: number.isRequired,
        views: number.isRequired,
        likes: number.isRequired,
    }).isRequired,
};

export default ProfileStats;