import { Flex, Input } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";

function Login() {
  return (
    <>
      <Navbar />
      <form>
        <Flex direction="column" gap="8">
          <Input type="email" placeholder="example@gmail.com" name="email" />
          <Input type="password" placeholder="password" name="password" />
        </Flex>
      </form>
    </>
  );
}

export default Login;
