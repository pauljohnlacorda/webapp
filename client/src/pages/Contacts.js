import React from "react";
import "./Contact.css";
import Carousel from 'react-elastic-carousel';

const Contacts = () => {
    return (
    <>
        <div className="container-fluid text-center mt-3">

        <div className="row p-0 m-0">
     
     <div className="col-md-6  p-0 m-2 contact bg-white">
         
           <div className="card card-contact p-0 m-0">
           
             <div className="card-header header p-0 m-0 ">
              <Carousel>
                  <img src="/contact/branchOne.jpg" className="img-fluid p-0 m-0"></img>
                  <img src="/contact/branchOne-One.jpg" className="img-fluid p-0 m-0"></img>
                  <img src="/contact/branchOne.png" className="img-fluid p-0 m-0"></img>
               </Carousel> 
             </div>
           
                <div className="container-fluid d-flex text-center"><h6>Chic Station 1</h6></div>
                <div className="container-fluid d-flex p-0 m-0"><h6><i class="fa-solid fa-location-dot me-4 ps-2"></i>Padre Gomez Roxas Street, Davao City</h6></div>
                <div className="container-fluid d-flex p-0 m-0"><h6><i class="fa-solid fa-phone me-4 ps-2 "></i>09550954670</h6></div>
                
                <div className="container-fluid d-flex p-0 m-0"><h6><i class="fa-solid fa-phone me-4 ps-2 mb-2"></i>09454430380</h6></div>
  
          </div> 
         </div>

         <div className="col-md-6  p-0 m-2 contact">
         
         <div className="card card-contact p-0 m-0">
         
           <div className="card-header header p-0 m-0 ">
            <Carousel>
                <img src="/contact/branchTwo.jpg" className="img-fluid p-0 m-0"></img>
                <img src="/contact/branchTwo-Two.jpg" className="img-fluid p-0 m-0"></img>
                <img src="/contact/branchTwo-Three.jpg" className="img-fluid p-0 m-0"></img>
             </Carousel> 
           </div>
         
              <div className="container-fluid d-flex text-center"><h6>Chic Station 2</h6></div>
              <div className="container-fluid d-flex p-0 m-0"><h6><i class="fa-solid fa-location-dot me-4 ps-2"></i>Rizal extension cor De Jesus St., Davao City</h6></div>
              <div className="container-fluid d-flex p-0 m-0"><h6><i class="fa-solid fa-phone me-4 ps-2 "></i>09859559334</h6></div>
              
              <div className="container-fluid d-flex p-0 m-0"><h6><i class="fa-solid fa-phone me-4 ps-2 mb-2 "></i>09454430380</h6></div>

        </div> 
       </div>

       

         
         


          </div> 



        </div>
       
    </>
    
    )
     
    
  
}

export default Contacts;