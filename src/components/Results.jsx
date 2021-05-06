import '../assets/styles/components/Results.css';
import { Link } from 'react-router-dom';

function Results() {
  return (
    <div className="last-results">
      <div className="last-results-info">
        <div className="last-results-title">Consulta tu récord de lanzamientos aquí:</div> 
          </div> 
            <div className="last-results-table">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </table>
            
        </div> 
        <div className="button">
            <Link to = '/'>
              <button className="btn btn-primary player-button">Volver</button>
            </Link>
          </div>
    </div> 
  );
}

export default Results;
