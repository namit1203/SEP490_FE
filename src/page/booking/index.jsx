import React, { Fragment } from "react";
import DataViews from "./views/DataViews";
import SearchViews from "./views/SearchViews";
export default function BookingCarViews() {
  return (
    <Fragment>
      <SearchViews />
      <DataViews />
    </Fragment>
  );
}
