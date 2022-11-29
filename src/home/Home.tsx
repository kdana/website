import React from "react";
import logo from "../logo.svg";
import "./Home.css";
import EarthRotateVideo from "./EarthRotateVideo.mp4";
import { ParallaxProvider, Parallax, ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

function Home() {
  /**
    Parallax Header
    Copyright (c) 2022 by Ryan Kelly (https://codepen.io/sixtyfourthirtytwo/pen/zbxrPG)
    Fork of an original work Pure CSS Parallax (https://codepen.io/thewebtech/pen/KzBQmr

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  */
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
