import React from 'react';
import './style.scss';

function SlideItem(props) {
  return (
    <article className={ `${ props.className } slide-item ${props.actived ? " actived" : ""} `}>
      {props.url
        ? (
          <a data-testid="link-item" href={props.url} target={props.target}>
            <h1>{props.title}</h1>
            <img src={props.img} alt={props.title} />
          </a>
        ) : (
          <>
            <h1>{props.title}</h1>
            <img src={props.img} alt={props.title} />
          </>
        )
      }
    </article>
  );
}

export default SlideItem;
