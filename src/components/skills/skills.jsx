import React from "react";
import HTML from '../assets/html.png';
import CSS from'../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react2.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from "../assets/tailwind.png";
import Mongo from '../assets/mongo.png';
    //    bg-[#5031a9] text-[#ffffff]    border-[#fcd303]
const img = [
  {
    id: 1,
    img: HTML,
    title: "html",
  },
  {
    id: 2,
    img: CSS,
    title: "CSS",
  },
  {
    id: 3,
    img: JavaScript,
    title: "JavaScript",
  },
  {
    id: 4,
    img: ReactImg,
    title: "ReactImg",
  },
  {
    id: 5,
    img: GitHub,
    title: "GitHub",
  },
  {
    id: 6,
    img: Node,
    title: "Node js",
  },
  {
    id: 7,
    img: Mongo,
    title: "MONGO-DB",
  },
  {
    id: 8,
    img: Tailwind,
    title: "Tailwind",
  },
];


const Skills = () => {
  return (
    <div name="skills" className="w-full bg-[#5031a9] text-[#ffffff]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#fcd303] ">
            Skills
          </p>
          <p className="py-4"> These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 ">
          {
            img.map( ( {
              id,img,title
            } ) =>
            {
              return (
                <div
                key={id}
                className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
              >
                <img className="w-20 mt-2 mx-auto " src={img} alt={title} />
                <p className="my-4">{title}</p>
              </div>
              )
              
            }
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Skills;