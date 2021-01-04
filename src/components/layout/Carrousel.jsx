import React from 'react'
import Logo from '../../assets/component.png'
import Logo2 from '../../assets/component2.png'
import Logo3 from '../../assets/component3.png'
import Logo4 from '../../assets/component4.png'

import Carousel from 'react-bootstrap/Carousel'

function Slider() {
    return (
      <div className="DivSlider">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Logo}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Marcenas mattis egestas</h3>
              <p>Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Logo2}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Marcenas mattis egestas</h3>
              <p>Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Logo3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Marcenas mattis egestas</h3>
              <p>Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Logo4}
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <h3>Marcenas mattis egestas</h3>
              <p>Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>  
      </div>
    );
  }
  
  export default Slider;