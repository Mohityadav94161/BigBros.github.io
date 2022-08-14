import React from "react";

import Feature from "./components/Features";
import Service from "./components/Services";

// import { ThemeProvider } from 'theme-ui';
// import theme from '../theme';
import Shop from "./components/shop";
import Masonary from "./components/BlogHome";
import HomePageMainCard from "./components/HomePageMainCard";
import "./home.css";
const Home = () => {
  return (
    <>
      <HomePageMainCard />

      <Service />
      <Feature />
      <Shop />
      <Masonary />
      {/* <About /> */}
    </>
  );
};
export default Home;
