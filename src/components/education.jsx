import { React, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./lilcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 firt:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}>
        <h3 className="text-2xl font-bold capitalize sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="font-medium capitalize text-dark/75 dark:text-light/50 xs:text-sm">
          {time} | {place}
        </span>
        <p className="w-full font-medium md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="w-full mb-32 font-bold text-center text-8xl lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl md:mb-16">
        Education
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute dark:bg-light left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="flex flex-col items-start justify-between w-full ml-4 xl:ml-2">
          <Details
            type="Bachelor Of Software Engineering"
            time="2021-present"
            place="University Of Science And Technology Houari Boumediene (USTHB)"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Software Engineering.."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
