import React from "react";
import "./testimonials.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded, BiPaperPlane } from "react-icons/bi";

export default function Testimonials() {
  const data = [
    {
      id: 0,
      name: "Harry Potter",
      title: "Wizzard malgré lui",
      img: "https://resize.elle.fr/square_1280_webp/var/plain_site/storage/images/loisirs/livres/news/harry-potter-de-nouveaux-secrets-devoiles-2913738/53231812-1-fre-FR/Harry-Potter-de-nouveaux-secrets-devoiles.jpg",
      desc: "Cela fait un an que Michel m'aide à travailler ma communication chez les moldus et je l'adore ! Je ne peux pas imaginer la vie sans lui",
    },
    {
      id: 1,
      name: "Indiana Jones",
      title: "Professeur d'Histoire",
      img: "https://www.lexpress.fr/resizer/cmz9nNQvk45Sh1VQvgQW7t-wBdk=/970x548/cloudfront-eu-central-1.images.arcpublishing.com/lexpress/KIS5LTG5GRBRZAW4OOZ5GOYB2Q.jpg",
      desc: " J'en ai trouvé des trésors mais alors des commes Michel, jamais!!",
      featured: true,
    },
    {
      id: 2,
      name: "Walt Disney",
      title: "Vendeur de rêve",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/df/Walt_Disney_1946.JPG",
      desc: "J'adore ce mec! Il m’a fait gagner, à moi et à ma petite entreprise, beaucoup de temps!",
    },
  ];
  return (
    <div className="testimonial" id="testimonials">
      <h1>Témoignages</h1>
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
                <AiOutlineHeart size={20} color="#411207" />
                <BiMessageRounded size={20} color="#411207" />
                <BiPaperPlane size={20} color="#411207" />
              </div>
            </div>
            <div className="bottom">"{d.desc}"</div>
          </div>
        ))}
      </div>
    </div>
  );
}
