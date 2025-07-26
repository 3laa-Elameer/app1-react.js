import { useEffect } from "react";

export default function About() {
    useEffect(() => {
      document.title = "about";
  
      return function(){
        document.title = "";
      }
    },[])
  return (
    <div className="bg-secondry about text-white">
      <div className="container flex-column d-flex justify-content-center align-items-center pt-5 mt-5">
        <h1 className="text-uppercase text-white">about Component</h1>
        <div className="">
          <span className="starIcon position-relative">
            <i class="fa-solid fa-star text-white"></i>
          </span>
        </div>
      </div>

      <div className="container position-relative">
        <div className="content p-5 d-flex align-items-center mx-5 row">
          <div className="parahraph pb-3 col-md-6 col-sm-12 col-12">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </div>
          <div className="parahraph pb-3 col-md-6 col-sm-12 col-12">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </div>
        </div>
      </div>
    </div>
  );
}
