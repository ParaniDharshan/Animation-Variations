import React from "react";
import CircleBubblesBackground from "../Components/Sections/CircleBubblesBackground";
import Hero from "../Components/home-components/1_Hero";
import ThreePillars from "../Components/home-components/2_ThreePillars";
import HowItWorks from "../Components/home-components/3_HowItWorks";
import Testimonal from "../Components/home-components/4_Testimonal";
import GmailButton from "../Components/common-components/Gmailbutton";

function Animation8() {
  return (
    <>
      <div style={{ position: "relative" }}>
        <CircleBubblesBackground fullScreen={false} />
        <Hero />
      </div>
      <ThreePillars />
      <HowItWorks />
      <Testimonal />
      <GmailButton />
    </>
  );
}

export default Animation8;