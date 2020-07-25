import React from "react";

import "../src/styles/global.css";
import "../src/styles/indexStyle.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
