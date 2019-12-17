import React, { Fragment,useState } from "react";
import styled from "styled-components";

const CardBlock = styled.div`
  border-top: 8px solid #222;
  height: 60vh;
  background-color: #000;

  .card {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 3rem;
    padding-bottom: 3rem;

    &__text {
      width: 40%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      line-height: 1.2;
      color: #ffffff;

      &-title {
        font-size: 3.5rem;
        font-weight: bold;
      }

      &-lead {
        font-size: 1.7rem;
        line-height: 1.3;
        padding-top: 1rem;
      }
    }

    &__img {
      width: 40%;
      height: 100%;
      background-color: #000;

      position: relative;

      &-background {
        width: 100%;
        height: 100%;
        padding-right: 10%;
        z-index: 0;
      }

      &-download {
        position: absolute;
        top: 70%;
        left: 45%;
        transform: translate(-50%, -20%);
        width: 65%;
        height: 6rem;
        border: 2px solid rgba(100, 100, 100, 0.7);
        border-radius: 10px;
        background-color: #000;
        display:flex;
        align-items:center;
        padding:0.7rem;

        &-img{
          flex: 0 0 20%;
          height:4.5rem;
        }

        &-text{
          flex:1;
          color:#fff;
          margin-left:1rem;
          display:flex;
          flex-direction:column;
          line-height:1.2;
          &-title{
            font-weight:bold;
            font-size:1.1rem;
          }

          &-downloading{
            color:#0071eb;
          }
        }

        &-animation{
          width:3rem;
          height:3rem;
          flex:0 0 15%;
          background:url(https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif) center center no-repeat;
          background-size:3rem 3rem;
        }
      }
    }
  }
`;

const CardTextSecond = () => {
  const [text, setText] = useState({
    title: "Download your shows to watch on the go.",
    lead:
      "Save your data and watch all your favorites offline."
  });
  return (
    <Fragment>
      <CardBlock>
        <div className="card">
          <div className="card__img">
            <img
              className="card__img-background"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile.png"
              alt=""
            />
            <div className="card__img-download">
              <img className="card__img-download-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
              <div className="card__img-download-text">
                <p className="card__img-download-text-title">Stranger Things</p>
                <p className="card__img-download-text-downloading">
                  Downloading...
                </p>
              </div>
              <div className="card__img-download-animation"></div>
            </div>
          </div>
          <div className="card__text">
            <div className="card__text-title">{text.title}</div>
            <div className="card__text-lead">{text.lead}</div>
          </div>
        </div>
      </CardBlock>
    </Fragment>
  );
};

export default CardTextSecond;
