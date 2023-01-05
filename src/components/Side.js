import { Sidebar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Side () {
    return (
        <div className="w-fit">
  <Sidebar aria-label="Sidebar with content separator example">
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Sidebar.Item>
         <Link to="add-expense">
          Add Expense
         </Link>
        </Sidebar.Item>
        <Sidebar.Item>
         <Link to="expenses">
         Expenses
         </Link>
        </Sidebar.Item>
        <Sidebar.Item>
          <Link to="receipt-hub">
          Receipts Hub
          </Link>
        </Sidebar.Item>
       </Sidebar.ItemGroup>
     </Sidebar.Items>
   </Sidebar>
</div>
    );
}