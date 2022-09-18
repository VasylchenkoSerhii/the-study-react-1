import { string, arrayOf, shape, number } from "prop-types";
import { Box } from "components/Box/Box";
import { Label } from "./StatsItem.styled";
import { getRandomHexColor } from "utils/randomHexColor/randomHexsColor";

const StatsItem = ({ data }) => {
   return data.map(({ id, label, percentage }) => (
        <Box as='li' color='black' p={3} flexBasis={84} bg={getRandomHexColor()} key={id}>
            <Label>{label}</Label>
            <span>{percentage}%</span>
        </Box>
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