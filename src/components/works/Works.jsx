import React, { useState } from "react";
import "./works.scss";
import { MdOutlineDevices } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useSWR from "swr";

export default function Works() {
  const fetcher = (...args) =>
    fetch(...args).then((res) => res.json());
  const [currentSlide, setCurrentSlide] = useState(0);
  const URL = "http://localhost:3000/api/works";
  const { data, error } = useSWR(URL, fetcher);

  if (error) return <div>Failed to load !</div>;
  if (!data) return <div>Loading...</div>;

  // const data = [
  //   {
  //     id: 0,
  //     title: "Mobile Media App",
  //     desc: "Torquent ad blandit euismod litora mollis iaculis morbi quam quisque sociosqu sagittis turpis cras",
  //     img: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2268&q=80",
  //   },
  //   {
  //     id: 1,
  //     title: "Mobile UI Design",
  //     desc: "Torquent ad blandit euismod litora mollis iaculis morbi quam quisque sociosqu sagittis turpis cras, tellus sociis augue nascetur est hac habitasse condimentum nam bibendum ",
  //     img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
  //   },
  //   {
  //     id: 2,
  //     title: "Mobile Web Design",
  //     desc: "Torquent ad blandit euismod litora mollis iaculis morbi quam quisque sociosqu sagittis turpis cras, tellus sociis augue nascetur est hac habitasse condimentum nam bibendum malesuada.",
  //     img: "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2835&q=80",
  //   },
  //   {
  //     id: 3,
  //     title: "mobile web banking",
  //     desc: "Torquent ad blandit euismod litora mollis iaculis morbi quam quisque sociosqu sagittis turpis cras, tellus sociis augue nascetur est hac habitasse condimentum nam bibendum malesuada.",
  //     img: "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2836&q=80",
  //   },
  // ];
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(
          currentSlide > 0 ? currentSlide - 1 : data.length - 1
        )
      : setCurrentSlide(
          currentSlide < data.length - 1 ? currentSlide + 1 : 0
        );
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((work, id) => (
          <div className="worksContainer" key={id}>
            <div className="worksItem">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <MdOutlineDevices size={180} className="img" />
                  </div>
                  <h2>{work.title}</h2>
                  <p>{work.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                {" "}
                <img src={work.images} alt={work.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <IoIosArrowBack
        color="white"
        size={250}
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <IoIosArrowForward
        color="white"
        size={250}
        className="arrow right"
        onClick={() => handleClick()}
      />
    </div>
  );
}
