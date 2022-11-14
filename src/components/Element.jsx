import React from "react";
import { types } from "../app/constants";

function Element(props) {
    const type = props.type.charAt(0).toUpperCase() + props.type.slice(1);
    return <div className={`rounded-lg w-28 text-center px-5 h-min p-1 mr-1 ${types[props.type]}`}>{type}</div>;
}

export default Element;
