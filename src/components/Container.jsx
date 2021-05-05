import '../assets/styles/components/Container.css';


const Container = () => {
  let result = 0;
  if(result === 1){return createImage(1)}

  function createImage (){
    //crear img
    const imagen = document.createElement('img');
    imagen.style.background = "url('../assets/img-1.png')";
    imagen.className = "dice-box-image"
  }
  return (
    <div className="dice-box">
       <div className="dice-box-item">
        <div className="dice-box-image"></div> 
        <div className="info">Obtuviste:</div> 
        <div className="dice-box-result">2</div> 
       </div> 
    </div> 
  );
}

export default Container;
