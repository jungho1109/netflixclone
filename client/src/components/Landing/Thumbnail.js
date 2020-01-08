import React, { useState } from "react";
import styled from "styled-components";

const ThumbBlock = styled.div`
  width: 29.5vh;
  height: 35vh;
  margin-right: 0.3vh;
  margin-bottom: 0.2vh;
  display: inline-block;
  position: relative;

  transform: ${props => props.hovered && "scale(1.5)"};
  transition: 0.3s transform ease-out;
  z-index: ${props => props.hovered && "7777"};

`;

const Thumbnail = ({ poster, title }) => {
  const [hovered, setHovered] = useState(false);
  const address = "http://image.tmdb.org/t/p/w185/" + poster;

  const changeHovered = () => setHovered(!hovered);

  return (
    <ThumbBlock
      onMouseOver={changeHovered}
      onMouseOut={changeHovered}
      hovered={hovered}
    >
      <img src={address} alt="" />
    </ThumbBlock>
  );
};

export default Thumbnail;
