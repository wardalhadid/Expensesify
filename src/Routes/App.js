import Nav from '../components/Nav';
import { ExpensesTable } from '../Routes/Expenses'; 
import Side from '../components/Side';
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { importFromDB } from "../slices/expensesReducer";

function App() {
  const dispatch = useDispatch();
  useEffect( () => {
    axios.get('http://localhost:8000/api/expenses')
      .then(response => response.data)
      .then(data => data.forEach(expense => dispatch(importFromDB(expense))))
      .catch(error => console.error(error))
  });
  return (
    <div className="App">
      <div>
      <Nav />
      </div>
     <div className='flex'>
     <Side />
     <div className='w-4/5'>
      <ExpensesTable />
     </div>
     </div>
    </div>
  );
}

export default App
