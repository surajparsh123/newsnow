import React from "react";

const Roadmap = () => {

    const phases = [
        { title: "Phase 1", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting." },
        { title: "Phase 2", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting." },
        { title: "Phase 3", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting." },
        { title: "Phase 4", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting." }
      ];
  return (
    <>
     <div className=" text-white min-h-screen flex flex-col items-center py-10 transition-colors duration-300">
      <h1 className="text-4xl font-bold mb-4">Roadmap</h1>
      <p className="max-w-2xl text-center mb-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
      </p>
      <div className="w-full flex flex-col items-center space-y-10">
        {phases.map((phase, index) => (
          <div
            key={index}
            className={`flex w-full ${index % 2 === 0 ? 'justify-start ml-32  transform transition-transform duration-300 hover:scale-105' : 'justify-end mr-32  transform transition-transform duration-300 hover:scale-105'}`}
          >
            <div className="bg-[#778640] text-white p-6 rounded-lg w-96 m-4">
              <h2 className="text-2xl font-bold mb-2">{phase.title}</h2>
              <p>{phase.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    </>
   
  );
};

export default Roadmap;
