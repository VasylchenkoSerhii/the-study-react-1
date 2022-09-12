import StatsItem from "./StatsItem/StatsItem";
import css from "./StatsList.module.css";

const StatsList = ({ data }) => {
    return (
        <ul className={`${css.statList} ${css.list}`}><StatsItem data={data} /></ul>
    );
};

export default StatsList;