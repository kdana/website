import React from "react";
import EarthRotateVideo from "./EarthRotateVideo.mp4";
import { ParallaxProvider, Parallax, ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import PageService from "../services/PageService";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
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
            <Typography
              variant="h1"
              sx={{
                color: "#fff",
                fontSize: "13vw",
                paddingTop: "60vh",
                fontFamily: '"Consolas", "Courier New", monospace;',
                marginLeft: "15vw",
              }}
            >
              WELCOME
            </Typography>
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
    </ParallaxProvider>
  );
}

export default Home;
