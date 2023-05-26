import { createAsyncThunk } from "@reduxjs/toolkit";
import { generatedPokemonType, genericPokemonType } from "../../utils/types";
import axios from "axios";
import { defaultImages, images } from "../../utils/pokemonImage";
import { pokemonTypes } from "../../utils/pokemonTypes";

export const getPokemonsData = createAsyncThunk(
    "pokemon/randomPokemon",
    async (pokemons: genericPokemonType[]) => {
        try {
            const pokemonsData: generatedPokemonType[] = [];
            for await (const pokemon of pokemons) {
                const {
                    data,
                }: {
                    data: {
                        id: number;
                        types: { type: genericPokemonType }[];
                    };
                } = await axios.get(pokemon.url);
            }
            //@ts-expect-error
            const types = data.types.map(
                ({ type: { name } }: { type: { name: string } }) => ({
                    //@ts-expect-error
                    [name]: pokemonTypes[name],
                })
            );
            //@ts-expect-error
            let image: string = images[data.id];
            if (!image) {
                //@ts-expect-error
                image = defaultImages[data.id];
            }

            if (image) {
                pokemonsData.push({
                    //@ts-expect-error
                    name: pokemon.name,
                    //@ts-expect-error
                    id: data.id,
                    image,
                    types,
                });
            }
        } catch (err) { }
    }
);