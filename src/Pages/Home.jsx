import React, { useEffect } from "react";
import Banner from "../Component/Banner";
import { useLoaderData, useLocation } from "react-router";
import Populargames from "../Component/Populargames";
import NewsLetter from "../Component/NewsLetter";

const Home = () => {
  const LoaderData = useLoaderData();
  const data = LoaderData; // fetched games.json

  const pathname=useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className=" mt-5">
      <section className="banner">
        <Banner data={data} />
      </section>
      <section className="popular-games ">
        <Populargames></Populargames>
      </section>

      <section className="newsletter">
        <NewsLetter></NewsLetter>
      </section>
    </div>
  );
};

export default Home;
