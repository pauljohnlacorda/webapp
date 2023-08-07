import React from "react";
import "./Modal.css"


export default function Modal({open, children, onClose}){
    if (!open) return null

    return(
        
        <div className="container-fluid p-0 m-0 mods">
            <button onClick={onClose} className="btn_close">close</button>
            {children}
        </div>
      
    )
}