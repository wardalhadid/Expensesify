import {Label, TextInput, Button} from 'flowbite-react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../slices/userReducer';
import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Login () {
  const dispatch = useDispatch()
  const [username, setUsername] = useState()
  const handleInput = (e) => {
    const input = e.target.value
    setUsername(input)
  }
  const handleClick = () =>{
    dispatch(setUser(username))
    axios.post("http://localhost:8000/api/login", {username: username})
    .then(res => console.log(res))
    .catch(err => window.alert(err));
  }
    return(
        <div className='flex justify-center items-center h-screen'>
          <form className="flex flex-col gap-4">
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="username"
        value="Enter your username or create one "
      />
    </div>
    <TextInput
      id="username"
      type="text"
      required={true}
      onChange={handleInput}
    />
  </div>
  <Link to={`/${username}`} state={username}>
    <Button type="submit" onClick={handleClick}>
     Login
    </Button>
  </Link>
  
</form>  
        </div>
    );
}