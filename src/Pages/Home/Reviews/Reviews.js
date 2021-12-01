import React from "react";
import Bg1 from "../../../Images/img-3.png";
import Bg2 from "../../../Images/img-3.png";
import Bg3 from "../../../Images/img-3.png";

const Reviews = () => {
  return (
    <>
      <div className="container my-5">
        <p className="fs-1 text-center fw-bold py-5">
          Happy <span style={{ color: "rgb(228, 118, 44)" }}>Clients says</span>
        </p>

        <div className="row g-8">
          <div className="col-lg-4 col-sm-12">
            <div className="p-3 border">
              <img className="img-fluid style-img p-5" src={Bg1} alt="" />
              <div className="text-center">
                <p>
                  Slate helps you see how many more days you need to work to
                  reach your financial goal for the month and year.
                </p>
                <i className="fas fa-star filled"></i>
                <i className="fas fa-star filled"></i>
                <i className="fas fa-star filled"></i>
                <i className="fas fa-star filled"></i>
                <i className="far fa-star empty"></i>
                <br />

                <p>Regina Miles</p>
                <p className="fw-bold">Banker</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="p-3 border">
              <img className="img-fluid style-img p-5" src={Bg2} alt="" />
              <div className="text-center">
                <p>
                  Slate helps you see how many more days you need to work to
                  reach your financial goal for the month and year.
                </p>
                <i className="fas fa-star filled"></i>
                <i className="fas fa-star filled"></i>
                <i className="fas fa-star filled"></i>
                <i className="fas fa-star filled"></i>
                <i className="far fa-star empty"></i>
                <br />

                <p>Regina Miles</p>
                <p className="fw-bold">Banker</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="p-3 border">
              <img className="img-fluid style-img p-5" src={Bg3} alt="" />
              <div className="text-center">
                <p>
                  Slate helps you see how many more days you need to work to
                  reach your financial goal for the month and year.
                </p>
                <i className="fas fa-star filled"></i>
                <i className="fas fa-star filled"></i>
                <i className="fas fa-star filled"></i>
                <i className="fas fa-star filled"></i>
                <i className="far fa-star empty"></i>
                <br />

                <p>Regina Miles</p>
                <p className="fw-bold">Banker</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
