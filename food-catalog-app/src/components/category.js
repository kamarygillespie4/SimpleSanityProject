import React from "react";
import { Link } from "react-router-dom";

import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const Category = ({ category }) => {
  return (
    <div className="" style={{ backgroundColor: `#${category.hexCode}` }}>
      <img
        src={urlFor(category.image).url()}
        alt={category.title}
        className=""
      />
      <h4 className="">{category.title}</h4>
      <p>{category.description}</p>
      <Link to={"/filteredfoods/" + category.slug.current}>
        <button style={{ backgroundColor: "#FE043C" }} className="">
          View
        </button>
      </Link>
    </div>
  );
};

export default Category;
