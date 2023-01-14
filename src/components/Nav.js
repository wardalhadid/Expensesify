import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"

export default function Nav() {
  const user = useSelector(state => state.user);

    return(
        <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand>
    <img
      src={require("../logo.jpg")}
      className="mr-3 h-6 sm:h-9"
      alt="Logo"
    />
    <span 
    className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
    >
      Expensesify
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
  <Link to={`/${user.user}`}>
      Home
    </Link>
    <Link to="/">
      Logout
    </Link>
  </Navbar.Collapse>
</Navbar>
    );
}