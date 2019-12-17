import React from "react";
import styled from "styled-components";
import Header from "./Header";

const MainBlock = styled.div`
  .container {
    .main {
      height: 80vh;
      margin-left: 2rem;
      margin-right: 2rem;
      display: flex;
      position: relative;

      .content {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        line-height: 1.2;
        text-align: center;
        color: #ffffff;

        &__title {
          font-size: 4rem;
        }

        &__lead {
          &-1 {
            padding: 1.5rem;
            font-size: 1.7rem;
          }

          &-2 {
            padding-top: 1rem;
            font-size: 1.2rem;
          }
        }

        &__email {
          display: flex;
          align-content: center;
          align-items: center;
          position: relative;

          &-input {
            height: 4.5rem;
            width: 32rem;
            border: none;
            outline: none;
            border-radius: 3px;
          }

          &-placeholder {
            top: 50%;
            left: 10%;
            transform:translate(-70%,-50%);
            font-size: 1rem;
            position: absolute;
            color:#8c8c8c;
          }

          &-btn {
            height: 4.5rem;
            width: 20rem;
            font-size: 1.8rem;
            padding-left: 1rem;
            padding-right: 1rem;
            border: none;
            outline: none;
            border-radius: 3px;
            background-color: #e50914;
            color: #ffffff;
            cursor: pointer;

            &:hover {
              background-color: #f40612;
            }
          }
        }
      }
    }
  }
`;

const EntryMain = () => {
  return (
    <MainBlock>
      <section className="container">
        <Header />
        <div className="main">
          <div className="content">
            <h1 className="content__title">Unlimited movies, TV <br/>shows, and more.</h1>
            <p className="content__lead-1">Watch anywhere. Cancel anytime.</p>
            <div className="content__email">
              <input className="content__email-input"></input>
              <p className="content__email-placeholder">Email address</p>
              <button className="content__email-btn">
                I'LL TRY IT NOW &nbsp;>
              </button>
            </div>
            <p className="content__lead-2">
              Ready to watch? Enter your email to create or access your account
            </p>
          </div>
        </div>
      </section>
    </MainBlock>
  );
};

export default EntryMain;
