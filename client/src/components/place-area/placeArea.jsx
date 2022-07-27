import useFetch from "hooks/useFetch";
import "./placeArea.css";

function PlaceArea() {
  const { data, loading } = useFetch("/hotels/countType");
  const tempHotelImage =
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className="featuredArea">
          <h1 className="title">Browse by property type</h1>
          <div className="featuredContainer">
            {data.map((item) => (
              <div className="featuredItem" key={item.type}>
                <img
                  src={item.img || tempHotelImage}
                  alt={`Featured ${item.type}`}
                />
                <h2>{item.type}</h2>
                <h3>
                  {item.count} {item.type}s
                </h3>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default PlaceArea;