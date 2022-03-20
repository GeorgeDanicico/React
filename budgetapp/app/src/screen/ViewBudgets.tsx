import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Button, Stack } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import BudgetCard from '../components/BudgetCard/BudgetCard';
import AddBudgetModal from '../components/AddBudgetModal/AddBudgetModal';
import AddExpenseModal from '../components/AddExpenseModal/AddExpenseModal';
import ViewExpensesModal from '../components/ViewExpensesModal/ViewExpensesModal';
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from '../contexts/BudgetContexts';
import UncategorizedBudgetCard from '../components/UncategorizedBudgetCard/UncategorizedBudgetCard';
import TotalBudgetCard from '../components/TotalBudgetCard/TotalBudgetCard';

const apiCall = async () => {
  const res = await fetch('https://swapi.dev/api/planets/');
  return res.json();
};

const ViewBudgets: React.FC = () => {
  const [showAddButtonModal, setShowAddButtonModal] = useState<boolean>(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState<boolean>(false);
  const [addExpensesModalBudgetId, setAddExpensesModalBudgetId] = useState<string>('');
  const [showViewExpensesModal, setShowViewExpensesModal] = useState<string | null>(null);
  const budgetContext = useBudgets();

  const { data, status } = useQuery("planets", apiCall)

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
            {budgetContext.budgets.map(budget => {
              console.log(budgetContext.getBudgetExpenses(budget.id), budget.id);
              const amount = budgetContext.getBudgetExpenses(budget.id).reduce((total, expense) => total + expense.amount, 0)
              return (
                <BudgetCard
                  key={budget.id} 
                  name={budget.name} 
                  amount={amount} 
                  maximum={budget.maxValue}
                  onAddExpenseClick={() => { openAddExpenseModal(budget.id); }}
                  onViewExpensesClick={() => { setShowViewExpensesModal(budget.id); }}
                  showButtons
                />
              )
            })}
            <UncategorizedBudgetCard 
              // onAddExpenseClick={() => { openAddExpenseModal(UNCATEGORIZED_BUDGET_ID); }}
              // onViewExpensesClick={() => { setShowViewExpensesModal(UNCATEGORIZED_BUDGET_ID); }}
            />
            <TotalBudgetCard />
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

      <ViewExpensesModal 
        budgetId={showViewExpensesModal}
        handleClose={() => {
          setShowViewExpensesModal(null);
        }}
      />


    </>
  )
}

export default ViewBudgets;
