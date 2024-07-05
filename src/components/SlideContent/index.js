import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./style.scss";
import Hammer from "hammerjs";

function SlideContent(props) {
  const { t } = useTranslation();
  const slideContentRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [slides, setSlides] = useState([]);
  const minPanDistance = 100;

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
        const newIndex =
          (prevIndex - 1 + slideItems.length) % slideItems.length;
        updateActiveSlide(newIndex);
        return newIndex;
      });
    };

    // Configuração do HammerJS para pan (arrastar)
    const hammer = new Hammer(slideContent, {
      recognizers: [
        [Hammer.Pan, { direction: Hammer.DIRECTION_HORIZONTAL, threshold: minPanDistance }]
      ]
    });

    let panDirection = null;
    let panStartX = null;

    hammer.on("panstart", (event) => {
      panDirection = null;
      panStartX = event.center.x;
    });

    hammer.on("pan", (event) => {
      const currentX = event.center.x;
      const deltaX = currentX - panStartX;

      if (!panDirection) {
        // Determina a direção do pan baseado na distância mínima configurada
        panDirection = Math.abs(deltaX) >= minPanDistance ? (deltaX > 0 ? "right" : "left") : null;
      }

      if (panDirection === "left") {
        // Movimento para a esquerda, avançar slide
        if (deltaX < -minPanDistance) {
          nextHandler();
          panStartX = currentX; // Atualiza a posição inicial para evitar avanços múltiplos
        }
      } else if (panDirection === "right") {
        // Movimento para a direita, retroceder slide
        if (deltaX > minPanDistance) {
          prevHandler();
          panStartX = currentX; // Atualiza a posição inicial para evitar avanços múltiplos
        }
      }
    });

    hammer.on("panend", (event) => {
      panDirection = null;
    });

    // Inicia animação automática dos slides
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
  }, [props.animation, minPanDistance]);

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
          <div className="slide-navigation">
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
                className={`bullet ${
                  index === activeSlideIndex ? "active" : ""
                }`}
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
