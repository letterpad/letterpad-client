import { createGlobalStyle } from "styled-components";

export const NormalizeStyle = createGlobalStyle`
body,
html {
  overflow-x: hidden;
  word-break: break-word;
}
html {
  overflow-y: scroll;
  font-size: 62.5%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
  font-family: sans-serif;
}

body {
  color: #3c484e;
  font-family: "Rubik", sans-serif;
  font-size: 1.5rem;
  line-height: 1.6em;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0;
  text-rendering: optimizeLegibility;
  background: #fff;
  -webkit-font-smoothing: antialiased;
}

a {
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  line-height: 1.15;
  font-weight: 700;
  text-rendering: optimizeLegibility;
  font-family: "Libre Baskerville", serif;
}

h1 {
  margin: 0 0 0.5em;
  font-size: 5rem;
  font-weight: 700;
}

h2 {
  margin: 1.5em 0 0.5em;
  font-size: 2rem;
}

blockquote,
dl,
ol,
p,
ul {
  margin: 0 0 1.5em;
}
.inner {
  margin: 0 auto;
  max-width: 1040px;
  width: 100%;
}
.outer {
  position: relative;
  padding: 0 4vw;
}

/* normalize */
/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */
html {
  line-height: 1.15;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
}
article,
aside,
footer,
header,
nav,
section {
  display: block;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei",
    "Helvetica Neue", sans-serif;
}
figcaption,
figure,
main {
  display: block;
}
figure {
  margin: 1em 40px;
}
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
pre {
  font-family: monospace;
  font-size: 1em;
}
a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}
abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}
b,
strong {
  font-weight: inherit;
}
b,
strong {
  font-weight: bolder;
}
dfn {
  font-style: italic;
}
mark {
  background-color: #ff0;
  color: #000;
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
audio,
video {
  display: inline-block;
}
audio:not([controls]) {
  display: none;
  height: 0;
}
img {
  border-style: none;
}
svg:not(:root) {
  overflow: hidden;
}
button,
input,
optgroup,
select,
textarea {
  font-family: sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
button,
html [type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}
fieldset {
  padding: 0.35em 0.75em 0.625em;
}
legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}
progress {
  display: inline-block;
  vertical-align: baseline;
}
textarea {
  overflow: auto;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
details,
menu {
  display: block;
}
summary {
  display: list-item;
}
canvas {
  display: inline-block;
}
template {
  display: none;
}
[hidden] {
  display: none;
}
`;
