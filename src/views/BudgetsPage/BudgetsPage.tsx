import { useContext } from 'react';
import { MonthSelector } from '../../components';
import BudgetsContext from '../../store/BudgetContext';

function BudgetsPage() {
  const budgetsCtx = useContext(BudgetsContext);
  const currentMonth = budgetsCtx.month;
  return (
    <main>
      <MonthSelector />
      This is hte budgets page
      {currentMonth}
    </main>
  );
}

export default BudgetsPage;
