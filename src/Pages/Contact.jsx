import { useEffect } from "react";
import Input from "../Components/Input";

export default function Contact() {
    useEffect(() => {
      document.title = "contact";
  
      return function(){
        document.title = "";
      }
    },[])
  return (
    <section className="extra-padding">
      <div className="container pt-5 mt-5">
        <div className="container flex-column d-flex justify-content-center align-items-center py-3">
          <h1 className="text-uppercase">contact section</h1>
          <div className="">
            <span className="starIcon position-relative" id="dark-star">
              <i class="fa-solid fa-star"></i>
            </span>
          </div>
        </div>

        <div className="container d-flex justify-content-center ">
          <div className="w-50">
            <Input
              label={"userName : :"}
              type={"text"}
              id={"userName"}
              htmlFor={"userName"}
              placeholder={"userName"}
            />
            <Input
              label={"userAge :"}
              type={"number"}
              id={"userAge"}
              htmlFor={"userAge"}
              placeholder={"userAge"}
            />
            <Input
              label={"userEmail :"}
              type={"email"}
              id={"userEmail"}
              htmlFor={"userEmail"}
              placeholder={"userEmail"}
            />
            <Input
              label={"userPassword :"}
              type={"password"}
              id={"userPassword"}
              htmlFor={"userPassword"}
              placeholder={"userPassword"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
