import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
const PortnerCarousel = () => {
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
    partners &&
    partners.length > 0 &&
    partners[0].id && (
      <div className=" containers mx-auto">
        <h2 className="text-[#bebebe] sm:text-3xl text-center md:text-4xl md:text-start md:pl-5 xl:pl-0 font-[Light] uppercase  mb-10  ">
          {t("partners.our")}{" "}
          <span className="text-[#ff8a15]">{t("partners.partners")}</span>
        </h2>
        <div
          ref={carouselRef}
          id="partners-carousel"
          className="splide sm:px-5 xl:px-0"
        >
          <div className="splide__track">
            <ul className="splide__list">
              {partners.map((partner) => (
                <li key={partner.id} className="splide__slide">
                  <div className="flex items-center justify-center h-full ">
                    <img
                    className="w-[188px]"
                      src={partner.path}
                      alt="Partner's Logo"
                      draggable="false"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  );
}

export default PortnerCarousel