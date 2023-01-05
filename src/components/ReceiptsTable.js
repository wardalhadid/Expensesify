import { Table } from "flowbite-react";

export default function ReceiptsTable () {
    return(
        <div  className="my-8 w-10/12 mx-auto">
<Table striped={true}>
  <Table.Head>
    <Table.HeadCell>
      Date
    </Table.HeadCell>
    <Table.HeadCell>
      Name
    </Table.HeadCell>
    <Table.HeadCell>
      Link
    </Table.HeadCell>
    <Table.HeadCell>
      <span className="sr-only">
        Delete
      </span>
    </Table.HeadCell>
  </Table.Head>
  <Table.Body className="divide-y">
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        12/25/2022
      </Table.Cell>
      <Table.Cell>
        Dad's Present
      </Table.Cell>
      <Table.Cell>
       <a 
        href="#"
        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
         Laptop
        </a>
      </Table.Cell>
      <Table.Cell>
        <a
          href="/tables"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Delete
        </a>
      </Table.Cell>
    </Table.Row>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        01/01/2023
      </Table.Cell>
      <Table.Cell>
        Gas
      </Table.Cell>
      <Table.Cell>
       <a 
        href="#"
        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
         Exxon
        </a>
      </Table.Cell>
      <Table.Cell>
        <a
          href="/tables"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Delete
        </a>
      </Table.Cell>
    </Table.Row>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        11/06/2022
      </Table.Cell>
      <Table.Cell>
        Laptop
      </Table.Cell>
      <Table.Cell>
       <a 
        href="#"
        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
         MacBook
        </a>
      </Table.Cell>
      <Table.Cell>
        <a
          href="/tables"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Delete
        </a>
      </Table.Cell>
    </Table.Row>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        12/17/2022
      </Table.Cell>
      <Table.Cell>
        Phone Bill
      </Table.Cell>
      <Table.Cell>
       <a 
        href="#"
        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
         T-Mobile
        </a>
      </Table.Cell>
      <Table.Cell>
        <a
          href="/tables"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Delete
        </a>
      </Table.Cell>
    </Table.Row>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        12/10/2022
      </Table.Cell>
      <Table.Cell>
        Energy Bill
      </Table.Cell>
      <Table.Cell>
       <a 
        href="#"
        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
         Dominion
        </a>
      </Table.Cell>
      <Table.Cell>
        <a
          href="/tables"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Delete
        </a>
      </Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
</div>
    );
}