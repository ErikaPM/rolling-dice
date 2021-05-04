import './Results.css';

function Results() {
  return (
    <div className="last-results">
       <div className="last-results-info">
        <div className="last-results-title">Consulta tu récord de lanzamientos aquí:</div> 
        <button type="button" className="btn btn-info player-button">Resultados</button>
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
    </div> 
  );
}

export default Results;
