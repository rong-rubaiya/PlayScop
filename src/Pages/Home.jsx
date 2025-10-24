import React from "react";
import Banner from "../Component/Banner";
import { useLoaderData } from "react-router";
import Populargames from "../Component/Populargames";

const Home = () => {
  const LoaderData = useLoaderData();
  const data = LoaderData; // fetched games.json

  return (
    <div className=" mt-5">
      <section className="banner">
        <Banner data={data} />
      </section>
      <section className="popular-games ">
        <Populargames></Populargames>
      </section>
    </div>
  );
};

export default Home;
