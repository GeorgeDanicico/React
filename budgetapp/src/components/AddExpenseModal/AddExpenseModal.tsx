import React, { useRef } from 'react';
import { Button, Form, Modal } from 'react-bootstrap'
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from '../../contexts/BudgetContexts';
import { IProps } from './types';

export const AddExpenseModal: React.FC<IProps> = ({ show, handleClose, defaultBudgetId}) => {
    const descriptionRef = useRef<HTMLInputElement>(null);
    const amountRef = useRef<HTMLInputElement>(null);
    const budgetIdRef = useRef<HTMLSelectElement>(null);
    const budgetContext = useBudgets();
    
    const handleSubmit: (e: any) => void = (e) => {
        e.preventDefault();
        const description = (descriptionRef.current as HTMLInputElement).value;
        const amount = parseFloat((amountRef.current as HTMLInputElement).value);
        const budgetId = (budgetIdRef.current as HTMLSelectElement).value;

        budgetContext.addExpense(budgetId, amount, description);
        handleClose();
    }
  
    return (
      <Modal show={show} onHide={handleClose}>
          <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title>New Expense</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control ref={descriptionRef} type="text" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="amount">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control ref={amountRef} type="number" required min={0} step={0.01} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="budgetId">
                    <Form.Label>Budget</Form.Label>
                    <Form.Select 
                        defaultValue={defaultBudgetId}
                        ref={budgetIdRef} 
                        required 
                    >
                        <option id={UNCATEGORIZED_BUDGET_ID}>
                            Uncategorized
                        </option>
                        {budgetContext.budgets.map(budget => (
                            <option key={budget.id} value={budget.id}>
                                {budget.name}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>


                <div className="d-flex justify-content-end">
                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                </div>
            </Modal.Body>
          </Form>
      </Modal>
  );
};

export default AddExpenseModal;