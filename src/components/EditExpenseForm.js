import { Label, TextInput, Button, Select } from "flowbite-react";
import { useDispatch } from "react-redux";
import { Link, useParams, useLocation } from "react-router-dom";
import { remove, edit } from '../slices/expensesReducer';
import { useState } from "react";
import axios from "axios";

export default function EditExpenseForm() {
  const dispatch = useDispatch();
  const selectedId = useParams().id;
  const user = useParams().user;
  const location = useLocation();
  const expenses = location.state?.expenses;
  const expense = expenses.filter(expense => expense._id === selectedId)[0];
  const [edited, setEdited] = useState(expense);

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
  const handleRemove = () => {
    dispatch(remove(selectedId))
    axios.post('http://localhost:8080/api/delete-expense', {...expense, user: user})
     .then(res => console.log(res))
     .catch(err => window.alert(err));
  }
  const handleUpdate = () => {
    dispatch(edit(expense))
    axios.post('http://localhost:8080/api/update-expense', {...edited, user: user})
     .then(res => console.log(res))
     .catch(err => window.alert(err));
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
      value={(edited.date) ? edited.date : expense.date}
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
      onChange={onCategoryChange}
    >
    <option default>
      {expense.category}
    </option>
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
  <Link to ={`/${user}`}>
    <Button
      color="success"
      size="xl"
      onClick={handleUpdate}
        >
      Update
    </Button>
    </Link>
    <Link to ={`/${user}`}>
    <Button
      color="failure"
      size="xl"
      onClick={handleRemove}
      >
      Delete
    </Button>
    </Link>
    
  </div>
</div>
    );
} 