export default function Footer() {
  return (
    <footer className="bg-main text-white text-center py-3 position-relative m-auto">
      <div className="container extra-padding">
        <div className="row">
          <div className="col-md-4">
            <div className="">
              <h3>LOCATION</h3>
              <p>
                2215 John Daniel Drive
                <br></br>
                Clark, MO 65243
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="">
              <h3>AROUND THE WEB</h3>
              <i className="fa-brands fa-facebook p-3"></i>
              <i className="fa-brands fa-twitter p-3"></i>
              <i className="fa-brands fa-instagram p-3"></i>
              <i className="fa-brands fa-linkedin p-3"></i>
            </div>
          </div>
          <div className="col-md-4">
            <div className="">
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="d-flex justify-content-center align-items-center mb-0 bg-dark position-absolute bottom-0 end-0 start-0 h-25 ">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </p>
    </footer>
  );
}
