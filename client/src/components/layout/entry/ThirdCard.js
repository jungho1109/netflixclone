import React, { Fragment,useState } from "react";
import styled from "styled-components";
import logo from "./logo.png";

const CardBlock = styled.div`
  border-top: 8px solid #222;
  height: 60vh;

  .card {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 3rem;
    padding-bottom: 3rem;

    &__text {
      width: 35%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      line-height: 1.2;
      color: #ffffff;

      &-title {
        font-size: 3.5rem;
        font-weight:bold;
        
      }

      &-lead {
        font-size: 1.7rem;
        line-height: 1.3;
        padding-top:1rem;

      }
    }

    &__img {
      width: 35%;
      height: 100%;
      background-color: #000;
      position: relative;


      &-background {
        width: 100%;
        height: 100%;
        z-index: 0;
      }

      &-logo {
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 40%;
        height: 12rem;
      }
    }
  }
`;

const ThirdCard = () => {
  const [text, setText] = useState({
    title: "Watch everywhere.",
    lead:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
  });
  return (
    <Fragment>
      <CardBlock>
        <div className="card">
          <div className="card__text">
            <div className="card__text-title">{text.title}</div>
            <div className="card__text-lead">{text.lead}</div>
          </div>
          <div className="card__img">
            <img
              className="card__img-background"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
              alt=""
            />
            <img className="card__img-logo" src={logo} alt="" />
          </div>
        </div>
      </CardBlock>
    </Fragment>
  );
};

export default ThirdCard;
