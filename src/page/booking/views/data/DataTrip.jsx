import React from "react";
import { TripCard } from "./TripCard";

export default function DataTrip() {
  const [selectedTrip, setSelectedTrip] = React.useState(null);
  const [activeCardIndex, setActiveCardIndex] = React.useState(null);
  return (
    <div className="space-y-4">
      <div className="border rounded-lg p-4 shadow-md">
        {[1, 2, 3].map((cardIndex) => (
          <TripCard
            key={cardIndex}
            index={cardIndex}
            selectedTrip={selectedTrip}
            setSelectedTrip={setSelectedTrip}
            activeCardIndex={activeCardIndex}
            setActiveCardIndex={setActiveCardIndex}
          />
        ))}
      </div>
    </div>
  );
}
