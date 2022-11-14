import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoReorderFourSharp } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon, selectId, selectImage, selectName } from "../app/pokemonSlice";
import Header from "./Header";

function ImageSection() {
    const dispatch = useDispatch();
    const pokeId = useSelector(selectId);
    const pokeName = useSelector(selectName);
    const pokeImage = useSelector(selectImage);
    return (
        <div className="flex-1 p-2">
            <div className="bg-white max-w-sm mx-10 border-2 border-black rounded-bl-3xl">
                <div className="grid grid-cols-2 p-1 mx-8">
                    <div className="grid justify-end">
                        <div className="w-4 h-4 border border-black rounded-full bg-red-600 mr-1"></div>
                    </div>
                    <div className="grid justify-start">
                        <div className="w-4 h-4 border border-black rounded-full bg-red-600 ml-1"></div>
                    </div>
                </div>
                <div className="bg-gray-300 border-2 border-black rounded-lg mx-8">
                    <img src={pokeImage} alt="" />
                </div>
                <div className="grid grid-cols-2 p-1 mx-8">
                    <div className="grid justify-items-start ml-1.5">
                        <div className="bg-red-600 w-8 border-2 border-black rounded-full"></div>
                    </div>
                    <div className="grid justify-items-end mr-1.5">
                        <IoReorderFourSharp size={32} />
                    </div>
                </div>
            </div>
            <div className="bg-green-300 mx-16 p-1 rounded-lg border-2 border-black text-center my-2">{pokeName}</div>
            <div className="grid grid-cols-2 mx-10">
                <div className="grid justify-center">
                    <div className="bg-gray-600 w-16 h-16 border-2 border-black rounded-full"></div>
                </div>
                <div className="grid">
                    <div className="grid grid-cols-2 items-center">
                        <div
                            className="grid justify-center p-2 bg-gray-800 hover:bg-gray-700 rounded-l-lg h-fit"
                            onClick={() => dispatch(fetchPokemon(pokeId - 1))}
                        >
                            <FaArrowLeft size={20} color="gray" />
                        </div>
                        <div
                            className="grid justify-center p-2 bg-gray-800 hover:bg-gray-700 rounded-r-lg h-fit"
                            onClick={() => dispatch(fetchPokemon(pokeId + 1))}
                        >
                            <FaArrowRight size={20} color="gray" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageSection;
