import React from 'react';
import '../assets/styles/components/FieldPlayer.css';

//crear contenedor
const FieldPlayer = () => {
    function handleClick1(e) {
        e.preventDefault();
        return (
            console.log('bu')
        )    
    }
    return(
        <div className = "field-player">
            <h2 className="main-title">Selecciona el número de jugadores:</h2> 
            <button type="button" className="btn btn-info player-button" onClick={handleClick1}>1</button>
            <button type="button" className="btn btn-info player-button" onClick={handleClick1}>2</button>
            <button type="button" className="btn btn-info player-button" onClick={handleClick1}>3</button>
            <button type="button" className="btn btn-info player-button" onClick={handleClick1}>4</button>
        </div>
    )
};

export default FieldPlayer;