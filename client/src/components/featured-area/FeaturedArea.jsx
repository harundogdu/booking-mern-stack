import useFetch from "hooks/useFetch";
import { Link } from "react-router-dom";

export default function FeaturedArea() {
  const { data, loading } = useFetch("/hotels/featuredProperties");
  const tempHotelImage =
    "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="featured">
          <h1 className="title">Featured</h1>
          <div className="fItems">
            {data.map((item) => (
              <Link
                to={`/hotels/${item._id}`}
                key={item._id}
                className="fItemsContainer"
              >
                <img
                  src={item.img || tempHotelImage}
                  alt={`Featured ${item._id}`}
                />
                <div className="textContainer">
                  <p className="title">{item.name}</p>
                  <p className="city">{item.city}</p>
                  <p className="price">Starting from ${item.cheapestPrice}</p>
                  {item.rating && (
                    <div className="footerText">
                      <button>{item.rating}</button>
                      <span>Excellent</span>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
