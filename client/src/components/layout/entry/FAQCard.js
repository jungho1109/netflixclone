import React, { Fragment, useState } from "react";
import styled from "styled-components";
import QuestionCard from "./QuestionCard";

const CardBlock = styled.div`
  border-top: 8px solid #222;

  .card {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;  
    flex-direction: column;
    padding-top: 4rem;
    padding-bottom: 4rem;
    color: #fff;

    &__title {
      font-size: 3.5rem;
      font-weight: bold;
    }

    &__questions{
      width:75%;
      margin:3rem auto;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
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
        transform: translate(-70%, -50%);
        font-size: 1rem;
        position: absolute;
        color: #8c8c8c;
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

      &-2 {
        padding-top: 1rem;
        font-size: 1.2rem;
      }
    }
  }
`;

const FAQCard = () => {
  const [questions, setQuestions] = useState([
    {
      title: "What is Netflix?",
      detail:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.<br/><br/>You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
    },
    {
      title: "How much does Netflix cost?",
      detail:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one low fixed monthly fee. Plans start from $9.99 a month. No extra costs or contracts."
    },
    {
      title: "Where can I watch?",
      detail:
        "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br/><br/>You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    },
    {
      title: "How do I cancel?",
      detail:
        "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
      title: "What can I watch on Netflix?",
      detail:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    }
  ]);
  return (
    <Fragment>
      <CardBlock>
        <div className="card">
          <div className="card__title">Frequently Asked Questions</div>
          <div className="card__questions">
            {questions.map(question => (
              <QuestionCard title={question.title} detail={question.detail} />
            ))}
          </div>
          <div className="card__email">
            <input className="card__email-input"></input>
            <p className="card__email-placeholder">Email address</p>
            <button className="card__email-btn">I'LL TRY IT NOW &nbsp;></button>
          </div>
          <p className="card__email-2">
            Ready to watch? Enter your email to create or access your account
          </p>
        </div>
      </CardBlock>
    </Fragment>
  );
};

export default FAQCard;
