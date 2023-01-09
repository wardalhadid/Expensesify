import { Label, TextInput } from "flowbite-react"
import { useDispatch } from "react-redux";
import { filter } from "../features/filterExpensesReducer";

export default function Search () {
    const dispatch = useDispatch()
    const handleOnSearchChange = (e) =>{
        dispatch(filter(e.target.value))
    } 
    return (
    <div className="flex flex-col gap-4 w-10/12 mx-auto mt-12">
  <Label htmlFor="search">
    Search Expense
  </Label>
  <TextInput
    type="text"
    id="search"
    placeholder="Search an expense"
    onChange={handleOnSearchChange}
  />
</div>
)}