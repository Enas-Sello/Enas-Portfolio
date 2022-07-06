import React from 'react';
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineMobile,
} from "react-icons/ai";
function Footer() {
    return (
      <div
        name="footer"
        className="w-full bg-[#5031a9] text-[#ffffff] justify-center p-4"
      >
        <hr />
        <ul className="flex justify-center text-center text-4xl mt-3 ">
          <li className="text-dark">
            <a href="https://github.com/Enas-Sello">
              <AiFillGithub />
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/enas-sellow-36153219a/">
              <AiOutlineLinkedin />
            </a>
          </li>

          <li>
            <a href="#">
              <AiOutlineMail />
            </a>
          </li>

          <li>
            <a href="#">
              <AiOutlineMobile />
            </a>
          </li>
        </ul>
      </div>
    );
}

export default Footer