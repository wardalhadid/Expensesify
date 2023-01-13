import { Sidebar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Side () {
    return (
        <div className="w-fit">
  <Sidebar aria-label="Sidebar with content separator example">
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Sidebar.Item as={Link} to="add-expense">
          Add Expense
        </Sidebar.Item>
        <Sidebar.Item as={Link} to="expenses">
         Expenses
        </Sidebar.Item>
       </Sidebar.ItemGroup>
     </Sidebar.Items>
   </Sidebar>
</div>
    );
}