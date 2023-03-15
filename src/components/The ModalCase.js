import React from "react";

export default function ModalCase({setIsOpen,film}){
    return(
        <div className="modal-show" onClick={()=> setIsOpen(false)}>
            <div id="modal1" className="modal" style={{display:'block', top:'7%',backgroundColor:'rgb(255,182,193)' }} >
                <div className="modal-content" style={{backgroundColor:'rgb(255,182,193)'}}>
                    <h4 style={{color:'green'}}>Video for {film.name}</h4>
                    <p><iframe width="100%" height="400px" src={film.clip} title={film.title} frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/> </p>
                </div>
            <div className="modal-footer" style={{backgroundColor:'rgb(255,182,193)'}}>
                <button className="modal-close red-text" style={{backgroundColor:'rgb(84,255,159)',fontSize:'20px'}}>Close</button>
                </div>
            </div>
        </div>
    )
}