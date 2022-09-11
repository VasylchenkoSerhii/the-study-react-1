import { string, shape, arrayOf, } from 'prop-types';

const TransactionHistoryItem = ({ items }) => {
    return (
        items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>))
    );
};

TransactionHistoryItem.propTypes = {
    items: arrayOf(shape({
        id: string.isRequired,
        type: string.isRequired,
        amount: string.isRequired,
        currency: string.isRequired,
    })).isRequired,
};

export default TransactionHistoryItem;