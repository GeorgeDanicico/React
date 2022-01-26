import React, { useContext } from "react";
import { v4 as uuidV4} from 'uuid';
import useLocalStorage from '../hooks/useLocalStorage';

type BudgetType = {
    id: string,
    name: string,
    maxValue: number,
}

type ExpenseType = {
    id: string,
    budgetId: string,
    amount: number,
    description: string,
}

export const UNCATEGORIZED_BUDGET_ID = 'Uncategorized';

interface ContextInterface {
    budgets: BudgetType[],
    expenses: ExpenseType[],
    getAmountOfBudget: (budgetId: string) => number,
    getBudgetExpenses: (budgetId: string) => void,
    addBudget: (name: string, maxValue: number) => void,
    addExpense: (bugdetId: string, amount: number, description: string) => void,
    deleteBudget: (budgetId: string) => void,
    deleteExpense: (expenseId: string) => void,
};

const BudgetsContext = React.createContext({} as ContextInterface);

export const useBudgets = () => {
    return useContext(BudgetsContext);
};

export const BudgetsProvider: (children: any) => any = ({ children }) => {
    const budgetsArray: BudgetType[] = [];
    const expensesArray: ExpenseType[] = [];

    const [budgets, setBudgets] = useLocalStorage<BudgetType>('bugets', budgetsArray);
    const [expenses, setExpenses] = useLocalStorage<ExpenseType>('expenses', expensesArray);
    
    const getAmountOfBudget: (budgetId: string) => number = (budgetId) => {
        return expenses.reduce((total, expense) => {
            if (expense.budgetId === budgetId) {
                return total + expense.amount;
            } else return 0;
        }, 0);
    }

    const getBudgetExpenses: (budgetId: string) => any[] = (budgetId) => {
        return expenses.filter(expense => expense.budgetId = budgetId);
    }

    const addExpense: (budgetId: string, amount: number, description: string) => void = (budgetId, amount, description) => {
        const newExpense: ExpenseType = {
            id: uuidV4(),
            budgetId,
            amount,
            description,
        };
        setExpenses(prevExpenses => {
            return [...prevExpenses, newExpense];
        });
    }

    const addBudget: (name: string, maxValue: number) => void = (name, maxValue) => {

        const newBudget: BudgetType = {
            id: uuidV4(),
            name,
            maxValue,
        };
        setBudgets(prevBudgets => {
            return [...prevBudgets, newBudget];
        });
    }

    const deleteBudget: (budgetId: string) => void = (budgetId) => {
        setBudgets(prevBudgets =>
            prevBudgets.filter(budget => budget.id !== budgetId));
    }

    const deleteExpense: (expenseId: string) => void = (expenseId) => {
        setExpenses(prevExpenses =>
            prevExpenses.filter(expense => expense.id !== expenseId))
    }

    return (
        <BudgetsContext.Provider value={{
            budgets, 
            expenses,
            getAmountOfBudget,
            getBudgetExpenses,
            addExpense,
            addBudget,
            deleteBudget,
            deleteExpense,
        }}>
            {children }
        </BudgetsContext.Provider>
    )
}
