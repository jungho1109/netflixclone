import React from "react";
import styled from "styled-components";
import logo from "./logo.png";

const HeaderBlock = styled.div`
  .header {
    display: flex;
    height: 4rem;
    justify-content: space-between;
    align-items: center;
    margin: 2rem;

    &__logo {
      flex: 0 0 13rem;

      &-image {
        width: 100%;
      }
    }

    &__right {
      margin-left: auto;
      display: flex;
      &-btn {
        border: none;
        height: 2.3rem;
        width: 5.5rem;
        margin-right: 2rem;
        background-color: #e50914;
        color: #ffffff;
        font-size: 1rem;
        border-radius: 0.5rem;
        cursor: pointer;
        outline: none;

        &:active {
          border: none;
          outline: none;
        }
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderBlock>
      <div className="header">
        <div className="header__logo">
          <img src={logo} className="header__logo-image" alt="" />
        </div>
        <div className="header__right">
          <button className="header__right-btn">Sign Up</button>
          <button className="header__right-btn">Sign In</button>
        </div>
      </div>
    </HeaderBlock>
  );
};

export default Header;
