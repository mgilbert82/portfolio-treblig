import React from "react";
import "./testimonials.scss";
import { PiArrowBendDownRightBold } from "react-icons/pi";
import { BsPlayBtn } from "react-icons/bs";

export default function Testimonials() {
  const data = [
    {
      id: 0,
      name: "Harry Potter",
      title: "Great magician",
      img: "https://resize.elle.fr/square_1280_webp/var/plain_site/storage/images/loisirs/livres/news/harry-potter-de-nouveaux-secrets-devoiles-2913738/53231812-1-fre-FR/Harry-Potter-de-nouveaux-secrets-devoiles.jpg",
      desc: "Mattis augue vehicula cursus integer dignissim senectus primis habitasse suspendisse volutpat maecenas, interdum eget ullamcorper pulvinar odio tempor dis fringilla viverra sollicitudin.",
    },
    {
      id: 1,
      name: "Indiana Jones",
      title: "A Fearless Adventurer",
      img: "https://www.lexpress.fr/resizer/cmz9nNQvk45Sh1VQvgQW7t-wBdk=/970x548/cloudfront-eu-central-1.images.arcpublishing.com/lexpress/KIS5LTG5GRBRZAW4OOZ5GOYB2Q.jpg",
      desc: "Mattis augue vehicula cursus integer dignissim senectus primis habitasse suspendisse volutpat maecenas, interdum eget ullamcorper pulvinar odio tempor dis fringilla viverra sollicitudin.",
      featured: true,
    },
    {
      id: 2,
      name: "Walt Disney",
      title: "The Dream Maker",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/df/Walt_Disney_1946.JPG",
      desc: "Mattis augue vehicula cursus integer dignissim senectus primis habitasse suspendisse volutpat maecenas, interdum eget ullamcorper pulvinar odio tempor dis fringilla viverra sollicitudin.",
    },
  ];
  return (
    <div className="testimonial" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div
            className={d.featured ? "card featured" : "card"}
            key={d.id}
          >
            <div className="top">
              <PiArrowBendDownRightBold size={40} className="left" />

              <img src={d.img} alt={d.name} className="user" />
              <BsPlayBtn size={40} className="right" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
