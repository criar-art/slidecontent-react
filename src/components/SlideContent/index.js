/* eslint-disable */
import React, { useEffect, useRef } from 'react';
import { useTranslation } from "react-i18next";
import './style.scss';

function SlideContent(props) {
  const { t } = useTranslation();
  const slideContentRef = useRef(null);
  const slideNavigationRef = useRef(null);

  useEffect(() => {
    let slideAnimationOptions;
    const slideContent = slideContentRef.current;
    const slides = slideContent.querySelectorAll(".slide-item");

    const nextHandler = () => {
      for (let item of slides) {
        if (item.classList.contains("actived")) {
          item.classList.remove("actived");
          if (item.nextElementSibling) {
            item.nextElementSibling.classList.add("actived");
          } else {
            slides[0].classList.add("actived");
          }
          break;
        }
      }
    };

    const prevHandler = () => {
      for (let item of slides) {
        if (item.classList.contains("actived")) {
          item.classList.remove("actived");
          if (item.previousElementSibling) {
            item.previousElementSibling.classList.add("actived");
          } else {
            slides[slides.length - 1].classList.add("actived");
          }
          break;
        }
      }
    };

    let slideAnimationInitial = setInterval(nextHandler, 6000);

    if (props.animation) {
      clearInterval(slideAnimationInitial);

      slideAnimationOptions = setInterval(() => {
        if (props.animation.direction === "prev") {
          prevHandler();
        } else {
          nextHandler();
        }
      }, props.animation.time);

      if (props.animation.disabled) {
        clearInterval(slideAnimationOptions);
      }
    }

    return () => {
      clearInterval(slideAnimationInitial);
      clearInterval(slideAnimationOptions);
    };
  }, [props.animation]);

  const handlePrevClick = () => {
    const slides = slideContentRef.current.querySelectorAll(".slide-item");
    for (let item of slides) {
      if (item.classList.contains("actived")) {
        item.classList.remove("actived");
        if (item.previousElementSibling) {
          item.previousElementSibling.classList.add("actived");
        } else {
          slides[slides.length - 1].classList.add("actived");
        }
        break;
      }
    }
  };

  const handleNextClick = () => {
    const slides = slideContentRef.current.querySelectorAll(".slide-item");
    for (let item of slides) {
      if (item.classList.contains("actived")) {
        item.classList.remove("actived");
        if (item.nextElementSibling) {
          item.nextElementSibling.classList.add("actived");
        } else {
          slides[0].classList.add("actived");
        }
        break;
      }
    }
  };

  return (
    <section
      id={props.id}
      className={`slide-content${props.border ? ' border' : ''}${props.squared ? ' squared' : ''}`}
      ref={slideContentRef}
    >
      <div className="slide-contents">
        {props.children}
      </div>
      {props.nav === "true" &&
        <div className="slide-navigation" ref={slideNavigationRef}>
          <button className="btn prev" type="button" onClick={handlePrevClick}>{t('to_left')}</button>
          <button className="btn next" type="button" onClick={handleNextClick}>{t('to_right')}</button>
        </div>
      }
    </section>
  );
}

export default SlideContent;
