import TransactionHistoryItem from "./TransactionHistoryItem/TransactionHistoryItem";

const TransactionHistory = ({ items }) => {
    return (
        <table className="transaction-history">
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
        </table>
    );
};

export default TransactionHistory;