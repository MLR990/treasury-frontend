import { Outlet } from 'react-router-dom';
import { MainNavigation } from '../../components';
import classes from './Root.module.scss';

const RootLayout = () => {
  return (
    <div className={classes.layout}>
      <MainNavigation />
      <main className={classes.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
