import React from "react";

import Categories from "../components/Categories";

const Home = () => {
  return (
    <section className="">
      <div className="">
        <div className="">
          <h2 className="">Hello👋</h2>
          <p className="">What do you want?</p>
        </div>
        <div className="">
          <input type="text" className="" />
          <button style={{ backgroundColor: "#FE043C" }} className="">
            Search
          </button>
        </div>
      </div>
      <hr className="" />
      <Categories />
    </section>
  );
};

export default Home;
