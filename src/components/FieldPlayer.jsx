import React from 'react';

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
            <button type="button" className="btn btn-info player-button" onClick={handleClick1}>Un jugador</button>
            <button type="button" className="btn btn-info player-button" onClick={handleClick1}>Multijugador</button>
            <div className="faces-info info-height"> Registra los jugadores:
                <input type="text" placeholder="Nombre" className = "select select-name"/>
            </div> 
        </div>
    )
};

export default FieldPlayer;