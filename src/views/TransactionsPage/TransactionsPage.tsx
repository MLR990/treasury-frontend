import TransactionItem from '../../components/TransactionItem/TransactionItem';
import classes from './TransactionPage.module.scss';

const TRANSACTION_DATA = [
  {
    id: 1,
    name: 'Student Loans',
    vendor: 'SoFi',
    amount: 270.19,
    date: '11 Mar 2024 00:00:00 GMT',
    budgetCategory: 'Education',
  },
  {
    id: 2,
    name: 'Groceries',
    vendor: "Trader Joe's",
    amount: 123.33,
    date: '15 Mar 2024 00:00:00',
    budgetCategory: 'Food',
  },
  {
    id: 3,
    name: 'Books',
    vendor: 'River Road Books',
    amount: 34.65,
    date: '20 Mar 2024 00:00:00',
    budgetCategory: 'Shopping',
  },
  {
    id: 4,
    name: 'Nail polish',
    vendor: 'Target',
    amount: 9.99,
    date: '24 Mar 2024 00:00:00',
    budgetCategory: 'Personal Items',
  },
];
const TransactionsPage = () => {
  return (
    <>
      <ul className={classes.container}>
        {TRANSACTION_DATA.map((x) => (
          <TransactionItem transaction={x} key={x.id} />
        ))}
      </ul>
    </>
  );
};
export default TransactionsPage;
