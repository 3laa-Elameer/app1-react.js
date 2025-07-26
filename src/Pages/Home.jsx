import { useEffect } from "react";
import img from "../assets/avataaars.svg";
export default function Home() {

  useEffect(() => {
    document.title = "home";

    return function(){
      document.title = "";
    }
  },[])
  return (
    <>
      <section className="bg-secondry extra-padding h-50">
        <div className="home container flex-column d-flex justify-content-center align-items-center pt-5 mt-5">
            <img src={img} width={"250px"} alt="" />
            <h1 className="text-uppercase text-white pt-3">home Component</h1>
            <div className="">
              <span className="starIcon position-relative">
              <i class="fa-solid fa-star text-white"></i> 
              </span>
            </div>
            <p className="text-white w-25 pt-3"> Graphic Artist - Web Designer - Illustrator </p>
        </div>
      </section>
    </>
  );
}
