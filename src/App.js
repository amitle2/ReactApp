import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'שכירות',
    amount: 3000,
    date: new Date(2022, 0, 10),
  },
  {
    id: 'e2',
    title: 'שכירות',
    amount: 3000,
    date: new Date(2022, 1, 10),
  },
  {
    id: 'e3',
    title: 'ארנונה',
    amount: 500,
    date: new Date(2022, 1, 1),
  },
  {
    id: 'e4',
    title: 'חשמל',
    amount: 800,
    date: new Date(2022, 1, 8),
  },
  {
    id: 'e5',
    title: 'מים',
    amount: 220.5,
    date: new Date(2022, 1, 13),
  },
  {
    id: 'e6',
    title: 'שכירות',
    amount: 3000,
    date: new Date(2022, 2, 10),
  },
  {
    id: 'e7',
    title: 'שכירות',
    amount: 3000,
    date: new Date(2022, 3, 10),
  },
  {
    id: 'e8',
    title: 'ארנונה',
    amount: 500,
    date: new Date(2022, 3, 1),
  },
  {
    id: 'e9',
    title: 'חשמל',
    amount: 740.5,
    date: new Date(2022, 3, 12),
  },
  {
    id: 'e10',
    title: 'מים',
    amount: 212.53,
    date: new Date(2022, 3, 15),
  },
  {
    id: 'e11',
    title: 'שכירות',
    amount: 3000,
    date: new Date(2022, 4, 10),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
      setExpenses((prevExpenses) => {
        return [expense, ...expenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;