// import Header from "./Header";

// const Hero = () => {
//   return (
//     <div
//       className="relative bg-cover bg-center bg-no-repeat h-screen"
//       style={{ backgroundImage: "url('/bg.jpg')" }}
//     >
//       <div className="absolute inset-0 "></div> {/* Optional Overlay */}
//       <Header />
//     </div>
//   );
// };

// export default Hero;

// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Gif98 from "@/../public/hero.gif"; // Adjust the path based on your project structure
// import Header from "./Header";



// const Hero = () => {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="relative bg-cover bg-center bg-no-repeat h-[190vh] overflow-auto" 
//     style={{ backgroundImage: "url('/bg.jpg')"}}>
//       {/* Fixed Header at the Top */}
//       <div className="absolute top-0 left-0 w-full z-50">
//         <Header />
//       </div>

//       {/* Image Animation */}
//       <div className="pt-36 flex justify-center items-start h-full">
//         <motion.div
//           initial={{ scale: 1, opacity: 1 }}
//           animate={{
//             scale: 1 + scrollY * 0.009, // Zoom effect
//             opacity: Math.max(0, 1 - scrollY * 0.002), // Gradually fade out
//           }}
//           transition={{ duration: 0.1, ease: "easeOut" }}
//           className="relative"
//         >
//           <Image className="w-[462px]" src={Gif98} alt="Hero Gif" />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Gif98 from "@/../public/hero.gif"; // Adjust path
// import Header from "./Header";

// const Hero = () => {
//   const [scrollY, setScrollY] = useState(0);
//   const [delayedScrollY, setDelayedScrollY] = useState(0);
//   const delayScroll = 200; // Animation delay threshold (change as needed)

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPos = window.scrollY;

//       if (scrollPos > delayScroll) {
//         setDelayedScrollY(scrollPos - delayScroll);
//       } else {
//         setDelayedScrollY(0);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div
//       className="relative bg-cover bg-center bg-no-repeat h-[190vh] overflow-auto"
//       style={{ backgroundImage: "url('/bg.jpg')" }}
//     >
//       {/* Fixed Header at the Top */}
//       <div className="absolute top-0 left-0 w-full z-50">
//         <Header />
//       </div>

//       {/* Image Animation */}
//       <div className="pt-36 flex justify-center items-start h-full">
//         <motion.div
//           initial={{ scale: 1, opacity: 1 }}
//           animate={{
//             scale: 1 + delayedScrollY * 0.009, // Zoom effect
//             opacity: Math.max(0, 1 - delayedScrollY * 0.002), // Gradually fade out
//           }}
//           transition={{ duration: 0.2, ease: "easeOut" }} // Slightly smoother transition
//           className="relative"
//         >
//           <Image className="w-[462px]" src={Gif98} alt="Hero Gif" />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Gif98 from "@/../public/hero.gif"; // Adjust path
// import Header from "./Header";

// const Hero = () => {
//   const [scrollY, setScrollY] = useState(0);
//   const [delayedScrollY, setDelayedScrollY] = useState(0);
//   const delayScroll = 300; // Delay before animation starts

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPos = window.scrollY;

//       if (scrollPos > delayScroll) {
//         setDelayedScrollY(scrollPos - delayScroll);
//       } else {
//         setDelayedScrollY(0);
//       }

//       setScrollY(scrollPos); // Store scroll value for parallax effect
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="relative w-full h-[200vh] overflow-hidden">
//       {/* Parallax Background */}
//       <motion.div
//         className="absolute inset-0 bg-cover bg-center w-full h-[300vh]"
//         style={{ backgroundImage: "url('/bg.jpg')"}}
//         animate={{
//           y: -scrollY * 0.9, // Move background slower than scroll
//         }}
//         transition={{ ease: "linear" }}
//       />

//       {/* Fixed Header */}
//       <div className="absolute top-0 left-0 w-full z-50">
//         <Header />
//       </div>

//       {/* Centered Image Animation */}
//       <motion.div
//         className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//         initial={{ scale: 1, opacity: 1 }}
//         animate={{
//           scale: 1 + delayedScrollY * 0.009, // Zoom effect
//           opacity: Math.max(0, 1 - delayedScrollY * 0.002), // Fade out gradually
//         }}
//         transition={{ duration: 0.2, ease: "easeOut" }}
//       >
//         <Image className="w-[462px]" src={Gif98} alt="Hero Gif" />
//       </motion.div>
//     </div>
//   );
// };

// export default Hero;



// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Typewriter from "typewriter-effect";
// import Gif98 from "@/../public/hero.gif"; // Adjust path

// import DownArrow from "@/../public/angle-down.png"

// const Hero = () => {
//   const [scrollY, setScrollY] = useState(0);
//   const [delayedScrollY, setDelayedScrollY] = useState(0);
//   const [percentage, setPercentage] = useState("10%");
//   const fullText =
//     "Rebooting democracy... please stand by";
//   const delayScroll = 300; // Delay before animation starts

//   // Percentage update using recursive timeout
//   useEffect(() => {
//     const percentStages = ["10%", "20%", "30%", "40%", "50%", "60%", "80%",  "90%",  "100%"];
//     let stageIndex = 0;
//     const updatePercentage = () => {
//       if (stageIndex < percentStages.length) {
//         setPercentage(percentStages[stageIndex]);
//         stageIndex++;
//         setTimeout(updatePercentage, 150); // Update every 1 second
//       }
//     };
//     updatePercentage();
//   }, []);

