import TransactionHistoryItem from "./TransactionHistoryItem/TransactionHistoryItem";
import { string, shape, arrayOf, } from 'prop-types';
import { Box } from "components/Box/Box";
import { Table } from "./TransactionHistory.styled";

const TransactionHistory = ({ items }) => {
    return (
        <Box as='section' pt='5' pb='5'>
            <Table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                <tbody>
                    <TransactionHistoryItem items={items} />
                </tbody>    
            </Table>
        </Box>
    );
};

TransactionHistory.propTypes = {
    items: arrayOf(shape({
        id: string.isRequired,
        type: string.isRequired,
        amount: string.isRequired,
        currency: string.isRequired,
    })).isRequired,
};

export default TransactionHistory;