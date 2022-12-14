import { get } from "../services/requests";
import { Grid } from "@ui/Grid";
import { GridItem } from "@ui/GridItem";
import { Container } from "@ui/Container";
import { Card } from "@ui/Card";

import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const pokemons = await getPokemonList();

  return (
    <Container className="my-8">
      <Grid space={3}>
        {pokemons?.results
          ? pokemons.results.map((pokemon) => (
              <GridItem key={pokemon.id} size={2}>
                <Link href={`/${pokemon.id}`}>
                  <Card className="rounded p-4 relative">
                    <span className="absolute left-4 top-2">{pokemon.id}.</span>
                    <Image src={pokemon.img} alt={pokemon.name} width={180} height={180} className="mx-auto saturate-[1.25]" />
                  </Card>
                </Link>
              </GridItem>
            ))
          : null}
      </Grid>
    </Container>
  );
};

async function getPokemonList() {
  try {
    const pokemonList = await get<PokemonListResult>({ uri: "pokemon" });
    const pokemonListData = await Promise.all(pokemonList.results.map(async (pokemon) => await get<PokemonResult>({ url: pokemon.url })));

    if (pokemonListData.length)
      return {
        ...pokemonList,
        results: pokemonListData.map((pokemon) => ({
          id: pokemon.id,
          name: pokemon.species.name,
          img: pokemon.sprites.other["official-artwork"]?.front_default ?? "",
        })),
      };
  } catch (err) {
    console.log(err);
  }
}

export type PokemonListResult = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};

type PokemonResult = {
  id: number;
  species: {
    name: string;
    url: string;
  };
  sprites: {
    other: {
      "official-artwork"?: {
        front_default: string;
      };
    };
  };
};

export default Page;
