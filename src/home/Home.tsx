import React from "react";
import logo from "../logo.svg";
import "./Home.css";
import EarthRotateVideo from "./EarthRotateVideo.mp4";
import { ParallaxProvider, Parallax, ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import PageService from "../services/PageService";
import Box from "@mui/material/Box";
import FolderCard from "./FolderCard";

function Home() {
  const pages = PageService.getPages();

  return (
    <ParallaxProvider>
      <ParallaxBanner style={{ aspectRatio: "2 / 1", height: "100vh" }}>
        <ParallaxBannerLayer>
          {/* 
                Free HD Videos - No Copyright
                Video Source: https://bit.ly/2CbkIcQ 
            */}
          <video
            src={EarthRotateVideo}
            autoPlay
            loop
            muted
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          ></video>
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="parallax__container">
          <Parallax translateY={[30, -50]}>
            <h1 className="title-header">WELCOME</h1>
          </Parallax>
        </ParallaxBannerLayer>
      </ParallaxBanner>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            minHeight: "100vh",
            margin: 4,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignContent: "center",
          }}
        >
          {pages
            .filter((page) => page.name !== "Home")
            .map((page) => (
              <FolderCard key={page.name} page={page}></FolderCard>
            ))}
        </Box>
      </Box>

      <section className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </section>
    </ParallaxProvider>
  );
}

export default Home;
