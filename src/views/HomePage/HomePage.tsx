import { Summary } from '../../components';
import classes from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={classes.home}>
      This is the home page where you can get an overview - current surplus,
      recent transactions, monthly progress, safety net, upcoming bills
    </div>
  );
};

export default HomePage;
