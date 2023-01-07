import ReceiptsTable from '../components/ReceiptsTable';
import Nav from '../components/Nav';
import { ExpensesTable } from '../Routes/Expenses'; 
import Side from '../components/Side';

function App() {
  return (
    <div className="App">
      <div>
      <Nav />
      </div>
     <div className='flex'>
     <Side />
     <div className='w-4/5'>
      <ExpensesTable />
      <ReceiptsTable />
     </div>
     </div>
    
    </div>
  );
}

export default App
