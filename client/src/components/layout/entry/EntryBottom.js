import React, { Fragment, useState } from "react";
import styled from "styled-components";

const FooterBlock = styled.div`
  border-top: 8px solid #222;
  width: 100%;

  .footer {
    width: 60%;
    padding-top: 4rem;
    padding-bottom: 4rem;
    color:#a6a6a6;
    margin: 0 auto;

    &__phone{
        font-size:1rem;
        margin-bottom:2rem;
    }

    &__block{
        display:flex;
        font-size:0.85rem;

        &-child{
            li{
                list-style:none;
                margin-bottom:0.7rem;
                min-width:140px;
            }
            
        }

        &-child:not(:last-of-type){
            margin-right:6rem;
        }
    }

    &__mark{
        font-size:0.85rem;
        margin-top:3rem;
    }
  }
`;

const EntryBottom = () => {
  return (
    <Fragment>
      <FooterBlock>
        <div className="footer">
          <p className="footer__phone">Questions? Call 1-877-742-1335</p>
          <div className="footer__block">
            <div className="footer__block-child">
                <ul>
                    <li>FAQ</li>
                    <li>Investor Relations</li>
                    <li>Ways to Watch</li>
                    <li>Corporate Information</li>
                    <li>Netflix Originals</li>
                </ul>
            </div>
            <div className="footer__block-child">
                <ul>
                    <li>Help Center</li>
                    <li>Jobs</li>
                    <li>Terms of Use</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="footer__block-child">
                <ul>
                    <li>Account</li>
                    <li>Redeem Gift Cards</li>
                    <li>Privacy</li>
                    <li>Speed Test</li>
                </ul>
            </div>
            <div className="footer__block-child">
                <ul>
                    <li>Media Center</li>
                    <li>Buy Gift Cards</li>
                    <li>Cookie Preferences</li>
                    <li>Legal Notices</li>
                </ul>
            </div>
          </div>
          <p className="footer__mark">Netflix Canada</p>
        </div>
      </FooterBlock>
    </Fragment>
  );
};

export default EntryBottom;
