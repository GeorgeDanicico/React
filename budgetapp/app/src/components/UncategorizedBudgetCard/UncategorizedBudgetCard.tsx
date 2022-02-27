import React from 'react';
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from '../../contexts/BudgetContexts';
import BudgetCard from '../BudgetCard/BudgetCard';

export const UncategorizedBudgetCard: React.FC = ( props ) => {
  const budgetContext = useBudgets();
  const amount = budgetContext.getBudgetExpenses(UNCATEGORIZED_BUDGET_ID).reduce((total, expense) => total + expense.amount, 0)

  if (amount === 0) return null;

  return (
    <BudgetCard 
      name="Uncategorized" 
      gray 
      amount={amount} 
      showButtons 
      maximum={amount} 
      nomax 
      {...props}
    />
  );
};

export default UncategorizedBudgetCard;
