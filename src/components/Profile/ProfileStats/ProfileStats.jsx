import { shape, number } from 'prop-types';

const ProfileStats = ({ stats }) => {
    let markup = [];
    for (let key in stats) {
        markup.push(
                    <li key={key}>
                        <span className="label">{ key }</span>
                        <span className="quantity">{stats[key]}</span>
                    </li>) 
    };
    return (
        <ul className="stats">{markup}</ul>
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