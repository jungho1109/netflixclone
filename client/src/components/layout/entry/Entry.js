import React, { Fragment } from "react";
import Background from "./Background";
import EntryMain from "./EntryMain";
import FirstCard from "./FirstCard";
import SecondCard from "./SecondCard";
import ThirdCard from "./ThirdCard";
import FAQCard from "./FAQCard";
import EntryBottom from "./EntryBottom";
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

const Entry = ({auth}) => {

  if(auth.isAuthenticated){
    return <Redirect to="/landing"/>
  }
  
  return (
    <Fragment>
      <Background />
      <EntryMain />
      <FirstCard/>
      <SecondCard/>
      <ThirdCard/>
      <FAQCard/>
      <EntryBottom/>
    </Fragment>
  );
};

export default connect(
  state=>({
    auth:state.auth
  })
)(Entry);
