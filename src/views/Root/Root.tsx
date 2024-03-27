import { Outlet } from 'react-router-dom';
import { MainNavigation } from '../../components';
import classes from './Root.module.scss';
import { BudgetsContextProvider } from '../../store/BudgetContext';

const RootLayout = () => {
  return (
    <div className={classes.layout}>
      <MainNavigation />
      <BudgetsContextProvider>
        <main className={classes.main}>
          <Outlet />
        </main>
      </BudgetsContextProvider>
    </div>
  );
};

export default RootLayout;
