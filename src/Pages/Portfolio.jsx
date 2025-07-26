import React, { useEffect } from "react";
import img1 from '../assets/poert1.png'
import img2 from '../assets/port2.png'
import img3 from '../assets/port3.png'

export default function Portfolio() {
    useEffect(() => {
      document.title = "portfolio";
  
      return function(){
        document.title = "";
      }
    },[])
  return (
    <section className="pb-5">
      <div className="container flex-column d-flex justify-content-center align-items-center py-5">
        <h1 className="text-uppercase pt-5 mt-5">portfolio Component</h1>
        <div className="">
          <span className="starIcon position-relative" id='dark-star'>
            <i class="fa-solid fa-star"></i>
          </span>
        </div>
      </div>

      <div className="container pt-5">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <div className="portfolio-item">
              <img
                src={img1}
                alt="Portfolio Item"
                className="img-fluid"
              />
              <h3 className="text-center mt-3">Portfolio Item 1</h3>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="portfolio-item">
              <img
                src={img2}
                alt="Portfolio Item"
                className="img-fluid"
              />
              <h3 className="text-center mt-3">Portfolio Item 2</h3>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="portfolio-item">
              <img
                src={img3}
                alt="Portfolio Item"
                className="img-fluid"
              />
              <h3 className="text-center mt-3">Portfolio Item 3</h3>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="portfolio-item">
              <img
                src={img1}
                alt="Portfolio Item"
                className="img-fluid"
              />
              <h3 className="text-center mt-3">Portfolio Item 4</h3>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="portfolio-item">
              <img
                src={img2}
                alt="Portfolio Item"
                className="img-fluid"
              />
              <h3 className="text-center mt-3">Portfolio Item 5</h3>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="portfolio-item">
              <img
                src={img3}
                alt="Portfolio Item"
                className="img-fluid"
              />
              <h3 className="text-center mt-3">Portfolio Item 6</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
