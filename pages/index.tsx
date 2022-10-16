import type { GetStaticProps, NextPage } from "next";
import { get } from "../services/requests";

type PokemonListType = {
  id: number;
  name: string;
  img: string;
}[];

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

const PokemonList: NextPage<{ pokemon: PokemonListType }> = ({ pokemon }) => {
  return <div>{JSON.stringify(pokemon)}</div>;
};

export async function getStaticProps() {
  try {
    const pokemonList = await get<PokemonListResult>({ uri: "pokemon" });
    const pokemonListData = await Promise.all(pokemonList.results.map(async (pokemon) => await get<PokemonResult>({ url: pokemon.url })));

    if (pokemonListData)
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

export default PokemonList;
