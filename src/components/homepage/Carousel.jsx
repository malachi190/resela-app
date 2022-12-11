import React from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Carousel = () => {
  return (
    <div className="mx-auto max-w-full relative sm:top-[23rem] top-[8rem] py-[5rem] sm:flex flex-1 flex-wrap justify-between items-center gap-[1rem] text-center hidden">
    <OwlCarousel items={4}  
        className="owl-theme"  
        loop  
        nav 
        autoplay={true} 
        margin={8}> 
          <div className="shadow-lg h-[250px] rounded-2xl py-[1.1rem] px-[2rem] min-w-full">
              <h2 className="text-primaryColor">Wow! i love this!!</h2>
              <p>Product Sellers</p>
              <br />
              <h2 className="text-primaryColor">Wow! i love this!!</h2>
              <p>Product Sellers</p>
              <br />
              <h2 className="text-primaryColor">Wow! i love this!!</h2>
              <p>Product Sellers</p>
          </div>
          <div className="shadow-lg w-[250px] h-[250px] rounded-2xl py-[1.1rem] px-[2rem] min-w-full">
              <h2 className="text-primaryColor">Wow! i love this!!</h2>
              <p>Product Sellers</p>
              <br />
              <h2 className="text-primaryColor">Wow! i love this!!</h2>
              <p>Product Sellers</p>
              <br />
              <h2 className="text-primaryColor">Wow! i love this!!</h2>
              <p>Product Sellers</p>
          </div>
          <div className="shadow-lg w-[250px] h-[250px] rounded-2xl py-[1.1rem] px-[2rem] min-w-full">
              <h2 className="text-primaryColor">Wow! i love this!!</h2>
              <p>Product Sellers</p>
              <br />
              <h2 className="text-primaryColor">Wow! i love this!!</h2>
              <p>Product Sellers</p>
              <br />
              <h2 className="text-primaryColor">Wow! i love this!!</h2>
              <p>Product Sellers</p>
          </div>
          <div className="shadow-lg w-[250px] h-[250px] rounded-2xl py-[1.1rem] px-[2rem] min-w-full">
              <h2 className="text-primaryColor">Wow! i love this!!</h2>
              <p>Product Sellers</p>
              <br />
              <h2 className="text-primaryColor">Wow! i love this!!</h2>
              <p>Product Sellers</p>
              <br />
              <h2 className="text-primaryColor">Wow! i love this!!</h2>
              <p>Product Sellers</p>  
          </div>
          <div className="shadow-lg w-[250px] h-[250px] rounded-2xl py-[1.1rem] px-[2rem] min-w-full">
              <h2 className="text-primaryColor">Wow! i love this!!</h2>
              <p>Product Sellers</p>
              <br />
              <h2 className="text-primaryColor">Wow! i love this!!</h2>
              <p>Product Sellers</p>
              <br />
              <h2 className="text-primaryColor">Wow! i love this!!</h2>
              <p>Product Sellers</p>
          </div>
        </OwlCarousel> 
    </div>
  )
}

export default Carousel
