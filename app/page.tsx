import { get } from "../services/requests";
import { Layout } from "@ui/Layout";
import { Grid } from "@ui/Grid";
import { GridItem } from "@ui/GridItem";

const Page = async () => {
  const pokemons = await getPokemonList();
  return (
    <Layout>
      <Grid>
        {pokemons?.results
          ? pokemons.results.map((pokemon) => (
              <GridItem key={pokemon.id} size={3}>
                {pokemon.name}
              </GridItem>
            ))
          : null}
      </Grid>
    </Layout>
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
