import React from "react";
import { Card, ProgressBar, Stack, Button } from 'react-bootstrap';
import { IProps } from './types';
import { currencyFormater } from "../../utils";

const BudgetCard: React.FC<IProps> = ({ name, amount, maximum, gray, onAddExpenseClick }) => {

    const classNames = []
    if (amount >= maximum) {
        classNames.push('bg-danger', 'bg-opacity-10');
    } else if (gray) {
        classNames.push('bg-light');
    }

    const getProgressBarVariant: (amount: number, maximum: number) => string = (amount, maximum) => {
        const procent = amount / maximum * 100;
        if (procent < 50) return "primary";
        if (procent < 75) return "warning";
        
        return "danger";
    }

    return (
        <Card className={classNames.join(' ')}>
            <Card.Body>
                <Card.Title className="d-flex justify-content-between align-items-baseline fw-3 mb-3">
                    <div className="me-2">
                        {name}
                    </div>
                    <div className="d-flex align-items-baseline">
                        {currencyFormater.format(amount)}
                        <span className="text-muted fs-6 ms-1">
                            / {currencyFormater.format(maximum)}
                        </span>
                    </div>
                </Card.Title>

                <ProgressBar 
                    className="rounded-pill"
                    variant={getProgressBarVariant(amount, maximum)} 
                    now={100 * (amount / maximum)}
                    min={0}
                />

                <Stack direction="horizontal" gap={2} className="mt-4">
                    <Button 
                        variant="outline-primary" 
                        className="ms-auto"
                        onClick={onAddExpenseClick}
                    >
                        Add Expenses
                    </Button> 
                    <Button variant="outline-secondary">View Expenses</Button>
                </Stack>
            </Card.Body>
        </Card>
    )
}

export default BudgetCard;