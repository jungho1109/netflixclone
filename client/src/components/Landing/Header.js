import React from "react";
import styled from "styled-components";
import logo from "./logo.png";
import {Link} from 'react-router-dom';


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
        <Link to="/">
          <img src={logo} className="header__logo-image" alt="" />
          </Link>
        </div>
        <div className="header__right">
          <Link to="/register"><button className="header__right-btn">Sign Up</button></Link>
          <Link to="/login"><button className="header__right-btn">Sign In</button></Link>
        </div>
      </div>
    </HeaderBlock>
  );
};

export default Header;
