import { Tabs } from "antd";
import React from "react";
import { ImageGallery } from "./ImageGallery";
import { PickupDropInfo } from "./PickupDropInfo";
import { PolicyDetails } from "./PolicyDetails";
import SelectTrip from "./SelectTrip";

export const TripCard = ({ index, onToggleDetails, showDetails }) => {
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
            <p
              className="text-sm mb-0 text-blue-600 underline cursor-pointer"
              onClick={() => onToggleDetails(index)}
            >
              {showDetails ? "Ẩn chi tiết" : "Thông tin chi tiết"}
            </p>
            <button className="mt-2 px-4 block py-2 bg-yellow-400 rounded-none border-none text-sm text-gray-700">
              Chọn chuyến
            </button>
          </div>
          <div className="text-right text-sm text-green-500 mt-4">
            Không cần thanh toán trước
          </div>
        </section>
      </div>
      {showDetails && <Tabs defaultActiveKey="1" items={tabItems} />}
      <SelectTrip />
    </div>
  );
};
