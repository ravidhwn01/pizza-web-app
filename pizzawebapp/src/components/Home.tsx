import { Grid } from "@chakra-ui/react";
import Navbar from "./Navbar";
import PizzaBox from "./PizzaBox";

function Home() {
  return (
    <>
      <Navbar />
      <Grid templateColumns="repeat(auto-fill ,minMax(250px,300px))" gap={12}>
        <PizzaBox />
        <PizzaBox />
        <PizzaBox />
        <PizzaBox />
        <PizzaBox />
        <PizzaBox />
        <PizzaBox />
      </Grid>
    </>
  );
}

export default Home;
