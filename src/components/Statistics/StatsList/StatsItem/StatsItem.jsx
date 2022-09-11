import { string, arrayOf, shape, number } from 'prop-types';

const StatsItem = ({ data }) => {
   return data.map(({ id, label, percentage }) => (
        <li key={id} className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
        </li>
    ));
};

StatsItem.propTypes = {
    data: arrayOf(shape({
        id: string.isRequired,
        label: string.isRequired,
        percentage: number.isRequired, 
    })).isRequired,
};

export default StatsItem;