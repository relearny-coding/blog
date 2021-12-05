import * as React from "react";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Relearny</title>
      <h1 style={headingStyles}>Relearny</h1>
      <p>This blog will be available soon.</p>
    </main>
  );
};

export default IndexPage;
