import React from 'react';
import { Button,  Modal, Stack } from 'react-bootstrap'
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from '../../contexts/BudgetContexts';
import { currencyFormater } from '../../utils';
import { IProps } from './types';

export const ViewExpensesModal: React.FC<IProps> = ({ budgetId, handleClose}) => {
    const {
        getBudgetExpenses, budgets, deleteBudget, deleteExpense, 
    } = useBudgets();

    const expenses = budgetId !== null ? getBudgetExpenses(budgetId) : [];
    const budget = UNCATEGORIZED_BUDGET_ID === budgetId ? {
        name: "Uncategorized", id: UNCATEGORIZED_BUDGET_ID,
    } 
        : budgets.find(budget => budget.id === budgetId);
  
    const handleDeleteBudget = () => {
        if (budgetId !== null) {
            deleteBudget(budgetId);
            handleClose();
        }
    }
    
    return (
      <Modal show={budgetId !== null} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                <Stack direction="horizontal" gap={2}>
                    <div>Expenses - {budget?.name}</div>
                    {budgetId !== UNCATEGORIZED_BUDGET_ID && (
                        <Button onClick={handleDeleteBudget} variant="outline-danger">Delete</Button>
                    )}
                </Stack>
            </Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Stack direction="vertical" gap={3}>
                {expenses.map(expense => (
                    <Stack direction="horizontal" gap={2} key={expense.id}>
                        <div className="me-auto fs-4">{expense.description}</div>
                        <div className="fs-5">{currencyFormater.format(expense.amount)}</div>
                        <Button 
                            size="sm" 
                            variant="outline-danger"
                            onClick={() => { deleteExpense(expense.id)}}
                        >
                            &times;
                        </Button>
                    </Stack>
                ))}
            </Stack>
        </Modal.Body>
      </Modal>
  );
};

export default ViewExpensesModal;