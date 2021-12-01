import React from "react";
import "./Banner.css";
import Me from "../../../Images/img-4.png";

const Banner = () => {
  return (
    <div className="i ">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is </h2>
          <h1 className="i-name">Arif Ahammad</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Blogger</div>
              <div className="i-title-item"> Photographer</div>
              <div className="i-title-item">Junior Dev Developer </div>
              <div className="i-title-item">React Developer</div>
              <div className="i-title-item">Traveler</div>
            </div>
          </div>
          {/* <div className='i-description'>
                        An aspiring MERN Stack Developer.I lost myself when I dive into the codes. I am a professional web designer and developer.No
                    </div> */}
          <a href="https://drive.google.com/uc?export=download&id=1nMf-DVHW2wxz-MxxJ5ZReIxUr3mM-xLW">
            <button
              type="button"
              style={{
                fontSize: "15px",
                color: "whitesmoke",
                fontWeight: 600,
                margin: "20px",
              }}
              class="btn btn-info"
            >
              My Resume
            </button>
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Me} alt="" className="i-img img-fluid" />
      </div>
    </div>
  );
};

export default Banner;
