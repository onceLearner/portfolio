import React from "react";

import "../src/styles/global.css";
import "../src/styles/indexStyle.css";
import "../src/styles/cv.css";
import "../src/styles/card.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
