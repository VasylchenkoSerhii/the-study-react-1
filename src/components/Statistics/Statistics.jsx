import StatsList from "./StatsList/StatsList";
import { string, shape, arrayOf } from 'prop-types';
import { Box } from "components/Box/Box";
import { Title } from "./Statics.styled";

const Statistic = ({ title, stats }) => {
    return (
        <Box
            as='section'
            pt='5'
            pb='5'
        >
            <Box
                maxWidth={500}
                p={4}
                ml='auto'
                mr='auto'
                fontSize='m'
                color='text'
                textAlign='center'
            >
                {title && <Title>Upload stats</Title>}
                <StatsList data={stats} />
            </Box>
        </Box>
    );
};


Statistic.propTypes = {
    title: string,
    stats: arrayOf(shape({
        id: string.isRequired,
        label: string.isRequired,
        percentage: string.isRequired
    })).isRequired
};

export default Statistic;