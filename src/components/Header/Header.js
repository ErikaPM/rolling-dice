import './Header.css';

function Header() {
  function myFunction (onClick) {
    let result = 0;
    if (true){
      result = Math.round(Math.random());
    }
    return result
  }
  return (
      <header className="App-header">
        <div className="main-container">
        <h1 className="main-title">Lanza-dados</h1> 
          <div className="main-info">
            <h2 className="main-title">Selecciona el número de jugadores:</h2> 
            <button type="button" className="btn btn-info player-button">Un jugador</button>
            <button type="button" className="btn btn-info player-button">Multijugador</button>
            <div className="faces-info info-height">Registra los jugadores:
              <input type="text" placeholder="Nombre" className = "select select-name"/>
            </div> 
            <div className="faces-info info-height">Cuántas caras tendrá tu dado?
              <select name="select" className = "select">
                <option value="value1" selected>6</option>
                <option value="value2" >8</option>
                <option value="value3">10</option>
                <option value="value3">12</option>
              </select>
            </div> 
            <div className="dice-info">Cuántos dados necesitas?
              <select name="select" className = "select">
                <option value="value1">1</option>
                <option value="value2" selected>2</option>
                <option value="value3">3</option>
              </select>
            </div> 
            <div className="faces-info info-height">Ahora lánzalos:
              <button className="ready-button btn btn-primary" onClick="myFunction()">Juega</button> 
            </div> 
          </div>
        </div> 

        
      </header>
  );
}

export default Header;
