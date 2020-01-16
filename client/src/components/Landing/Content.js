import React, { useState } from "react";
import styled from "styled-components";
import Thumbnail from "./Thumbnail";

const ContentBlock = styled.div`
  width: 540vh;
  height: 100%;
  margin-bottom: 3rem;
  position: relative;

  .page {
    width: 3rem;
    height: 105%;
    position: absolute;
    opacity: 0.2;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    font-size: 2rem;

    &:hover {
      opacity: 0.8;
      background: #777;
      cursor: pointer;
    }
  }

  .pageDown {
    position: absolute;

    left: 0;
  }

  .pageUp {
    position: absolute;

    left: 204vh;
  }

  .contents {
    margin-left: 3vh;
    transform: translate(${props => props.count && `${-82 * props.count}vh`});
    transition: 0.3s transform ease-out;
  }
`;

const Content = ({ content }) => {
  const [count, setCount] = useState(0);
  const contents = [];
  if (content != null) {
    for (let i = 0; i < 18; i++) {
      contents.push(
        <Thumbnail
          poster={content.results[i].poster_path}
          title={content.results[i].title}
        />
      );
    }
  }
  

  const pageDown = () => {
    setCount(count - 1);
  };

  const pageUp = () => {
    setCount(count + 1);
  };

  return (
    <ContentBlock count={count}>
      {count !== 0 && (
        <div className="page pageDown" onClick={pageDown}>
          &lt;
        </div>
      )}
      {count !== 4 && (
        <div className="page pageUp" onClick={pageUp}>
          &gt;
        </div>
      )}
      <div className="contents">{contents}</div>
    </ContentBlock>
  );
};

export default Content;
