import '../assets/styles/components/Header.css';
import { Link } from 'react-router-dom';

function Info() {
  return (
    <>
        <div className="main-info main-container">
            <div className="faces-info info-height">Cuántas caras tendrá tu dado?
              <select name="select" className = "select">
                <option value="value1" value>6</option>
                <option value="value2" >8</option>
                <option value="value3">10</option>
                <option value="value3">12</option>
              </select>
            </div> 
            <div className="dice-info">Cuántos dados necesitas?
              <select name="select" className = "select">
                <option value="value1" value>1</option>
                <option value="value2" >2</option>
                <option value="value3">3</option>
              </select>
            </div> 
            <Link to = '/play'>
            <button className="btn btn-primary ready-button">Inicia partida</button>
            </Link>
        </div>
    </> 
  );
}

export default Info;