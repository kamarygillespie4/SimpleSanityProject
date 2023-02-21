import React, { useState, useEffect } from "react";
import sanityClient from "../client";

import Category from "./category";

const Categories = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "category"]{
      title,
      slug,
      description,
      image{
        asset->{
          _id,
          url
        },
      },
      hexCode,
    }`
      )
      .then((data) => setCategories(data))
      .catch(console.error);
  }, []);

  return (
    <div className="">
      <h3 className="">All Categories🥘</h3>

      <div className="">
        {categories &&
          categories.map((category) => (
            <Category key={category._id} category={category} />
          ))}
      </div>
    </div>
  );
};

export default Categories;
