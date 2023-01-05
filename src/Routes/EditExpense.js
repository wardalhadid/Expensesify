import EditExpenseForm from "../components/EditExpenseForm";
import Nav from "../components/Nav";

export default function EditExpense (expenses) {
    return (
        <div>
         <Nav />
         <EditExpenseForm />
        </div>
    );
}