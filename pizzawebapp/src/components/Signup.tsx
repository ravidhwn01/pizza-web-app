import { Flex, Input } from "@chakra-ui/react";
import Navbar from "./Navbar";

function SignUp() {
  return (
    <>
      <Navbar />
      <form>
        <Flex direction="column" gap="8">
          <Input
            autoComplete=""
            type="text"
            placeholder="Enter Your name"
            name="name"
          />
          <Input type="email" placeholder="example@gmail.com" name="email" />
          <Input type="password" placeholder="password" name="password" />
        </Flex>
      </form>
    </>
  );
}

export default SignUp;
