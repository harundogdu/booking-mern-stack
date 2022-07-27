import "./Content.css";
import {
  CityArea,
  DiscountArea,
  EffectArea,
  FeaturedArea,
  InfoArea,
  PlaceArea,
} from "components";

const Content = () => {
  return (
    <div className="content">
      <div className="contentContainer">
        <InfoArea />
        <PlaceArea />
        <CityArea />
        <FeaturedArea />
        <DiscountArea />
        <EffectArea />
      </div>
    </div>
  );
};

export default Content;
