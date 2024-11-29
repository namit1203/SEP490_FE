import { Tabs } from "antd";
import React, { useState } from "react";
import { ImageGallery } from "./ImageGallery";
import { PickupDropInfo } from "./PickupDropInfo";
import { PolicyDetails } from "./PolicyDetails";
import { TripCard } from "./TripCard";

export default function DataTrip() {
  const tabItems = (tripDetails) => [
    {
      key: "2",
      label: "Đón/trả",
      children: <PickupDropInfo tripDetails={tripDetails} />,
    },
    {
      key: "4",
      label: "Chính sách",
      children: <PolicyDetails />,
    },
    {
      key: "5",
      label: "Hình ảnh",
      children: <ImageGallery />,
    },
    {
      key: "6",
      label: "Review",
      children: <div>{/* <ReviewComponent /> */}</div>,
    },
  ];

  const tripDetails = [
    {
      id: 1,
      name: "Nhà xe Phương Trang",
      from: "Hà Nam",
      to: "Ninh Bình",
      timeStart: "08:00:00",
      timeEnd: "10:00:00",
      price: "80,000đ",
      availableSeats: 34,
    },
    {
      id: 2,
      name: "Nhà xe Hoàng Long",
      from: "Hà Nội",
      to: "Nam Định",
      timeStart: "09:30:00",
      timeEnd: "11:30:00",
      price: "90,000đ",
      availableSeats: 25,
    },
  ];

  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => setShowDetails((prev) => !prev);

  return (
    <div className="space-y-4">
      <div className="border rounded-lg p-4 shadow-md">
        <TripCard onToggleDetails={toggleDetails} showDetails={showDetails} />
        {showDetails && (
          <Tabs defaultActiveKey="1" items={tabItems(tripDetails)} />
        )}
      </div>
    </div>
  );
}