//   // Scroll handling for parallax and image animation
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPos = window.scrollY;
//       setDelayedScrollY(scrollPos > delayScroll ? scrollPos - delayScroll : 0);
//       setScrollY(scrollPos);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="relative w-full h-[220vh] overflow-hidden">
//       {/* Parallax Background */}
//       <motion.div
//         className="absolute  inset-0 bg-cover bg-center w-full h-[330vh]"
//         style={{ backgroundImage: "url('/bg.jpg')" }}
//         animate={{ y: -scrollY * 0.9 }}
//         transition={{ ease: "linear" }}
//       />

//       {/* Fixed Header */}
//       {/* <div className="absolute top-0 left-0 w-full z-50">
//         <Header />
//       </div> */}

//       {/* Centered Image Animation */}
//       <motion.div
//         className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//         initial={{ scale: 1, opacity: 1 }}
//         animate={{
//           scale: 1 + delayedScrollY * 0.009,
//           opacity: Math.max(0, 1 - delayedScrollY * 0.002),
//         }}
//         transition={{ duration: 0.2, ease: "easeOut" }}
//       >
//         <Image className="w-[462px]" src={Gif98} alt="Hero Gif" />

//         {/* Animated Text Inside the GIF */}
//         <div
//           className="absolute pr-[4.5rem] inset-0 flex pt-[19rem] gap-6 flex-row justify-center items-center text-[#29e000] font-pixelade text-[17.5px]"
//           style={{ whiteSpace: "pre" }}
//         >
//         <Typewriter
//   options={{
//     autoStart: false,
//     delay: 20,
//     loop: false,
//   }}
//   onInit={(typewriter) => {
//     typewriter
//       .typeString(fullText)
//       .callFunction(() => {
//         console.log("Typing complete!");
//       })
//       .start();
//   }}
// />

// {/* Move Percentage to a Fixed Position */}
// <motion.p
//   className="absolute right-10"  // Fixes its position on the right
//   initial={{ opacity: 0 }}
//   animate={{ opacity: 1 }}
//   transition={{ duration: 0.5 }}
// >
//   {percentage}
// </motion.p>

//         </div>
//       </motion.div>

//        {/* Down Arrow - Place it HERE */}
       
//        <div
// >
//   <Image className="w-[990px]" src={DownArrow} alt="Down Arrow" />
// </div>

   
//     </div>
//   );
// };

// export default Hero;

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Gif98 from "@/../public/hero.gif"; // Adjust path
import DownArrow from "@/../public/angle-down.png"; // Adjust path


const Hero = () => {
  // const [scrollY, setScrollY] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrollY, setScrollY] = useState(0);
  const [delayedScrollY, setDelayedScrollY] = useState(0);
  const [showArrow, setShowArrow] = useState(true);
  const [percentage, setPercentage] = useState("10%");
  const fullText = "Rebooting democracy... please stand by";
  const delayScroll = 600;

  useEffect(() => {
    const percentStages = [
      "10%",
      "20%",
      "30%",
      "40%",
      "50%",
      "55%",
      "56%",
      "57%",
      "60%",
      "80%",
      "90%",
      "94%",
      "96%",
      "98%",
      "100%",
    ];
    let stageIndex = 0;
    const updatePercentage = () => {
      if (stageIndex < percentStages.length) {
        setPercentage(percentStages[stageIndex]);
        stageIndex++;
        setTimeout(updatePercentage, 55);
      }
    };
    updatePercentage();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setDelayedScrollY(scrollPos > delayScroll ? scrollPos - delayScroll : 0);
      setScrollY(scrollPos);
      setShowArrow(scrollPos <= 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-[200vh] overflow-hidden">
      {/* Fixed Background */}
      <div
        className="fixed inset-0 bg-cover bg-center w-full h-screen"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      />

      {/* Fixed Centered GIF Animation */}
      <motion.div
        className="fixed top-1/2 mr-5  sm:mr-0 left-1/6 -translate-x-1/12  sm:left-1/2 transform sm:-translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 1, opacity: 0.2 }}
        animate={{
          scale: 1 + delayedScrollY * 0.002,
          opacity: Math.max(0, 2 - delayedScrollY * 0.002),
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image className="sm:w-[462px]" src={Gif98} alt="Hero Gif" />

        {/* Down Arrow Animation */}
        {showArrow && (
          <motion.div
            className="absolute mt-14 left-1/2 transform -translate-x-1/2"
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              className="w-[35.2px] h-[30px]"
              src={DownArrow}
              alt="Down Arrow"
            />
          </motion.div>
        )}

        {/* Animated Text */}
        <div
          className="absolute pr-[4.5rem] inset-0 hidden md:flex pt-[19rem] gap-6 flex-row justify-center items-center text-[#29e000] font-pixelade text-[17.5px]"
          style={{ whiteSpace: "pre" }}
        >
          <Typewriter
            options={{ autoStart: false, delay: 20, loop: false }}
            onInit={(typewriter) => typewriter.typeString(fullText).start()}
          />

          <motion.p
            className="absolute right-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {percentage}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
