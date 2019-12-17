import React, { Fragment, useState } from "react";
import styled from "styled-components";
import cn from "classnames";
import renderHTML from 'react-render-html';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 814px;
  width: 100%;
  outline: none;
  border: none;
  margin-bottom: 0.5rem;
  padding: 1rem 1.7rem 1rem 1.7rem;
  color: #fff;
  background: #303030;
  font-size: 1.7rem;
  cursor: pointer;

  .icon{
      font-size:3rem;
  }


`;

const Detail = styled.div`
  max-width: 814px;
  width: 100%;
  outline: none;
  border: none;
  background: #303030;
  color: #fff;
  font-size: 1.7rem;
  padding: 1.5rem 1.7rem 1.5rem 1.7rem;
  margin-bottom: 0.5rem;
  margin-top: -0.4rem;
  transition: all 0.25s cubic-bezier(0.5, 0, 0.1, 1);

  &.open {
    max-height: 1200px;
  }

  &.close {
    max-height: 0px;
    display: none;
    margin: 0;
    padding: 0;
  }
`;

const QuestionCard = ({ title, detail }) => {
  const [clicked, setClicked] = useState(false);

  const onClick = e => {
    setClicked(!clicked);
};

  const detailClicked = cn({
    open: clicked,
    close: !clicked
  });



  return (
    <Fragment>
      <Button onClick={onClick}>
        <div className="text">{title}</div>
        <p className="icon">+</p>
      </Button>
      <Detail className={detailClicked}>{renderHTML(detail)}</Detail>
    </Fragment>
  );
};

export default QuestionCard;
