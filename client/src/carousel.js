import Carousel from 'react-bootstrap/Carousel';
import "./carousel.css"

function MyCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
      <img className="image img-fluid" src="/carouselPic/slider-first.png"></img>
       
        <Carousel.Caption>
            <div className='caption'>
                <h3 className='p-3'>First slide label</h3>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="image img-fluid slide" src="/carouselPic/slide-three.jpg" ></img>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="image img-fluid slide" src="/carouselPic/slider-staff.png" ></img>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;