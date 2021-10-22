import * as React from "react";
import PageWrapperHOC from "../components/hoc/PageWrapperHOC";
import Typography from "../components/Typography";

function HomePage() {
  return <Typography>Home</Typography>;
}

export default PageWrapperHOC(HomePage);
