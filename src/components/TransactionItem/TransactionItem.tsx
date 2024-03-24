import { DateDisplay } from '..';
import classes from './TransactionItem.module.scss';

function TransactionItem({ transaction }) {
  return (
    <li className={classes.item}>
      <DateDisplay date={transaction.date} />
      <div className={classes.details}>
        <span>{transaction.name}</span>
        <span className={classes.vendor}>{transaction.vendor}</span>
        <span className={classes.budget}>{transaction.budgetCategory}</span>
      </div>
      <div className={classes.amount}>${transaction.amount}</div>
    </li>
  );
}

export default TransactionItem;
