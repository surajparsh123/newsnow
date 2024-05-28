import React from "react";

const Gallery = () => {
  const phases = [
    { img: "src/assets/Rectangle.png" },
    {
        img: "src/assets/Rectangle2.png" 
    },
    {
        img: "src/assets/Rectangle3.png" 
    },
    {
        img: "src/assets/Rectangle4.png" 
    },
    {
        img: "src/assets/Rectangle5.png" 
    },
    {
        img: "src/assets/Rectangle4.png" 
    },
    {
        img: "src/assets/Rectangle2.png" 
    },
  ];
  return (
    <>
      <div className="bg-black text-white min-h-screen flex flex-col items-center py-10 transition-colors duration-300">
        <h1 className="text-4xl font-bold mb-4">Explore Gallery</h1>
        <p className="max-w-2xl text-center mb-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting.{" "}
        </p>
        <div className="w-full flex flex-col items-center -space-y-24">
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`flex w-full ${
                index % 2 === 0
                  ? "justify-start ml-40 transform transition-transform duration-300 hover:scale-105"
                  : "justify-end mr-32  transform transition-transform duration-300 hover:scale-105"
              }`}
            >
              <div className=" text-white p-6 rounded-lg w-6/12">
                <img src={phase.img} />

                {/* <h2 className="text-2xl font-bold mb-2">{phase.title}</h2>
              <p>{phase.description}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
