import { Tabs } from "antd";
import React, { useState } from "react";
import { ImageGallery } from "./ImageGallery";
import { PickupDropInfo } from "./PickupDropInfo";
import { PolicyDetails } from "./PolicyDetails";

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

export default function DataTrip() {
  const [TripDetails, setTripDetails] = useState([
    {
      pointStartDetails: "Hà Nam",
      pointEndDetails: "Ninh Bình",
      timeStartDetils: "08:00:00",
      timeEndDetails: "10:00:00",
    },
  ]);

  return (
    <div className="space-y-4">
      <div className="border rounded-lg p-4 shadow-md">
        {/* card */}
        <div className="flex justify-between">
          <section>
            <h3 className="font-bold text-lg">Nhà xe Phương trang</h3>
            <p className="text-sm">Hà Nam - Ninh Bình</p>
            <p className="text-sm mt-2">08:00:00 - Hà Nam</p>
            <p className="text-sm">Ninh Bình</p>
          </section>
          <section>
            <span className="block font-bold text-lg text-blue-500 text-right">
              Từ 80,000đ
            </span>
            <p className="text-[rgb(72, 72, 72)] mt-2 text-sm font-medium text-right">
              Còn 34 chỗ trống
            </p>
            <div className="flex items-baseline gap-3 justify-between">
              <p className="text-sm mb-0 text-blue-600 underline cursor-pointer">
                Thông tin chi tiết
              </p>
              <button className="mt-2 px-4 block py-2 bg-yellow-400 rounded-none border-none text-sm text-gray-700">
                Chọn chuyến
              </button>
            </div>
          </section>
        </div>
        <div className="text-right text-sm text-green-500">
          Không cần thanh toán trước
        </div>
        {/* detail */}
        <Tabs defaultActiveKey="1" items={tabItems(TripDetails)} />
      </div>
    </div>
  );
}
