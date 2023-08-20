import React from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import ColorModeSwitch from "./components/ColorModeSwitch";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bg="pink.300">
          Aside
        </GridItem>
      </Show>
      <GridItem area={"main"} bg="green.300">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
