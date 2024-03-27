import { createContext, useReducer } from 'react';

const BudgetsContext = createContext({
  year: 2024,
  month: '',
  setCurrentMonth: (month) => {},
});

function budgetsReducer(state, action) {
  if (action.type === 'SET_MONTH') {
    return { ...state, month: action.month };
  }

  return state;
}

export function BudgetsContextProvider({ children }) {
  const [budgets, dispatchBudgetsAction] = useReducer(budgetsReducer, {
    year: 2024,
    month: '',
  });
  function setCurrentMonth(month) {
    dispatchBudgetsAction({ type: 'SET_MONTH', month });
  }

  const budgetsContext = {
    year: budgets.year,
    month: budgets.month,
    setCurrentMonth,
  };

  return (
    <BudgetsContext.Provider value={budgetsContext}>
      {children}
    </BudgetsContext.Provider>
  );
}

export default BudgetsContext;
