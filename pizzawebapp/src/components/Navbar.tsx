import { Flex, Link, Spacer } from "@chakra-ui/react";

function Navbar() {
  return (
    <>
      <Flex direction={"row"} justifyContent="center" p={12} mx="10px">
        <Link href="/">Home</Link>
        <Spacer />
        <Link href="/carts">Cart</Link>
        <Spacer />
        <Link href="/allorders">All Orders</Link>
      </Flex>
    </>
  );
}

export default Navbar;
