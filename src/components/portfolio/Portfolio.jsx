import React, { useEffect, useState } from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import {
  featuredPortfolio,
  mobilePortfolio,
  webPortfolio,
  designPortfolio,
  brandingPortfolio,
} from "@/app/data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    { id: "featured", title: "Featured" },
    { id: "web", title: "Web App" },
    { id: "mobile", title: "Mobile App" },
    { id: "design", title: "Design" },
    { id: "branding", title: "Branding" },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "branding":
        setData(brandingPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
  return (
    <>
      <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
          {list.map((item) => (
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
              key={item.id}
            />
          ))}
        </ul>
        <div className="portfolioContainer">
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
        </div>
      </div>
    </>
  );
}
