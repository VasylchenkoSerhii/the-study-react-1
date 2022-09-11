import StatsItem from "./StatsItem/StatsItem";

const StatsList = ({ data }) => {
    return (
        <ul className="stat-list"><StatsItem data={data} /></ul>
    );
};

export default StatsList;