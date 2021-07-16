import React from "react";
import { useContent } from "../hooks/index";
export default function Browse() {
  //we need the series and we need the slides
  const { series } = useContent("series");
  console.log(series);
  //pass it to the browse container
  return <p>hello from the browse!</p>;
}
