import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.scss';

const MainNavigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/transactions'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Transactions
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/budgets'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Budgets
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
