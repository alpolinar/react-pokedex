import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectHeight, selectStats, selectTypes, selectWeight } from "../app/pokemonSlice";
import Element from "./Element";

function InfoSection(props) {
    const pokeTypes = useSelector(selectTypes);
    const pokeStats = useSelector(selectStats);
    const pokeHeight = useSelector(selectHeight);
    const pokeWeight = useSelector(selectWeight);
    return (
        <div className="flex-1 p-2">
            <div className="bg-gray-300 border-2 border-black rounded-lg p-2 mx-10 h-auto my-2">
                <div className="grid grid-cols-2">
                    <div>Height: {pokeHeight}cm</div>
                    <div>Weight: {pokeWeight}kg</div>
                </div>
            </div>
            <div className="bg-gray-300 border-2 border-black rounded-lg p-2 mx-10 h-auto my-2">
                <div className="grid grid-cols-2">
                    {pokeStats.map((stats, index) => (
                        <div key={index}>
                            {stats.stat.name}: {stats.base_stat}
                        </div>
                    ))}
                </div>
            </div>
            <div className="mx-10">
                <p className="font-bold my-1">Type{pokeTypes.length > 1 ? "s" : ""}</p>
                <div className="flex flex-row flex-wrap">
                    {pokeTypes.map((types, index) => (
                        <Element key={index} type={types.type.name} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default InfoSection;
