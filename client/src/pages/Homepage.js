import React from "react";
import Carousel from 'react-elastic-carousel';
import "./Homepage.css";
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <>
        <section className="landingpage" style={{ backgroundImage: "url(" + "/carouselPic/landingpage.jpg" + ")",
                                                                  backgroundPosition: 'center',
                                                                  backgroundSize: 'cover',
                                                                  backgroundRepeat: 'no-repeat'}} >
          <div className="container-fluid test text-center" >
             <img className="image img-fluid" src="/carouselPic/landinglogo.png" alt="landing" style={{opacity: .7}}></img>
          </div>
         
        </section>
          <section className="welcome p-4">
              <h1 className="p-2 text-center">Welcome to Chic Station where your beauty is our profession.  </h1>
              <p className="text-center">We are open Monday to Sunday 9 AM to 7 PM. </p>
              <p className="text-center">We are happy to serve you!</p>
             
            </section>
           

          <section>
            <div className = "Homepage container-fluid my-5 p-0">
          
                <Carousel>
                    
                  
                    <div className="card container-fluid p-0 mt-4">
                       <img className="image img-fluid slide" src="/carouselPic/slider-first.png" ></img>
                       <h2 className="p-2">Treat yourself and unwind with us</h2>
                    </div>    
                   
                    <div className="card container-fluid p-0 mt-4">
                       <img className="image img-fluid slide" src="/carouselPic/slide-three.jpg" ></img>
                       <h2 className="p-2"> Experience the ultimate relaxation</h2>
                    </div>    
                    <div className="card container-fluid p-0 mt-4">
                       <img className="image img-fluid slide" src="/carouselPic/slide-six.png" ></img>
                       <h2 className="p-2">Quality and standard equipment</h2>
                    </div> 
                    <div className="card container-fluid p-0 mt-4">
                       <img className="image img-fluid slide" src="/carouselPic/slider-staff.png" ></img>
                       <h2 className="p-2">"Highly trained and professional staff"</h2>
                    </div>       
                    
                </Carousel>
                
            </div>
            </section>


            <div className="card social text-center" >
                 <ul className="list-group list-group-flush">
                    <li className="list-group-item"><a href="https://web.facebook.com/chicstationdavao"><i className="fa-brands fa-facebook"></i></a></li>
                    <li className="list-group-item"><a href="https://www.instagram.com/pakaykayyy/"><i className="fa-brands fa-instagram"></i></a></li>
                    <li className="list-group-item"><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                    <Link to="/contacts" className="logo">
                    <li className="list-group-item"><i class="fa-solid fa-phone-volume"></i></li>
                    </Link>

              
                </ul>
            </div>
          

            <h4 className="ms-5 ps-2 mt-5 text-start" ><b>Nail Art Extension</b></h4>
            <div className="container-fluid m-0 p-0 text-center">

            <div className="row ms-5 p-0 text-center">

              <div className="col-md-3 my-1">
              <Link to='/gallery' className="nav-links" >  
                <div className="card p-0 m-0">
                  <div className="card-header text-center p-0 m-0 nail-art">
                    <img src="/carouselPic/nail-home.png" alt="" className="image-section img-fluid p-0 m-0 "></img>
                    <div className="card-hover p-0 m-0"><p className="bg-white fs-5 text-start p-2">Polygel nail extensions or softgel extensions are a nail enhancement that is more flexible and lightweight compared to acrylic but is harder than regular gel.</p></div>
                  </div> 
                  <div className="card-body p-0 m-0">
                    <button type="button" class="btn btn-light m-2">View More</button>
                  </div>
                </div>
                </Link>
              </div>

              <div className="col-md-3 my-1">
              <Link to='/gallery' className="nav-links" >  
                  <div className="card p-0 m-0">
                    <div className="card-header  text-center p-0 m-0 nail-art">
                      <img src="/carouselPic/nail-one.jpg" alt="" className="image-section img-fluid "></img>
                      <div className="card-hover p-0 m-0"><p className="bg-white fs-5 text-start p-2">Polygel nail extensions or softgel extensions are a nail enhancement that is more flexible and lightweight compared to acrylic but is harder than regular gel.</p></div>
                    </div>
                    <div className="card-body p-0 m-0">
                      <button type="button" className="btn btn-light m-2">View More</button>
                    </div>
                  </div>
              </Link>
              </div>

              

              <div className="col-md-3 my-1">
              <Link to='/gallery' className="nav-links" >  
                <div className="card p-0 m-0">
                  <div className="card-header  text-center p-0 m-0 nail-art" >
                    <img src="/carouselPic/nail-two.jpg" alt="" className="image-section img-fluid  "></img>
                    <div className="card-hover p-0 m-0"><p className="bg-white fs-5 text-start p-2">Polygel nail extensions or softgel extensions are a nail enhancement that is more flexible and lightweight compared to acrylic but is harder than regular gel.</p></div>
                  </div> 
                    
                   
                <div className="card-body p-0 m-0">
                 
                  <button type="button" className="btn btn-light m-2">View More</button>
                </div>
                </div>
              </Link>
              </div>

              <div className="col-md-3 my-1">
              <Link to='/gallery' className="nav-links" >  
                <div className="card p-0 m-0">
                  <div className="card-header  text-center p-0 m-0 nail-art">
                    <img src="/carouselPic/nail-three.jpg" alt="" className="image-section img-fluid "></img>
                    <div className="card-hover p-0 m-0"><p className="bg-white fs-5 text-start p-2">Polygel nail extensions or softgel extensions are a nail enhancement that is more flexible and lightweight compared to acrylic but is harder than regular gel.</p></div>  
                  </div>
                  <div className="card-body p-0 m-0">
                  
                    <button type="button" className="btn btn-light m-2">View More</button>
                  </div>
                </div>
              </Link>
              </div>
            </div>
            </div>

            <h4 className="ms-5 ps-2 mt-5 text-start"><b>Services</b></h4>
            <div className="container-fluid  p-0 text-center">

              <div className="row ms-5 p-0 text-center">

                <div className="col-md-3 my-1">
                <Link to='/services' className="nav-links" >  
                  <div className="card">
                    <div className="card-header text-center p-0 m-0">
                      <img src="/carouselPic/nail-services.jpg" alt="" className="image-section img-fluid"></img>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title"><b>Nails</b></h5>
                      <div className="card-body p-0 m-0">

                          <button type="button" className="btn btn-light m-0">View More Details</button>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>

                <div className="col-md-3 my-1">
                <Link to='/services' className="nav-links" >  
                    <div className="card">
                      <div className="card-header  text-center p-0 m-0">
                        <img src="/carouselPic/lashes.png" alt="" class="image-section img-fluid"></img>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title"><b>Lashes & Brows</b></h5>
                        <div className="card-body p-0 m-0">
                            <button type="button" className="btn btn-light m-0">View More Details</button>
                        </div>
                    </div>
                    </div>
                </Link>
                </div>

                

                <div className="col-md-3 my-1">
                <Link to='/services' className="nav-links" >  
                  <div className="card">
                    <div className="card-header  text-center p-0 m-0">
                      <img src="/carouselPic/footspa-home.png" alt="" className="image-section img-fluid"></img>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title"><b>Footspa</b></h5>
                        <div className="card-body p-0 m-0">
                            <button type="button" className="btn btn-light m-0">View More Details</button>
                        </div>
                    </div>
                  </div>
                </Link>
                </div>

                <div className="col-md-3 my-1">
                <Link to='/services' className="nav-links" >  
                  <div className="card">
                    <div className="card-header  text-center p-0 m-0">
                      <img src="/carouselPic/meso.jpg" alt="" class="image-section img-fluid"></img>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title"><b>Mesotheraphy & Gluta</b></h5>
                        <div className="card-body p-0 m-0">
                            <button type="button" className="btn btn-light m-0">View More Details</button>
                        </div>
                    </div>
                  </div>
                </Link>
                </div>
              </div>
              </div>

              <section className="section-owner" style={{ backgroundImage: "url(" + "/carouselPic/flora.jpg" + ")",
                                                                  backgroundPosition: 'center',
                                                                  backgroundSize: 'cover',
                                                                  backgroundRepeat: 'no-repeat'}}>
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 ">
                      <img className="img-fluid text-center mt-3 ms-4 mb-4 ownerPic" src="/carouselPic/owner.jpg"></img>
                    </div>

                    <div className="col-md-6" >
                      <div className="container text-center">
                        <ul className="list-group list-group-flush p-3 ms-4 ">
                          <li className="list-group-item "><b className="border-bottom text-secondary">Angelika Jan L. Escalera </b><br></br><h6>CEO / Owner</h6></li>
                        
                          
                        </ul>
                      </div>
                      <div className="container ">
                        <ul className="list-group list-group-flush opacity-80 p-3 ms-4 m-0">
                          <li className="list-group-item text-center "><p className="text-secondary p-0 mt-1"><b>About Us</b> </p>
                          <p className="text-start">The Chic Station salon is an establishment that offers nails, lash, brow and glutathione 
                            beuatification services for men and women. <br></br>Nail salons offer services for hands and feet, including Polygel extensions, Softgel
                            extensions, manicures, pedicures, Gel polish application, Toe nail extensions, footspa and foot massage services.
                            <br></br>The establishment also offers lash and brow services including lash extension, lash lift, brow lamination, glutathione infusion,
                            meso lipo and botox.<br></br>
                            To create Chic Station enthusiast through our exceptional customer experience, our commitment to quality, and our service to 
                            the community.
                           
                            </p></li>

                        </ul>
                      </div>
                      </div>
                    </div>

                  </div>

             

            
          
          </section>
         




                    
            
         
                
        </>
    
    )
     
    
  
}

export default Homepage;