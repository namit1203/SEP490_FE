import React, { useState } from "react";
import { TripCard } from "./TripCard";

export default function DataTrip() {
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const toggleDetails = (index) => {
    setActiveCardIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="space-y-4">
      <div className="border rounded-lg p-4 shadow-md">
        {[1, 2, 3].map((cardIndex) => (
          <TripCard
            key={cardIndex}
            index={cardIndex}
            onToggleDetails={toggleDetails}
            showDetails={activeCardIndex === cardIndex}
          />
        ))}
      </div>
    </div>
  );
}
