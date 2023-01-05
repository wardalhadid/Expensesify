import { Breadcrumb } from "flowbite-react";
export default function Bread () {
    return(
        <Breadcrumb
  aria-label="Solid background breadcrumb example"
  className="bg-gray-50 py-3 px-5 dark:bg-gray-900"
>
  <Breadcrumb.Item>
    Home
  </Breadcrumb.Item>
  <Breadcrumb.Item href="#">
    Expenses
  </Breadcrumb.Item>
  <Breadcrumb.Item>
    Expense 1
  </Breadcrumb.Item>
</Breadcrumb>
    );
}