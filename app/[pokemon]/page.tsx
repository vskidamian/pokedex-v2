import { get } from "../../services/requests";
import { Grid } from "@ui/Grid";
import { GridItem } from "@ui/GridItem";
import { Container } from "@ui/Container";
import { Card } from "@ui/Card";
import Image from "next/image";

const Page = async ({ params, searchParams }: { params: { slug: string }; searchParams: { id: string } }) => {
  return <Container className="my-8">test</Container>;
};

async function getPokemonById(id: string) {
  try {
    const pokemonList = await get({ uri: `pokemon/${id}` });
    console.log(pokemonList);

    return pokemonList;
  } catch (err) {
    console.log(err);
  }
}

export type Pokemon = {
  name: string;
  sprites: Record<string, string | null>;
  slot: string[];
  exp: number;
  abilities: string[];
};

export default Page;
