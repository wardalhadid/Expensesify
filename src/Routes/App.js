import Nav from '../components/Nav';
import { ExpensesTable } from '../Routes/Expenses'; 
import Side from '../components/Side';

function App() { 
  return (
    <div className="App">
      <div>
       <Nav />
      </div>
     <div className='flex flex-col lg:flex-row'>
      <Side />
      <div className='w-screen lg:w-4/5'>
        <ExpensesTable />
      </div>
     </div>
    </div>
    );
}

export default App
