import React from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"header" "main"`,
        lg: `"header header" "nav main"`,
      }}
    >
      <GridItem area={"header"} bg="orange.300">
        Header
      </GridItem>
      <Show above="lg">
        <GridItem area={"nav"} bg="pink.300">
          Nav
        </GridItem>
      </Show>
      <GridItem area={"main"} bg="green.300">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
