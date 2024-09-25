"use client";
import Image from "next/image";

import { motion, transform, useScroll } from "framer-motion";

function Herosection() {
  let theme = "light";
  return (
    <div className="flex flex-col sm:flex-row w-10/12 mx-auto py-16 sm:items-center">
      <div className="sm:w-6/12">
        <motion.div
          initial={{ x: -20 }}
          transition={{
            type: "spring",
            stiffness: 70,
          }}
          whileInView={{ x: 0 }}
        >
          <p className="text-lg font-black">Hey&apos; I am Aasim shah</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.1 }}
          transition={{
            type: "tween",
            delay: 0.5,
            duration: 2,
          }}
          whileInView={{ opacity: 1 }}
        >
          <p className=" font-semibold mt-4">
            Welcome to my digital Garden ☘🥀
          </p>
          <p className="font-medium mt-3">
            I{`'`}m a MERN stack developer with 3+ years of experience in
            building scalable web applications. Based in Pakistan, I specialize
            in creating dynamic solutions using MongoDB, Express.js, React, and
            Node.js. I excel in both frontend and backend development and offer
            expertise in crafting robust, user-centric applications. Passionate
            about open-source, I also provide consulting on modern development
            practices and strategies.
          </p>
        </motion.div>
      </div>
      {/* <motion.div
        initial={{ x: -10 }}
        transition={{
          type: "spring",
          stiffness: 70,
        }}
        whileInView={{ x: 10 }}
      >
        {theme && theme === "light" ? (
          <Image
            src={"/assets/1.jpg"}
            alt="assetImage"
            className="sm:ml-32 mt-3 mx-auto"
            width={350}
            height={350}
          />
        ) : (
          <Image
            src={"/assets/dark_hero.png"}
            alt="assetImage"
            className="sm:ml-36 mt-3 mx-auto"
            width={270}
            height={270}
          />
        )}
      </motion.div> */}
    </div>
  );
}

export default Herosection;
