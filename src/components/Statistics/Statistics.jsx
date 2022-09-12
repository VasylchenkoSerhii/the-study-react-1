import StatsList from "./StatsList/StatsList";
import { string } from 'prop-types';
import css from './Statistics.module.css'

const Statistic = ({ title, stats }) => {
    return (
            <section className={css.section}>
                <div className={css.wrapper}>
                    {title && <h2 className={css.title}>Upload stats</h2>}
                    <StatsList data={stats} />
                </div>
            </section>
    );
};


Statistic.propTypes = {
    title: string,
};

export default Statistic;