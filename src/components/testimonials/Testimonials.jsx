import React from "react";
import "./testimonials.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";

export default function Testimonials() {
  const data = [
    {
      id: 0,
      name: "Harry Potter",
      title: "Great magician",
      img: "https://resize.elle.fr/square_1280_webp/var/plain_site/storage/images/loisirs/livres/news/harry-potter-de-nouveaux-secrets-devoiles-2913738/53231812-1-fre-FR/Harry-Potter-de-nouveaux-secrets-devoiles.jpg",
      desc: "I have been using Michel for over a year now and I love it! I can't imagine life without it. It's so easy to use, and the customer service is great.",
    },
    {
      id: 1,
      name: "Indiana Jones",
      title: "A Fearless Adventurer",
      img: "https://www.lexpress.fr/resizer/cmz9nNQvk45Sh1VQvgQW7t-wBdk=/970x548/cloudfront-eu-central-1.images.arcpublishing.com/lexpress/KIS5LTG5GRBRZAW4OOZ5GOYB2Q.jpg",
      desc: "If you want to take your business to the next level, use Michel and don't look any further.",
      featured: true,
    },
    {
      id: 2,
      name: "Walt Disney",
      title: "The Dream Maker",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/df/Walt_Disney_1946.JPG",
      desc: "I love Michel! This is an amazing service and it has saved me and my small business so much time. I plan to use it for a long time to come.",
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
              <div className="title">
                <h3>{d.name}</h3> • <h4>{d.title}</h4>
              </div>
            </div>
            <div className="center">
              <img src={d.img} alt={d.name} className="user" />
              <div className="icons">
                <AiOutlineHeart size={20} className="icon" />
                <BiMessageRounded size={20} className="icon" />
              </div>
            </div>
            <div className="bottom">{d.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
