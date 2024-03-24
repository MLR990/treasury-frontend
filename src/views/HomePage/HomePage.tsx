import { Summary } from '../../components';
import classes from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={classes.home}>
      This is the home page!
      <Summary></Summary>
    </div>
  );
};

export default HomePage;
