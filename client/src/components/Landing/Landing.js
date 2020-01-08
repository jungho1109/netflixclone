import React,{useEffect} from "react";
import styled from "styled-components";
import logo from "../layout/entry/logo.png";
import { Link, Redirect } from "react-router-dom";
import { logout } from "../../reducers/auth";
import {popularMovie,topMovie,popularShow,topShow} from '../../reducers/api';
import { connect } from "react-redux";
import Content from '../Landing/Content'

const Header = styled.div`
  .header {
    display: flex;
    height: 2rem;
    justify-content: space-between;
    align-items: center;
    padding: 2.2rem 3rem;
    background:#000;
    position: fixed;
    z-index:9999;

    &__logo {
      flex: 0 0 13rem;

      &-image {
        width: 60%;
      }
    }

    &__category {
      display: flex;
      justify-content: space-around;
      flex: 0 0 25rem;
      margin-left: -3rem;

      button {
        outline: none;
        border: none;
        background: none;
        color: #fff;
        font-size: 1rem;
        padding-left: 1rem;

        &:active {
          font-weight: bold;
          transform: translate(0, -20%);
        }

        &:hover {
          font-size: 1.1rem;
        }
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
          background: none;
        }
      }
    }
  }
`;

const LandingBlock = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  margin: 0;

  .blank{
      width:100%;
      height:4rem;
  }
`;

const MainBlock=styled.div`
    width:210vh;
    overflow:hidden;
    display: inline-block;
    .subject{
        margin-top:3rem;
        margin-bottom:0.7rem;
        font-size:1.5rem;
        color:#fff;
        font-weight:bold;
        padding-left: 2.2rem;
    }
`

const Landing = ({ logout, auth,popularMovie,topMovie,popularShow,topShow,api }) => {
    useEffect(() => {
        popularMovie();
        topMovie();
        popularShow();
        topShow();
    }, [popularMovie,topMovie,popularShow,topShow])
  if (!auth.isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <LandingBlock>
      <Header>
        <div className="header">
          <div className="header__logo">
            <Link to="/landing">
              <img src={logo} className="header__logo-image" alt="" />
            </Link>
          </div>
          <div className="header__category">
            <button>Home</button>
            <button>TV Shows</button>
            <button>Movies</button>
            <button>Latest</button>
            <button>My List</button>
          </div>
          <div className="header__right">
            <button className="header__right-btn" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </Header>
      <div className="blank">
      </div>

      {!api.loading&&<MainBlock>
        <div className="subject">
            Popular Movies
        </div>
        <Content content={api.popularMovie}/>
        <div className="subject">
            Top Rated Movies
        </div>
        <Content content={api.topMovie}/>
        <div className="subject">
            Popular TV Shows
        </div>
        <Content content={api.popularShow}/>
        <div className="subject">
            Top Rated TV Shows
        </div>
        <Content content={api.topShow}/>
      </MainBlock>}
      
    </LandingBlock>
  );
};

export default connect(
  state => ({
    auth: state.auth,
    api:state.api
  }),
  {
    logout,
    popularMovie,
    topMovie,
    popularShow,
    topShow
  }
)(Landing);
