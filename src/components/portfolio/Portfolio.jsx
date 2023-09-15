"use client";
import React, { useEffect, useState } from "react";
import "./portfolio.scss";
// import PortfolioList from "../portfolioList/PortfolioList";
// import {
//   featuredPortfolio,
//   mobilePortfolio,
//   webPortfolio,
//   designPortfolio,
//   brandingPortfolio,
// } from "@/app/data";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Portfolio() {
  // const [works, setWorks] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     setError(null);
  //     const apiUrl = "http://localhost:3000/api/works";
  //     const data = await fetch(apiUrl).then((res) => res.json());

  //     setWorks(data);
  //   };
  //   fetchData()
  //     .catch(setError)
  //     .finally(() => setLoading(false));
  // }, []);

  // if (error) return <div>Failed to load !</div>;
  // if (loading || works.length)
  //   return (
  //     <div
  //       style={{
  //         display: "flex",
  //         alignItems: "center",
  //         justifyContent: "center",
  //         textAlign: "center",
  //         fontSize: "40px",
  //       }}
  //     >
  //       Loading...
  //     </div>
  //   );

  const URL = "http://localhost:3000/api/works";
  const { data, error } = useSWR(URL, fetcher);

  if (error) return <div>Failed to load !</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
          {data?.map((work) => (
            <div key={work._id}>{work.category}</div>
          ))}
        </ul>
        {/* <div className="portfolioContainer">
          {data.map((d) => (
            <div className="item" key={d.id}>
              <img
                src={d.img}
                alt={d.title}
                width={500}
                height={276}
                className="img"
              />

              <h3>{d.title}</h3>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
}
