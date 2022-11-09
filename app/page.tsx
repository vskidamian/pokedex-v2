import { get } from "../services/requests";
import { Grid } from "@ui/Grid";
import { GridItem } from "@ui/GridItem";
import { Container } from "@ui/Container";
import { Card } from "@ui/Card";
import Image from "next/image";

const Page = async () => {
  const pokemons = await getPokemonList();
  return (
    <Container className="mt-8">
      <Grid space={2}>
        {pokemons?.results
          ? pokemons.results.map((pokemon) => (
              <GridItem key={pokemon.id} size={2}>
                <Card className="rounded p-4">
                  <Image src={pokemon.img} alt={pokemon.name} width={256} height={256} className="mx-auto" />
                </Card>
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
