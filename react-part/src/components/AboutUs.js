import React from "react";
import logo from "./../assets/bookmates.png";

const AboutUs = () => {
  return (
    <div>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={logo}
              className="d-block mx-lg-auto img-fluid"
              alt="bookmates logo"
              width="250"
              height="250"
              loading="lazy"
              style={{borderRadius: 15}}
            />
          </div>
          <div className="col-lg-6">
            <p className="about display-5 lh-1 mb-3">
              About bookmates
            </p>
            <p className="lead">
              Ever finished a book and wanted to discuss the ending with someone, but that someone wasn't around? 
              Bookmates is an application meant to bring you closer to readers around you.
              Make new friends, discuss your favorite books, and build your to-read list for the year.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
