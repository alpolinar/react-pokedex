import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL_BASE = "https://pokeapi.co/api/v2";

export const fetchPokemon = createAsyncThunk("GET_POKEMON", async (query) => {
    try {
        if (query <= 0) query = 905;
        if (query > 905) query = 1;
        const res = await axios.get(`${URL_BASE}/pokemon/${query}`);
        return res.data;
    } catch (error) {
        return error.message;
    }
});

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: {
        id: 1,
        name: "",
        image: "",
        stats: [],
        types: [],
        status: "idle",
        weight: 0,
        height: 0,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemon.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchPokemon.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.id = action.payload.id;
                state.name = action.payload.name.charAt(0).toUpperCase() + action.payload.name.slice(1);
                state.stats = action.payload.stats;
                state.types = action.payload.types;
                state.height = action.payload.height * 10;
                state.weight = action.payload.weight / 10;
                let imgId = `00${action.payload.id}`.slice(-3);
                state.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imgId}.png`;
            })
            .addCase(fetchPokemon.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { GET_POKEMON } = pokemonSlice.actions;

export const selectId = (state) => state.pokemon.id;
export const selectName = (state) => state.pokemon.name;
export const selectImage = (state) => state.pokemon.image;
export const selectTypes = (state) => state.pokemon.types;
export const selectStatus = (state) => state.pokemon.status;
export const selectStats = (state) => state.pokemon.stats;
export const selectHeight = (state) => state.pokemon.height;
export const selectWeight = (state) => state.pokemon.weight;

export default pokemonSlice.reducer;
