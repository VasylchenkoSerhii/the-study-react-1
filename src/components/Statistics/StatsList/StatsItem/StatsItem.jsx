import { string, arrayOf, shape, number } from "prop-types";
import { Box } from "components/Box/Box";
import { Label } from "./StatsItem.styled";

const StatsItem = ({ data }) => {
   return data.map(({ id, label, percentage }) => (
        <Box as='li' p={3} flexBasis={84} key={id}>
            <Label>{label}</Label>
            <span className="percentage">{percentage}</span>
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