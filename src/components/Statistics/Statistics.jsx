import StatsList from "./StatsList/StatsList";
import { string } from 'prop-types';

const Statistic = ({ title, stats }) => {
    return (
            <section className="statistics">
                {title && <h2 className="title">Upload stats</h2>}
                <StatsList data={stats} />
            </section>
    );
};


Statistic.propTypes = {
    title: string,
};

export default Statistic;