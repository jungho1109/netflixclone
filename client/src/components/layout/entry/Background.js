import React from "react";
import styled from "styled-components";

const BackgroundBlock = styled.div`
  .background {
    &__wrap {
      width: 100%;
      height:98vh;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: -3;
      &-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__color {
      background: rgba(0, 0, 0, 0.4);
      background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0) 60%,
        rgba(0, 0, 0, 0.8) 100%
      );
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -2;
    }
  }
`;

const Background = () => {
  return (
    
      <BackgroundBlock>
        <div className="background__wrap">
          <img
            className="background__wrap-image"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/2a67d7bb-5681-490a-8515-c7e322c6255e/bf65d06b-7d74-423a-805c-77b3920d1d86/CA-en-20191209-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/2a67d7bb-5681-490a-8515-c7e322c6255e/bf65d06b-7d74-423a-805c-77b3920d1d86/CA-en-20191209-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/2a67d7bb-5681-490a-8515-c7e322c6255e/bf65d06b-7d74-423a-805c-77b3920d1d86/CA-en-20191209-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/2a67d7bb-5681-490a-8515-c7e322c6255e/bf65d06b-7d74-423a-805c-77b3920d1d86/CA-en-20191209-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
            alt=""
          ></img>
        </div>
        <div className="background__color"></div>
      </BackgroundBlock>
  );
};

export default Background;
