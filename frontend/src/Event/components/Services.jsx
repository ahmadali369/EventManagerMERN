import React from "react";


const Services = () => {
  const services = [
    {
      id: 1,
      url: "../../../public/birthday.jpg",
      title: "Birthday Planning",
    },
    {
      id: 2,
      url: "../../../public/anniversary.jpg",
      title: "Anniversary Planning",
    },
    {
      id: 3,
      url: "../../../public/camping.jpg",
      title: "Camping Trip Planning",
    },
    {
      id: 4,
      url: "../../../public/gamenight.jpg",
      title: "Game Night Planning",
    },
    {
      id: 5,
      url: "../../../public/party.jpg",
      title: "Party Planning",
    },
    {
      id: 6,
      url: "../../../public/wedding.jpg",
      title: "Wedding Planning",
    },
  ];
  return (
    <>
      <div className="services container">
        <h2>OUR SERVICES</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
