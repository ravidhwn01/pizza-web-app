import { Button, Flex, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Flex direction={"row"} justifyContent="center" p={12} mx="10px">
        <Link to="/">Home</Link>
        <Spacer />
        <Link to="/carts">Cart</Link>
        <Spacer />
        <Link to="/allorders">All Orders</Link>
        <Spacer />
        <Link to="/signup">Sign up</Link>
        <Spacer />
        <Link to="/login">Login</Link>
      </Flex>
    </>
  );
}

export default Navbar;
