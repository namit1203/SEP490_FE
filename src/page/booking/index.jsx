import React from "react";
import NavBooking from "./modules/NavBooking";
import SearchBooking from "./modules/SearchBooking";
export default function BookingCarViews() {
  return (
    <div className="pt-5">
      <div className="bg-white border border-gray-50 rounded-lg shadow">
        <NavBooking />
        <SearchBooking />
      </div>
    </div>
  );
}
