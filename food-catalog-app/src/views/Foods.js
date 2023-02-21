import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

// import foodImage from "../images/protein/001.jpg";

const Foods = () => {
  const [foods, setFoods] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "foods"]{
					_id,
      foodName,
      foodDesc,
      foodImage{
        asset->{
          _id,
          url
        },
      },
      category->{
				title
			}
    }`
      )
      .then((data) => setFoods(data))
      .catch(console.error);
  }, []);

  return (
    <section className="">
      <div className="">
        <div className="">
          <input type="text" className="" />
          <button style={{ backgroundColor: "#FE043C" }} className="">
            Search
          </button>
        </div>
      </div>
      <hr className="" />
      <div className="">
        <h3 className="">All Foods🥗</h3>
        <div className="">
          {foods &&
            foods.map((food) => (
              <div className="" key={food.foodName}>
                <div className="">
                  <img
                    src={urlFor(food.foodImage).width(200).url()}
                    alt={food.title}
                    className=""
                  />
                  <h4 className="">{food.foodName}</h4>
                  <Link to={"/filteredfoods/" + food.category.title}>
                    <small className="">{food.category.title}</small>
                  </Link>
                </div>
                <p className="">{food.foodDesc}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Foods;
