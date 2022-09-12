import { shape, number } from 'prop-types';
import css from './ProfileStats.module.css';

const ProfileStats = ({ stats }) => {
    let markup = [];
    for (let key in stats) {
        markup.push(
                    <li key={key}>
                        <span className={css.label}>{ key }</span>
                        <span className={css.quantity}>{stats[key]}</span>
                    </li>) 
    };
    return (
        <ul className={`${css.stats} ${css.list}`}>{markup}</ul>
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