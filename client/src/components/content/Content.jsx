import "./Content.css";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { featuredItems, imgArray } from "utils/helper";
import Typed from "react-typed";

const Content = () => {
  return (
    <div className="content">
      <div className="contentContainer">
        <div className="infoArea">
          <BsInfoCircle />
          <span>
            Get the advice you need. Check the latest COVID-19 restrictions
            before you travel. Learn more
          </span>
        </div>
        <div className="featuredArea">
          <h1 className="title">Browse by property type</h1>
          <div className="featuredContainer">
            {featuredItems.map((item) => (
              <div className="featuredItem" key={item.id}>
                <img src={item.img} alt="" />
                <h2>{item.title}</h2>
                <h3>{item.subtitle}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="featuredItems">
          {imgArray.map((item) => (
            <div className="featuredItemsContainer" key={item.id}>
              <img src={item.img} alt="" />
              <div className="textContainer">
                <span className="title">{item.title}</span>
                <span className="subTitle">{item.subTitle}</span>
              </div>
              <div id="overlay"></div>
            </div>
          ))}
        </div>
        <div className="discountContainer">
          <img
            src="https://t-cf.bstatic.com/static/img/genius-globe-with-badge_desktop/d807514761b3684aedebced9265c5548a063b7a0.png"
            alt=""
          />
          <div className="discountInnerContainer">
            <h1 className="discountTitle">Anında indirimlerden faydalanın</h1>
            <span className="discountSubTitle">
              Tasarruf etmek için Booking.com hesabınıza giriş yapıp mavi <br />{" "}
              renkli Genius logosunu bulmanız yeterli
            </span>
            <div className="discountBtnContainer">
              <button>Giriş yap</button>
              <button className="button">Kaydol</button>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default Content;
