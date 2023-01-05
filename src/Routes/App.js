import ReceiptsTable from '../components/ReceiptsTable';
import Nav from '../components/Nav';
import { ExpensesTable } from '../Routes/Expenses'; 
import Side from '../components/Side';
import {v4 as uuid } from 'uuid';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const addExpense = location.state?.addExpense;
  console.log(addExpense);
  const [expenses, setExpenses] = useState([]);
  const expensesArray = [
    {name: "Rent",
   amount: 1200,
   category: "Rent",
   date: "2022-01-01",
   id: uuid()
   },
   {name: "Energy",
   amount: 200,
   category: "Utilities",
   date: "2022-01-05",
   id: uuid()
   },
   {name: "Car Payment",
   amount: 550,
   category: "Tranportation",
   date: "2022-01-16",
   id: uuid()
   }
  ];
  useEffect(() => {
    setExpenses([...expenses, ...expensesArray]);
  }, [])
  useEffect(() => {
    if(location.state?.addExpense !== undefined){
        setExpenses(arr => [...arr, addExpense]);
      } 
    }, [addExpense])
  return (
    <div className="App">
      <div>
      <Nav />
      </div>
     <div className='flex'>
     <Side />
     <div className='w-4/5'>
      <ExpensesTable expenses={expenses} />
      <ReceiptsTable />
     </div>
     </div>
    
    </div>
  );
}

export default App;
