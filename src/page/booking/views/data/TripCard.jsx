import { Tabs } from "antd";
import React from "react";
import { ImageGallery } from "./ImageGallery";
import { PickupDropInfo } from "./PickupDropInfo";
import { PolicyDetails } from "./PolicyDetails";
import SelectTrip from "./SelectTrip";

export const TripCard = ({
  index,
  selectedTrip,
  setSelectedTrip,
  activeCardIndex,
  setActiveCardIndex,
  data,
}) => {
  const toggleDetails = (index) => {
    setActiveCardIndex((prev) => (prev === index ? null : index));
  };

  const handleSelectTrip = (index) => {
    setSelectedTrip((prev) => (prev === index ? null : index));
  };

  const tabItems = [
    {
      key: "2",
      label: "Đón/trả",
      children: <PickupDropInfo />,
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

  return (
    <div className="border rounded-lg p-4 shadow-md mb-4">
      <div className="flex justify-between">
        <section>
          <h3 className="font-bold text-lg capitalize">{data?.fullName}</h3>
          <p className="text-sm">{data?.description}</p>
          <p className="text-sm mt-2">
            {data?.startTime} - {data?.pointStart}
          </p>
          <p className="text-sm">{data?.pointEnd}</p>
        </section>
        <section>
          <span className="block font-bold text-lg text-blue-500 text-right">
            Từ {data?.listVehicle[0]?.price?.toLocaleString()}đ
          </span>
          <p className="text-[rgb(72, 72, 72)] mt-2 text-sm font-medium text-right">
            Còn {data?.listVehicle[0]?.numberSeat} chỗ trống
          </p>
          <div className="flex items-baseline gap-3 justify-between">
            <p
              className="text-sm mb-0 text-blue-600 underline cursor-pointer"
              onClick={() => toggleDetails(index)}
            >
              {activeCardIndex === index ? "Ẩn chi tiết" : "Thông tin chi tiết"}
            </p>
            <button
              className="mt-2 px-4 block py-2 bg-yellow-400 rounded-none border-none text-sm text-gray-700"
              onClick={() => handleSelectTrip(index)}
            >
              {selectedTrip === index ? "Đóng" : "Chọn chuyến"}
            </button>
          </div>
          <div className="text-right text-sm text-gray-600 mt-4 font-medium">
            Biển số xe : {data?.listVehicle[0]?.licensePlate}
          </div>
        </section>
      </div>
      {activeCardIndex === index && (
        <Tabs defaultActiveKey="1" items={tabItems} />
      )}
      {selectedTrip === index && <SelectTrip />}
    </div>
  );
};
