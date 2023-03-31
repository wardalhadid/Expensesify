import { Label, TextInput, Button, Select } from "flowbite-react";
import {v4 as uuid} from 'uuid';
import { useState } from "react";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { add } from '../slices/expensesReducer';
import { useParams } from "react-router-dom";
import axios from "axios";

export default function AddExpenseForm() {
  const dispatch = useDispatch();
  const user= useParams();
  const [addedExpense, setAddedExpense] = useState({id: uuid()});
  const handleOnNameChange = (e) => {
    let addedName = {name: e.target.value}
    setAddedExpense((addExpense) => ({...addExpense, ...addedName}))
  }
  const handleOnAmountChange = (e) => {
    let addedAmount = {amount: parseInt(e.target.value)}
    setAddedExpense((addExpense) => ({...addExpense, ...addedAmount}))
  }
  const handleOnDateChange = (e) => {
    let addedDate = {date: e.target.value}
    setAddedExpense((addExpense) => ({...addExpense, ...addedDate}))
  }
  const handleOnCategoryChange = (e) => {
    let addedCategory = {category: e.target.value}
    setAddedExpense((addExpense) => ({...addExpense, ...addedCategory}))
  }

  const handleOnSubmit = () => {
    const DBAddExpense = addedExpense
     axios.post('http://localhost:8080/api/add-expense', {...DBAddExpense, ...user})
     .then(res => console.log(res))
    .catch(err => window.alert(err));
    dispatch(add(addedExpense));
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
      onChange={handleOnNameChange}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="amount"
        value="Amount"
      />
    </div>
    <TextInput
      id="amount"
      type="currency"
      sizing="sm"
      placeholder="$"
      onChange={handleOnAmountChange}
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
      onChange={handleOnDateChange}
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
      onChange={handleOnCategoryChange}
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
  <div className="mx-auto">
  <Link to={`/${user.user}`}>
    <Button
      color="success"
      size="xl"
      pill={true}
      onClick={handleOnSubmit}
      >
        Submit
    </Button>
    </Link>
  </div>
</div>
    );
} 