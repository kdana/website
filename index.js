/**
Copyright (c) 2022 by Mohamed Adhuham (https://codepen.io/adhuham/pen/YzXayaq)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

document.addEventListener("DOMContentLoaded", function () {
    loadTheme();
});

function loadTheme() {
    const darkModeToggle = document.getElementById("darkModeToggle");

    const currentTheme = localStorage.getItem("theme");
    if (currentTheme !== "light") {
        document.body.classList.add("dark-mode");
    }
}

function toggleTheme(event) {
    event.stopPropagation();
    document.body.classList.toggle("dark-mode");

    let theme = "light";
    if (document.body.classList.contains("dark-mode")) {
        theme = "dark";
    }
    localStorage.setItem("theme", theme);
}
