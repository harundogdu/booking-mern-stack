import { imgArray } from "utils/helper";
import "./DetailsGallery.css";

export default function DetailsGallery() {
  return (
    <div className="detailsGallery">
      {imgArray.map((item) => (
        <div className="detailsGalleryItem" key={item.id}>
          <img src={item.img} alt={item.title} />
        </div>
      ))}
    </div>
  );
}
