import React from "react";
import { useContent } from "../hooks/index";
import {BrowseContainer} from '../containers/browse'
import selectionFilter from "../utils/selection-filter";
export default function Browse() {
  //we need the series and we need the slides
  const { series } = useContent("series");
  const { films } = useContent("films");
  const slides = selectionFilter({ series, films });
  //pass it to the browse container
  return <BrowseContainer slides={slides}/>;
}
