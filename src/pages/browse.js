import React from "react";
import { useContent } from "../hooks/index";
import selectionFilter from "../utils/selection-filter";
export default function Browse() {
  //we need the series and we need the slides
  const { series } = useContent("series");
  const { films } = useContent("films");
  console.log(series);
  const slides = selectionFilter({ series, films });
  console.log(slides);
  //pass it to the browse container
  return <p>hello from the browse!</p>;
}
