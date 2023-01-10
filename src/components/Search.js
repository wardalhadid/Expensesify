import { Label, TextInput, Dropdown } from "flowbite-react"
import { useDispatch } from "react-redux";
import { filter } from "../slices/filterExpensesReducer";
import { sortBy } from "../slices/sortExpensesReducer";


export default function Search () {
    const dispatch = useDispatch()
    const handleOnSearchChange = (e) =>{
      dispatch(filter(e.target.value))
    }
    const onNameClick = () => {
      dispatch(sortBy('name'))
    }
    const onDateClick = () => {
      dispatch(sortBy('date'))
    }
    const onAmountClick = () => {
      dispatch(sortBy('amount'))
    }
    
    return (
    <div className="flex flex-col gap-4 w-10/12 mx-auto mt-12">
  <Label htmlFor="search" className="flex justify-between">
    Search Expense
    <Dropdown
  label="Sort by"
  inline={true}
>
  <Dropdown.Item onClick={onDateClick}>
    Date
  </Dropdown.Item>
  <Dropdown.Item onClick={onAmountClick}>
    Amount
  </Dropdown.Item>
</Dropdown>
  </Label>
  <TextInput
    type="text"
    id="search"
    placeholder="Search an expense"
    onChange={handleOnSearchChange}
  />
</div>
)}