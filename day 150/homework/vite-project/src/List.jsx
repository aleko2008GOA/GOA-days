import React, { memo } from "react";

function List({ items }) {
    console.log('Rendering SavedList!');
    return (
        <ul>
            {items.map((val, i) => (
                <li key={val}>{val}</li>
            ))}
        </ul>
    );
}

const SavedList = memo(List);

export default SavedList;