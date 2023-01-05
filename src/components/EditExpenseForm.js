import { Label, TextInput, Button, Select } from "flowbite-react";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function EditExpenseForm(params) {
  const location = useLocation();
  const selectedid = useParams().id;
  const expenses = location.state?.expenses;
  
  
  let exp = {
    name: '', amount: 0, category: '', date: ''
  }
  for (const key in expenses) {
        if (expenses[parseInt(key)].id == selectedid){
              exp.name =  expenses[parseInt(key)].name
              exp.amount = expenses[parseInt(key)].amount
              exp.category = expenses[parseInt(key)].category
              exp.date = expenses[parseInt(key)].date
        }
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
      placeholder={exp.name}
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
      placeholder={exp.amount}
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
      value={exp.date}
      onChange={(e) => e.target.value}
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
      defaultValue={exp.category}
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
    <Button
      color="success"
      size="xl"
        >
      Update
    </Button>
    <Button
      color="failure"
      size="xl"
      >
      Delete
    </Button>
  </div>
</div>
    );
} 