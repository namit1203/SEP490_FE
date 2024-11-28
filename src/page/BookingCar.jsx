import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import BookingCarViews from "./booking";
export default function BookingCar() {
  return (
    <>
      <Header />
      <div className="max-w-[1036px] mx-auto">
        <BookingCarViews />
      </div>
      <Footer />
    </>
  );
}
