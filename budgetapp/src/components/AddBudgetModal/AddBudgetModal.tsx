import React, { useRef } from 'react';
import { Button, Form, Modal } from 'react-bootstrap'
import { useBudgets } from '../../contexts/BudgetContexts';
import { IProps } from './types';

export const AddBudgetModal: React.FC<IProps> = ({ show, handleClose}) => {
    const nameRef = useRef<HTMLInputElement>(null);
    const maxRef = useRef<HTMLInputElement>(null);
    const budgetContext = useBudgets();
    
    const handleSubmit: (e: any) => void = (e) => {
        e.preventDefault();
        const name = (nameRef.current as HTMLInputElement).value;
        const maxVal = parseFloat((maxRef.current as HTMLInputElement).value);

        budgetContext.addBudget(name, maxVal);
        handleClose();
    }
  
    return (
      <Modal show={show} onHide={handleClose}>
          <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title>New Budget</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="maximum">
                    <Form.Label>Maximum Spending</Form.Label>
                    <Form.Control ref={maxRef} type="number" required min={0} step={0.01} />
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

export default AddBudgetModal;