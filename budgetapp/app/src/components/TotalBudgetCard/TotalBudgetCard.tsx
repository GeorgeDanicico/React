import React from 'react';
import { useBudgets } from '../../contexts/BudgetContexts';
import BudgetCard from '../BudgetCard/BudgetCard';

export const TotalBudgetCard: React.FC = () => {
  const { budgets, getBudgetExpenses } = useBudgets();
  const maxValue = budgets.reduce((total, budget) => total + budget.maxValue, 0);
  const amount = budgets.reduce((totalBudget, budget) => totalBudget +
    getBudgetExpenses(budget.id).reduce((totalExpenses, expense) => totalExpenses + expense.amount, 0), 0)

    if (maxValue === 0) return null;

  return (
    <BudgetCard name="Total" gray amount={amount} showButtons={false} maximum={maxValue} />
  );
};

export default TotalBudgetCard;
