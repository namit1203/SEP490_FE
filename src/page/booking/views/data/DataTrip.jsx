import { Spin } from "antd";
import React from "react";
import { useAppSelector } from "../../../../stores/hooks";
import { TripCard } from "./TripCard";

export default function DataTrip() {
  const DataTripStaion = useAppSelector((state) => state.trips?.data);
  const isLoading = useAppSelector((state) => state.trips?.loading);
  const [selectedTrip, setSelectedTrip] = React.useState(null);
  const [activeCardIndex, setActiveCardIndex] = React.useState(null);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="border rounded-lg p-4 shadow-md">
        {DataTripStaion &&
          DataTripStaion.map((item, index) => (
            <TripCard
              key={item.id}
              index={index}
              selectedTrip={selectedTrip}
              setSelectedTrip={setSelectedTrip}
              activeCardIndex={activeCardIndex}
              setActiveCardIndex={setActiveCardIndex}
              data={item}
            />
          ))}
      </div>
    </div>
  );
}
