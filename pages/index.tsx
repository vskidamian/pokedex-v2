import type { GetStaticProps, NextPage } from 'next'
import { get } from '../services/requests';

const PokemonList: NextPage = ({pokemon}) => {
  console.log(pokemon)
  return (
    <div>
      {JSON.stringify(pokemon)}
    </div>
  )
}

export async function getStaticProps() {
  const res = await get({url: 'pokemon'});

  return {
    props: {
      pokemon: res,
    },
  };
}


export default PokemonList
