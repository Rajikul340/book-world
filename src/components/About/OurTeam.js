/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import TeamCard from "./TeamCard";
import user1 from '../../image/user1.jpg'
import user2 from '../../image/user2.jpg'
import user3 from '../../image/user3.jpg'
import user4 from '../../image/user4.jpg'


const  OurTeam = ()=> {
  
  const cardData = [
    {
      id: 1,
      name: "Aurea Rica",
      title: "CEO, Book World",
      image: user1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, pariatur.",
      icon:      "https://www.linkedin.com/",
      linkedin:  "https://www.linkedin.com/",
      bgClass:
        "text-black",
    },
    {
      id: 2,
      name: "Maggie ward",
      title: "Full Stack developer",
      image: user2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, pariatur.",
      icon:    "https://www.linkedin.com/",
      linkedin:
      "https://www.linkedin.com/",
      bgClass:
      "text-black",
    },
    {
      id: 3,
      name: "Reiven Eric Miranda",
      title: "Software Engineer at Book world",
      image: user3,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, pariatur.",
      icon:  "https://www.linkedin.com/",
      linkedin:
      "https://www.linkedin.com/",
      bgClass:
        "text-black",
    },
    {
      id: 4,
      name: "Naina Soni",
      title: "It recruiter at book world ",
      image:user4,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, pariatur.",
      icon:   "https://www.linkedin.com/",
      linkedin:
        "https://www.linkedin.com/",
        bgClass:
        "text-black",
    },

  ];

  return (
    <div className="p-10 bg-white">
      <h1 className="text-center text-3xl font-bold font-serif">Our Team</h1>
      <p className="text-center mt-1">The book world team</p>

      <div className="flex justify-center">
        <div className="grid mt-8 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card) => (
            <TeamCard key={card.id} card={card}></TeamCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
