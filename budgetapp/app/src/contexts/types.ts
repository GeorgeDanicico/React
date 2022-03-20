export type BudgetType = {
    id: string,
    name: string,
    maxValue: number,
}

export type ExpenseType = {
    id: string,
    budgetId: string,
    amount: number,
    description: string,
}

export interface ContextInterface {
  budgets: BudgetType[],
  expenses: ExpenseType[],
  getAmountOfBudget: (budgetId: string) => number,
  getBudgetExpenses: (budgetId: string) => ExpenseType[],
  addBudget: (name: string, maxValue: number) => void,
  addExpense: (budgetId: string, amount: number, description: string) => void,
  deleteBudget: (budgetId: string) => void,
  deleteExpense: (expenseId: string) => void,
};

export interface UserContextInterface {
  userId: string,
  userName: string,
  isLogged: boolean,
}