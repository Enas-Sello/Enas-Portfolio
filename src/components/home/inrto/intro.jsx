import './intro.css';
import { HiArrowNarrowRight } from 'react-icons/hi';
import introImg from "./Startup life.gif";
import { Link } from "react-scroll";
const Intro = () =>
{
  const intro= {
        name: "Enas Awad",
        jobTitle: "Full stack Web Developer",
        stack:"Mearn Stak , Ui Ux Desiner",
      }
  return (
    <div name="home" className="flex w-full h-screen bg-[#5031a9]">
      <div
        className="intro
            flex flex-col justify-center h-screen capitalize max-w[1000px] mx-auto px-8"
      >
        <p className="font-bold text-xl sm:text-4xl ">hi my name is </p>
        <h1 className="text-[#fcd303] font-bold text-4xl sm:text-8xl ">
          {intro.name}
        </h1>
        <h2 className="text-[#ffffff] text-4xl sm:text-4xl">
          {intro.jobTitle}
        </h2>
        <p className="text-[#ffffff] py max-w-[700px]">{intro.stack}</p>
        <div>
          <button className="group border-4 px-4 py-1 my-2 flex items-center rounded-2xl text-[#ffffff] font-bold capitalize hover:border-[#fcd303] ">
            <Link to="Projects" smooth={true} duration={500}>
              view work
            </Link>
            <span className=" group-hover:rotate-90 decoration-1000 group-hover:text-[#fcd303]">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
          <div className="icons mx-2  flex gap-0">
            <i class="fa-brands fa-github text-4xl mx-3 cursor-pointer text-[#ffffff] hover:text-[#fcd303]"></i>
            <i class="fa-brands fa-linkedin-in text-4xl mx-3 cursor-pointer text-[#ffffff] hover:text-[#fcd303]"></i>
          </div>
        </div>
      </div>
      <div className="md:block w-50 mt-[10%] mr-16 hidden ">
        <img className="rounded-3xl" src={introImg} alt="intro"></img>
      </div>
    </div>
  );
};

export default Intro
