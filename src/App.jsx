import { useEffect, useState } from "react";
import ImageSection from "./components/ImageSection";
import InfoSection from "./components/InfoSection";

import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon, selectId, selectStatus } from "./app/pokemonSlice";

function App() {
    const dispatch = useDispatch();
    const pokeId = useSelector(selectId);
    const status = useSelector(selectStatus);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchPokemon(pokeId));
        }
    }, [fetchPokemon, dispatch]);

    return (
        <div className="container max-w-4xl mx-auto h-screen flex items-center">
            <div className="flex-1 flex-row border-2 border-black bg-red-500">
                <ImageSection />
                <InfoSection />
            </div>
        </div>
    );
}

export default App;
