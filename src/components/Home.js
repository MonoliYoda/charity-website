import React from "react";
import HomeCTA from "./HomeCTA/HomeCTA";
import HomeThreeColumns from "./HomeThreeColumns/HomeThreeColumns";
import MainMenu from "./MainMenu/MainMenu";

export default function Home() {
  return (
    <>
      <MainMenu />
      <HomeCTA />
      <HomeThreeColumns />
    </>
  );
}
