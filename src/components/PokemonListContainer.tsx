import { useEffect, useState } from "react";
import CardList from "./CardList";

interface IPokemon {
  name: string;
  url: string;
}
interface Props {
  handleCounter: () => void;
}

export default function PokemonListContainer({ handleCounter }: Props) {
  const [pokemon, setPokemon] = useState<IPokemon[]>([]);
  const [err, setErr] = useState<Error | null>(null);

  const shuffle = () => {
    console.log("shuffle");

    const newData = [...pokemon];

    for (let i = newData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newData[i], newData[j]] = [newData[j], newData[i]];
    }
    setPokemon(newData);
  };
  useEffect(() => {
    const connect = async () => {
      try {
        const data = await fetch(
          "https://pokeapi.co/api/v2/pokemon?offset=12&limit=12"
        );
        if (!data.ok) {
          throw new Error("no connection to Server");
        }
        const poke = await data.json();
        setPokemon(poke.results);
      } catch (error) {
        setErr(err as Error);
      }
    };
    connect();
  }, []); //UseEffect hatte kein dependency Array und hat somit jedes mal deine shuffel funktion überschrieben.
  return (
    <CardList data={pokemon} shuffle={shuffle} handleCounter={handleCounter} />
  );
}
