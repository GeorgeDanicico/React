import React, { useState, useContext } from "react";
import { v4 as uuidV4} from 'uuid';

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

interface ContextInterface {
    budgets: BudgetType[],
    expenses: ExpenseType[],
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
    const [budgets, setBudgets] = useState<BudgetType[]>([]);
    const [expenses, setExpenses] = useState<ExpenseType[]>([]);
    
    const getBudgetExpenses: (budgetId: string) => ExpenseType[] = (budgetId) => {
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
