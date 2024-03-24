import classes from './DateDisplay.module.scss';

function DateDisplay({ date }) {
  const dateTime = new Date(date);
  const year = dateTime.getFullYear();
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const dayOfWeek = weekdays[dateTime.getDay()];

  const months = [
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

  const month = months[dateTime.getMonth()];
  const day = dateTime.getDate();

  return (
    <div className={classes.container}>
      <div className={classes.month}>{month} </div>
      <div className={classes.day}>{day} </div>
      <div>{year}</div>
    </div>
  );
}

export default DateDisplay;
