import useFetch from "hooks/useFetch";
import React from "react";

export default function CityArea() {
  const { data, loading } = useFetch("/hotels/countCity");
  console.log('====================================');
  console.log(data);
  console.log('====================================');
  const tempCityImage =
    "https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="featuredItemsArea">
          <h1 className="title">Featured Properties</h1>
          <div className="featuredItems">
            {data.map((item) => (
              <div className="featuredItemsContainer" key={item._id}>
                <img src={item.img || tempCityImage} alt={`City ${item._id}`} />
                <div className="textContainer">
                  <span className="title">{item._id}</span>
                  <span className="subTitle">{item.count} properties</span>
                </div>
                <div id="overlay"></div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
