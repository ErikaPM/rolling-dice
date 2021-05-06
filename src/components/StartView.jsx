import '../assets/styles/components/Header.css';
import FieldPlayer from './FieldPlayer';
import { Link } from 'react-router-dom';

function StartView() {
  return (
      <div className="main-container">
        <FieldPlayer />
          <div className="start-button">
            <Link to ="/gameInfo">
            <button className="btn btn-primary ready-button">Empieza ahora</button>
            </Link>
          </div>
      </div> 
  );
}

export default StartView;