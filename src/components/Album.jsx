import "./Album.css";
import { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../../src/img/img1.png";
import img2 from "../../src/img/img2.jpg";
import img3 from "../../src/img/img3.jpg";
import img4 from "../../src/img/img4.jpg";
import img5 from "../../src/img/img5.jpg";
import img6 from "../../src/img/img6.jpg";
import img7 from "../../src/img/img7.jpg";
import img8 from "../../src/img/img8.jpg";
import img9 from "../../src/img/img9.jpg";
import img10 from "../../src/img/img10.jpg";
import img11 from "../../src/img/img11.jpg";
import img12 from "../../src/img/img12.jpg";
import img13 from "../../src/img/img13.jpg";
import img14 from "../../src/img/img14.jpg";
import img15 from "../../src/img/img15.jpg";
import img16 from "../../src/img/img16.jpg";
import img17 from "../../src/img/img17.jpg";
import img18 from "../../src/img/img18.jpg";
import img19 from "../../src/img/img19.jpg";
import img20 from "../../src/img/IMG_20230331_172705.jpg";
import img21 from "../../src/img/IMG_20230405_234633.jpg";
import img22 from "../../src/img/IMG_20230724_234459_219.webp";
import img23 from "../../src/img/IMG_20230724_234539_585.webp";
import img24 from "../../src/img/IMG_20230927_070944.jpg";
import img25 from "../../src/img/IMG_20231208_235720.jpg";
import img26 from "../../src/img/IMG_20240122_174635_841.webp";
import img27 from "../../src/img/IMG_20240219_153935.jpg";
import img28 from "../../src/img/IMG_20240512_014332.jpg";



const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

function Image({ id }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <section className="bg-black">
      <motion.div
        className="rounded-[1vw]"
        initial={false}
        animate={
          isLoaded && isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1, delay: 0.7 }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsInView(true)}
      >
        <img
          className="im bg-contain"
          src={`${id}`}
          alt=""
          onLoad={() => setIsLoaded(true)}
        />
      </motion.div>
    </section>
  );
}

export default function Album() {
  return (
    <>
      <div
        className="flex flex-col  h-[100vh] justify-center items-center bg-black"
        style={{
          scrollSnapAlign: "center",
          position: "relative",
          width: "100%",
          // height: "100%",
        }}
      >
        <div className="mt-[12vw] flex flex-col gap-y-6 ">


        <div className="flex  gap-3 ">
          <h1 className="inline-block text-[12vw] text-center  text-yellow-600">Shot</h1>
          <h1 className="text-[12vw] text-center text-slate-200">By</h1>
          <h1 className="text-[12vw] text-center  text-green-600">Taha</h1>
        </div>

        </div>


        <div className=" mt-[15vw]">
        <div className="flex gap-[0.7vw] mt-[10vw] w-[17vw] rounded-[0.7vw]  justify-center ">
          <h1 className="text-[4vw] text-center  text-white">Swipe</h1>
          <h1 className="text-[4vw] text-center text-white">up</h1>
          <h1 className="text-[4vw] text-center  text-white">for</h1>
          <h1 className="text-[4vw] text-center  text-white">gallery</h1>
        </div>
        </div>

      </div>

      {/* <div className="w-full h-[0.3px] bg-white"></div> */}

      {[
        img1,
        img2,
        img3,
        img5,
        img6,
        img7,
        img9,
        img10,
        // img11,
        img12,
        img13,
        img14,
        img15,
        img17,
        img18,
        img19,
        img20,
        img21,
        img22,
        img23,
        img24,
        img25,
        img26,
        img27,
        img28,
      ].map((image) => (
        <Image id={image} />
      ))}
    </>
  );
}
