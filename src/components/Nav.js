import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Nav() {
    return(
        <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand>
    <Link to="/">
    <img
      src={require("../logo.jpg")}
      className="mr-3 h-6 sm:h-9"
      alt="Logo"
    />
    </Link>
    <Link to="/">
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Expensesify
    </span>
    </Link>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Navbar.Link
      active={true}
    >
      <Link to="/">
      Home
      </Link>
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Logout
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
    );
}