import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

function CartBox() {
  return (
    <>
      <Card maxW="sm">
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            height="200px"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Pizza item </Heading>

            <Text color="blue.600" fontSize="2xl">
              $150
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button>Buy now</Button>
            <Button>Delete</Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
}

export default CartBox;
