import React, { useState, useEffect } from "react";
import useGames from "../hooks/useGames";
import { Text } from "@chakra-ui/react";

export const GameGrid = () => {
  // useGames: custom hooks to fetch games data from api
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};
