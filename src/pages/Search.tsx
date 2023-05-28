import React, { useEffect } from 'react';
import Wrapper from "../sections/Wrapper";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getInitialPokemonData } from "../app/reducers/getInitialPokemonData";
import { getPokemonsData } from '../app/reducers/getPokemonsData';
import PokemonCardGrid from '../components/PokemonCardGrid';

function Search() {
    const dispatch = useAppDispatch();
    const { allPokemon, randomPokemons } = useAppSelector(({ pokemon }) => pokemon);

    useEffect(() => {
        dispatch(getInitialPokemonData());
    }, [dispatch]);

    useEffect(() => {
        if (allPokemon) {
            const clonedPokemon = [...allPokemon];
            const randomPokemonsId = clonedPokemon
                .sort(() => Math.random() - Math.random())
                .slice(0, 20)
            dispatch(getPokemonsData(randomPokemonsId))
        }
    }, [allPokemon, dispatch])

    return (
        <div className='search'>
            <input type='text' name='' id='' />
            <PokemonCardGrid pokemons={randomPokemons!} />
        </div>
    )
}

export default Wrapper(Search);