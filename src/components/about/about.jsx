import React from "react";

const About = ( ) => {

  const about= {
        name: "Enas"
      }
  return (
    <div
      name="About"
      className=" w-full h-screen bg-[#5031a9] text-[#ffffff] capitalize"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div
          className="container 
                max-[1000px] w-full grid grid-cols-2 gap-8"
        >
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#fcd303]">
              about
            </p>
          </div>
          <div></div>
        </div>

        <div
          className="
                max-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4"
        >
          <div className="sm:text-right text-4xl font-bold">
            <p>hi i'm {about.name} take a look around</p>
          </div>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ad
            enim, ab nulla inventore quibusdam rem cumque veritatis aspernatur
            earum fugiat harum ratione, adipisci optio maiores autem error eaque
            aliquid.
          </div>
        </div>
        <a
          className="border-4 px-2 py-1 mt-4 font-normal rounded-2xl hover:text-[#ffffff] hover:border-[#fcd303]  "
          href="../assets/cv-updated.pdf"
          download
        >
          My Reasum
        </a>
      </div>
    </div>
  );
};

export default About