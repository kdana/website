import React from "react";
import DarkModeToggle from "./dark-mode-toggle/DarkModeToggle";
import logo from "./logo.svg";
import "./App.css";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

function App() {
  /**
    Parallax Header
    Copyright (c) 2022 by Ryan Kelly (https://codepen.io/sixtyfourthirtytwo/pen/zbxrPG)
    Fork of an original work Pure CSS Parallax (https://codepen.io/thewebtech/pen/KzBQmr

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  */
  return (
    <div>
      <ParallaxProvider>
        <DarkModeToggle />

        <div className="parallax__container">
          <Parallax translateY={[262, -300]}>
            <h1 className="top-color first-header">WELCOME</h1>
          </Parallax>
          <Parallax translateY={[-70, -300]} className="background-text">
            <h2 className="bottom-color">HELLO WORLD</h2>
          </Parallax>
        </div>

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
    </div>
  );
}

export default App;
