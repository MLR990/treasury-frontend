import { useContext } from 'react';
import { Button } from '..';
import classes from './MonthSelector.module.scss';
import BudgetsContext from '../../store/BudgetContext';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function MonthSelector() {
  const budgetsCtx = useContext(BudgetsContext);
  function handleSetMonth(month) {
    console.log(month);
    budgetsCtx.setCurrentMonth(month);
  }

  return (
    <div className={classes.container}>
      {MONTHS.map((x) => (
        <Button onClick={() => handleSetMonth(x)}>{x}</Button>
      ))}
    </div>
  );
}

export default MonthSelector;
