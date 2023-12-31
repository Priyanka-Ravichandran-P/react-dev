import React from "react";
import ReactDOM  from "react-dom/client";
const heading = React.createElement("h1",{id:"heading"},"Hello World From React");
const div = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},
[
    React.createElement("h2",{id:"heading2"}, "I am h2 tag!"),
    React.createElement("h3",{id:"heading3"}, "I am h3 tag!")
]),
React.createElement("div",{id:"child"},
[
    React.createElement("h4",{id:"heading4"}, "I am h4 tag!"),
    React.createElement("h5",{id:"heading5"}, "I am h5 tag!")
])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
const jsxroot = ReactDOM.createRoot(document.getElementById("jsxroot"));
const jsxHeading = (<h1>Hello World From JSX</h1>)
// root.render(heading);
root.render(div);
jsxroot.render(jsxHeading);
      