import StatsItem from "./StatsItem/StatsItem";
import { Box } from "components/Box/Box";

const StatsList = ({ data }) => {
    return (
        <Box as='ul' display='flex'><StatsItem data={data} /></Box>
    );
};

export default StatsList;