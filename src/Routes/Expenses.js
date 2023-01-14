import { Table } from "flowbite-react";
import { Link, useParams } from "react-router-dom";
import Nav from "../components/Nav";
import Search from "../components/Search";
import { useSelector} from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Expenses () {
  return(
    <div>
      <Nav />
      <Search />
      <ExpensesTable /> 
    </div>
  );
}

export function ExpensesTable () {
  const [expenses, setExpenses] = useState([]);
  const user = useParams();
  const sortBy = useSelector((state) => state.sortExpenses.sort)
  const filterExpenses= useSelector((state) => state.filterExpenses.filter.toLowerCase());
  useEffect(() => {
      axios.post('http://localhost:8000/api/expenses', {user})
      .then(response => response.data)
      .then(data => data.forEach(expense => setExpenses(ex => [...ex, expense])))
      .catch(error => console.error(error))
  }, [user]);
  
  return(
    <div className="w-10/12 mx-auto my-8">
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell>
            Name
           </Table.HeadCell>
          <Table.HeadCell>
            Amount
          </Table.HeadCell>
          <Table.HeadCell>
            Category
          </Table.HeadCell>
          <Table.HeadCell>
            Date
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">
              Edit
            </span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {expenses.filter(expense => expense.name.toLowerCase().includes(filterExpenses)).sort((a, b) => (a[sortBy] > b[sortBy]) ? -1 : 1).map(({name, date, category, amount, _id}) => (
             <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={_id} >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {name}
                </Table.Cell>
                <Table.Cell>
                  {amount}
                </Table.Cell>
                <Table.Cell>
                 {category}
                </Table.Cell>
                <Table.Cell>
                 {date}
                </Table.Cell>
                <Table.Cell>
                  <Link
                    to={`/${user.user}/expenses/${_id}`}
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    state={{expenses}}
                  >
                    Edit
                  </Link>
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </div>
  );
}