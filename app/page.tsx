import { get } from "../services/requests";

const Page = async () => {
  const pokemon = await getPokemonList();
  return <div>{JSON.stringify(pokemon)}</div>;
};

async function getPokemonList() {
  try {
    const pokemonList = await get<PokemonListResult>({ uri: "pokemon" });
    const pokemonListData = await Promise.all(pokemonList.results.map(async (pokemon) => await get<PokemonResult>({ url: pokemon.url })));

    if (pokemonListData.length)
      return {
        props: {
          pokemon: {
            ...pokemonList,
            results: pokemonListData.map((pokemon) => ({
              id: pokemon.id,
              name: pokemon.species.name,
              img: pokemon.sprites.other["official-artwork"]?.front_default ?? "",
            })),
          },
        },
      };
  } catch (err) {
    console.log(err);
    return { notFound: true };
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
