import React, { useState } from "react";

const ComponenteApi = () => {

    const [nombres, setNombres] = useState([]);
    

    const getAll = () => { 
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
            .then(response => response.json())
            .then(response => setNombres(response.results))   
    }

    return (
        <div>
            <button className="btn btn-danger" onClick={getAll}>Fetch Pokemon</button>
            <ul>
                {nombres.map((pokemon, index) => {
                    return <li key={index}>{pokemon.name}</li>
                })}
            </ul>
        </div>

        
    )
}

export default ComponenteApi;
