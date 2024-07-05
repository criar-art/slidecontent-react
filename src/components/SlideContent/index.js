/* eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./style.scss";

function SlideContent(props) {
  const { t } = useTranslation();
  const slideContentRef = useRef(null);
  const slideNavigationRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const slideContent = slideContentRef.current;
    const slideItems = slideContent.querySelectorAll(".slide-item");
    setSlides(slideItems);

    const updateActiveSlide = (index) => {
      slideItems.forEach((slide, i) => {
        slide.classList.toggle("actived", i === index);
      });
    };

    const nextHandler = () => {
      setActiveSlideIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % slideItems.length;
        updateActiveSlide(newIndex);
        return newIndex;
      });
    };

    const prevHandler = () => {
      setActiveSlideIndex((prevIndex) => {
        const newIndex = (prevIndex - 1 + slideItems.length) % slideItems.length;
        updateActiveSlide(newIndex);
        return newIndex;
      });
    };

    let slideAnimationInitial = setInterval(nextHandler, 6000);

    if (props.animation) {
      clearInterval(slideAnimationInitial);

      const slideAnimationOptions = setInterval(() => {
        if (props.animation.direction === "prev") {
          prevHandler();
        } else {
          nextHandler();
        }
      }, props.animation.time);

      if (props.animation.disabled) {
        clearInterval(slideAnimationOptions);
      }

      return () => {
        clearInterval(slideAnimationOptions);
      };
    }

    return () => {
      clearInterval(slideAnimationInitial);
    };
  }, [props.animation]);

  const handlePrevClick = () => {
    setActiveSlideIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        slide.classList.toggle("actived", i === newIndex);
      });
      return newIndex;
    });
  };

  const handleNextClick = () => {
    setActiveSlideIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % slides.length;
      slides.forEach((slide, i) => {
        slide.classList.toggle("actived", i === newIndex);
      });
      return newIndex;
    });
  };

  const bulletHandler = (index) => {
    setActiveSlideIndex(index);
    slides.forEach((slide, i) => {
      slide.classList.toggle("actived", i === index);
    });
  };

  return (
    <section
      id={props.id}
      className={`slide-content${props.border ? " border" : ""}${
        props.squared ? " squared" : ""
      }`}
      ref={slideContentRef}
    >
      <div className="slide-contents">{props.children}</div>
      {props.nav === "true" && (
        <>
          <div className="slide-navigation" ref={slideNavigationRef}>
            <button
              className="btn prev"
              type="button"
              onClick={handlePrevClick}
            >
              {t("to_left")}
            </button>
            <button
              className="btn next"
              type="button"
              onClick={handleNextClick}
            >
              {t("to_right")}
            </button>
          </div>
          <div className="slide-bullets">
            {Array.from({ length: slides.length }).map((_, index) => (
              <button
                key={index}
                className={`bullet ${index === activeSlideIndex ? "active" : ""}`}
                onClick={() => bulletHandler(index)}
              ></button>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default SlideContent;
