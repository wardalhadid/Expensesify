import { Label, TextInput, Button, Select } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { remove, edit } from '../features/expensesReducer';
import { useState } from "react";

export default function EditExpenseForm() {
  const dispatch = useDispatch();
  const selectedId = useParams().id;
  const expenses = useSelector(state => state.expenses);
  const expense = expenses.filter(expense => expense.id === selectedId)[0];
  const [edited, setEdited] = useState({id:selectedId});
  const onNameChange = (e) => {
    const name = e.target.value;
    setEdited(o => ({...o, name}))
  }
  const onAmountChange = (e) => {
    const amount = e.target.value
    setEdited(o => ({...o, amount: parseInt(amount)}))
  }
  const onDateChange = (e) => {
    const date = e.target.value
    setEdited(o => ({...o, date}))
  }
  const onCategoryChange = (e) => {
    const category = e.target.value
    setEdited(o => ({...o, category}))
  }
  return(
   <div className="flex flex-col gap-4 mx-auto w-10/12">
   <div>
    <div className="mb-2 block">
      <Label
        htmlFor="expense"
        value="Expense"
      />
    </div>
    <TextInput
      id="small"
      type="text"
      sizing="sm"
      placeholder={expense.name}
      onChange={onNameChange}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="amount"
        value={"Amount"}
      />
    </div>
    <TextInput
      id="amount"
      type="currency"
      sizing="sm"
      placeholder={expense.amount}
      onChange={onAmountChange}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="date"
        value="Date"
      />
    </div>
    <TextInput
      id="date"
      type="date"
      sizing="sm"
      onChange={onDateChange}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="category"
        value="Category"
      />
    </div>
    <Select
      id="select"
      placeholder={expense.category}
      onChange={onCategoryChange}
    >
    <option>
      Rent
    </option>
    <option>
      Utilities
    </option>
    <option>
      Transportation
    </option>
    <option>
      Groceries
    </option>
    <option>
      Entertainment
    </option>
    <option>
      Travel
    </option>
    <option>
      Maintenance
    </option>
    <option>
      Food
    </option>
    </Select>
  </div>
  <div className="mx-auto flex gap-6">
  <Link to ="/">
    <Button
      color="success"
      size="xl"
      onClick={() => dispatch(edit(edited))}
        >
      Update
    </Button>
    </Link>
    <Link to ="/">
    <Button
      color="failure"
      size="xl"
      onClick={() => dispatch(remove(selectedId))}
      >
      Delete
    </Button>
    </Link>
    
  </div>
</div>
    );
} 