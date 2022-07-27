import React from "react";
import Typed from "react-typed";
import { AiOutlineClose } from "react-icons/ai";

export default function EffectArea() {
  return (
    <div className="effectArea">
      <div className="effectContainer">
        <div className="leftCircle"></div>
        <div className="mainCircle">
          <div className="mainCircleInner">
            <div>
              <span>Find</span>
              <Typed
                strings={[
                  "homes",
                  "villas",
                  "apartments",
                  "aparthotels",
                  "hotels",
                ]}
                typeSpeed={40}
                backSpeed={40}
                loop
                showCursor={false}
                className="typed"
              />
            </div>
            <p>for your next trip</p>
          </div>
          <button>Discover homes</button>
        </div>
        <div className="rightImage">
          <img
            src="https://t-cf.bstatic.com/static/img/bh/awareness/campaign/bh_aw_cpg_main_image/b0f5755d0651acbe9d3f3785a874258150b4393b.png"
            alt="Right"
          />
        </div>
      </div>
      <button className="effectBtn">
        <AiOutlineClose />
      </button>
    </div>
  );
}
