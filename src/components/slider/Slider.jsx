import React, { useEffect, useRef } from "react";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const Slider = ({partners}) => {
   
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current && partners && partners.length > 0) {
      new Splide(carouselRef.current, {
        perPage: 5,
        perMove: 1,
        gap: 3,
        type: "loop",
        focus: "center",
        drag: false,

        autoScroll: {
          speed: 0.8,
          waitForTransition: false,
          pauseOnHover: false,
          autoStart: true,
        },

        breakpoints: {
          1024: {
            perPage: 4,
            gap: 3,
          },
          768: {
            perPage: 3,
            gap: 3,
              autoScroll: {
              speed: 0.4, 
            },
          },

          500: {
            perPage: 2,
            gap: 3,
            autoScroll: {
              speed: 0.3, 
            },
          },
          300: {
            perPage: 1,
            gap: 3,
               autoScroll: {
              speed: 0.2, 
            },
          },
        },
        arrows: false,
        pagination: false,
      }).mount({ AutoScroll });
    }
  }, [partners]); 

  return (
    <div>Slider</div>
  )
}

export default Slider