import { useState } from "react";
import { TextField } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

export default function Async() {
  const [input, setInput] = useState("");

  const fetchPokemon = async () => {
    try {
      const request = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
      const result = await request.json();
      return result.name;
    } catch (err) {
      console.log(err);
    }
  };

  const { isLoading, data } = useQuery({
    queryKey: ["get-pokemon"],
    queryFn: fetchPokemon,
  });

  return (
    <>
      {isLoading ? "Loading..." : data}
      <TextField value={input} onChange={(e) => setInput(e.target.value)} />
    </>
  );
}


