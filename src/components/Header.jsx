import '../assets/styles/components/Header.css';
import ThrowButton from './ThrowButton';
import FieldPlayer from './FieldPlayer'

function Header() {
  return (
      <header className="App-header">
        <div className="main-container">
        <h1 className="main-title">Lanza-dados</h1> 
        <FieldPlayer />
          <div className="main-info">
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
            <ThrowButton />
          </div>
        </div> 
      </header>
  );
}

export default Header;
