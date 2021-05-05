import React from 'react';

const ThrowButton = () => {  
    function handleClick(e) {
        e.preventDefault();
        function randomNumbers(min, max) {
            let result = 0;
            if (true) {
              result = Math.round(Math.random() * (max - min) + min);
            }
            return result
          }
        console.log(randomNumbers(1, 6));
    }
    return (
      <div className="faces-info info-height">Ahora lánzalos:
        <button className="ready-button btn btn-primary" id="ready-button" onClick={handleClick} >Juega</button>
        <p id="demo"></p> 
      </div>
    )
}

export default ThrowButton;