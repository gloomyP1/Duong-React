import { useParams } from 'react-router-dom'
import { Films } from '../shared under/ListOfFilms';
import { useState } from 'react';
import { Icon } from 'react-materialize';
import ModalCase from './The ModalCase';

// import { Icon } from 'react-materialize'
// import ModalCase from './ModalCase';
export default function DetailFilm() {
  
    const [isOpen, setIsOpen] = useState(false);
    const userName = useParams();
    const film = Films.find(obj => {
        return obj.id == userName.id;
    });
    
    return (
         <div className="container ">
         <div className="product-card ">
           <div className="badge"></div>
           <div className="product-tumb col d-flex justify-content-center">
           <img src={`../${film.img}`} alt={film.title} />
           </div> 
           <div className="product-details">
             <div className='col d-flex justify-content-center '><h4>{film.title}</h4></div>
             <div className="col d-flex justify-content-center fw-bolder ">Year: {film.year}</div>           
             <div className="product-bottom-details col d-flex justify-content-center fs-4 text-success ">Description: {film.desc}</div>    
             <a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red">
                  <Icon>ondemand_video</Icon>
              </a>
              {isOpen && <ModalCase setIsOpen={setIsOpen} film={film}/>}

        
           </div>
         </div>
       </div>
    )
}