import '../assets/styles/components/Play.css';
import {Link} from 'react-router-dom';
import ThrowButton from '../components/ThrowButton'

const Play = () => {
  let result = 0;
  if(result === 1){return createImage(1)}

  function createImage (){
    //crear img
    const imagen = document.createElement('img');
    imagen.style.background = "url('../assets/img-1.png')";
    imagen.className = "dice-box-image"
  }
  return (
    <>
      <div className= "turn">Turno 1</div>
      <div className="dice-box">
      <div className="info">Ahora lánzalos:
      <ThrowButton />
      </div>
        
        <div className="dice-box-item">
          <div className="dice-box-image"></div> 
          <div className="info">Obtuviste:</div> 
          <div className="dice-box-result">2</div> 
       </div>
        <div>
        <Link to = '/results'>
          <button className="btn btn-primary player-button">Ver resultados</button>
        </Link>
        </div>
      </div>
    </>
  );
}

export default Play;
