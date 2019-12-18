import React, { Fragment } from "react";
import Background from "./Background";
import EntryMain from "./EntryMain";
import FirstCard from "./FirstCard";
import SecondCard from "./SecondCard";
import ThirdCard from "./ThirdCard";
import FAQCard from "./FAQCard";
import EntryBottom from "./EntryBottom";

const Entry = () => {
  
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

export default Entry;
