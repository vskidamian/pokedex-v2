import type { GetStaticProps, NextPage } from "next";
import { get } from "../services/requests";

const PokemonList: NextPage = ({ pokemon }) => {
  console.log(pokemon);
  return <div>{JSON.stringify(pokemon)}</div>;
};

export async function getStaticProps() {
  try {
    const pokemonList = await get({ uri: "pokemon" });
    const pokemonListData = await Promise.all(pokemonList.results.map(async (pokemon) => await get({ url: pokemon.url })));

    return {
      props: {
        pokemon: {
          ...pokemonList,
          results: pokemonListData.map((pokemon) => ({
            id: pokemon.id,
            name: pokemon.species.name,
            img: pokemon.sprites.other["official-artwork"].front_default,
          })),
        },
      },
    };
  } catch (error) {
    console.error(error);
  }
}

export default PokemonList;
