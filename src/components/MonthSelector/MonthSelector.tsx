import { Button } from '..';
import classes from './MonthSelector.module.scss';

const MONTHS = [
  'Jan',
  'Feb',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

function MonthSelector() {
  return (
    <div className={classes.container}>
      {MONTHS.map((x) => (
        <Button>{x}</Button>
      ))}
    </div>
  );
}

export default MonthSelector;
