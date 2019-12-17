import React, { Fragment } from "react";
import Background from "./Background";
import EntryMain from "./EntryMain";
import FirstCard from "./FirstCard";
import SecondCard from "./SecondCard";

const Entry = () => {
  
  return (
    <Fragment>
      <Background />
      <EntryMain />
      <FirstCard/>
      <SecondCard/>
    </Fragment>
  );
};

export default Entry;
