import React, { useState } from 'react';
import { Button, Stack } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import BudgetCard from './components/BudgetCard/BudgetCard';
import AddBudgetModal from './components/AddBudgetModal/AddBudgetModal';
import AddExpenseModal from './components/AddExpenseModal/AddExpenseModal';
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from './contexts/BudgetContexts';

const App: React.FC = () => {
  const [showAddButtonModal, setShowAddButtonModal] = useState<boolean>(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState<boolean>(false);
  const [addExpensesModalBudgetId, setAddExpensesModalBudgetId] = useState<string>('');
  const budgetContext = useBudgets();

  const openAddExpenseModal: (budgetId: string) => void = (budgetId) => {
    setAddExpensesModalBudgetId(budgetId);
    setShowAddExpenseModal(true);
  }

  return (
    <>
      <Container className="my-4">
        <Stack direction="horizontal" gap={2} className="mb-4">
          <h1 className="me-auto">Budgets</h1>

          <Button variant="primary" onClick={() => {
        setShowAddButtonModal(prev => !prev)}}>Add Budget</Button>
          <Button 
            variant="outline-primary"
            onClick={() => openAddExpenseModal(UNCATEGORIZED_BUDGET_ID)}
          >
            Add Expense
          </Button>
        </Stack>

        <div style={{
          display:"grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", 
          gap: "1rem",
          alignItems: "flex-start", 
          }}>
            {budgetContext.budgets.map(budget => (
              <BudgetCard
                key={budget.id} 
                name={budget.name} 
                amount={budgetContext.getAmountOfBudget(budget.id)} 
                maximum={budget.maxValue}
                onAddExpenseClick={() => { openAddExpenseModal(budget.id); }}
              />
            ))}
        </div>
      </Container>
      <AddBudgetModal show={showAddButtonModal} handleClose={() => {
        setShowAddButtonModal(prev => !prev);
      }} />

      <AddExpenseModal 
        show={showAddExpenseModal} 
        handleClose={() => {
          setShowAddExpenseModal(prev => !prev);
        }} 
        defaultBudgetId={addExpensesModalBudgetId}
      />
    </>
  )
}


export default App;
