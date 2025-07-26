import React, { useEffect, useState } from "react";
import img1 from '../assets/poert1.png'
import img2 from '../assets/port2.png'
import img3 from '../assets/port3.png'

let imgs=[img1, img2, img3, img1, img2, img3]
export default function Portfolio() {


    const [viewImg, setViewImg] = useState(false);
    const [curentImg, setCurentImg] = useState(null);



    function handleClick(e) {
      if (e.target.classList.contains('focusImg')) {
        setViewImg(false);
      }
    }



    useEffect(() => {
      document.title = "portfolio";
  
      return function(){
        document.title = "";
      }
    },[])
  return (
    <section className="pb-5 position-relative">
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
          {
            imgs.map((img, index)=><div key={index} className="col-lg-4 col-md-6">
            <div onClick={()=>{setViewImg(true), setCurentImg(img)}} className="portfolio-item position-relative">
              <img src={img} alt="Portfolio Item" className="img-fluid"/>
              <div className="layer"></div>
            </div>
          </div>)
          }
        </div>
      </div>
      {viewImg?<div onClick={(e)=>handleClick(e)} className="z-3 focusImg position-fixed top-0 start-0 end-0 bottom-0 bg-black bg-opacity-50 d-flex justify-content-center align-items-center">
          <img src={curentImg} className="mt-5" width={"40%"} alt="" />
      </div> :""}
    </section>
  );
}
