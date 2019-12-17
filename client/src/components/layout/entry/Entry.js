import React, { Fragment } from "react";
import Background from "./Background";
import EntryMain from "./EntryMain";
import FirstCard from "./FirstCard";
import SecondCard from "./SecondCard";
import ThirdCard from "./ThirdCard";
import FAQCard from "./FAQCard";

const Entry = () => {
  
  return (
    <Fragment>
      <Background />
      <EntryMain />
      <FirstCard/>
      <SecondCard/>
      <ThirdCard/>
      <FAQCard/>
    </Fragment>
  );
};

export default Entry;
