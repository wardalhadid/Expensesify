import { Table } from "flowbite-react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

export default function Expenses () {
    return(
        <div>
          <Nav />
          <ExpensesTable /> 
        </div>
    );
}

export function ExpensesTable (...expenses) {
  const expensesArray = expenses[0].expenses;
  return(
      <div className="w-10/12 mx-auto my-8">
      <Table 
      hoverable={true}
      >
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
  {expensesArray.map(({name, date, category, amount, id}) => (
  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={name} >
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
        to={`/expenses/${id}`}
        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        state={{expenses}}
      >
        Edit
      </Link>
    </Table.Cell>
  </Table.Row>
  ))
  }
</Table.Body>
</Table>
</div>
  );
}