import React from "react";
import BookingSort from "./sort/BookingSort";

export default function DataViews() {
  const sortingOptions = [
    { id: 1, label: "Mặc định" },
    { id: 2, label: "Giờ đi sớm nhất" },
    { id: 3, label: "Giờ đi muộn nhất" },
    { id: 4, label: "Đánh giá cao nhất" },
    { id: 5, label: "Giá tăng dần" },
    { id: 6, label: "Giá giảm dần" },
  ];

  return (
    <div className="flex w-full gap-2.5">
      <div className="flex flex-col gap-4 overflow-hidden w-[266px]">
        {/* sort */}
        <div className="border p-4 rounded-lg border-solid border-[rgb(224,224,224)] flex flex-col gap-4">
          <BookingSort options={sortingOptions} />
        </div>
        {/* filter */}
        <div className="border p-4 rounded-lg border-solid border-[rgb(224,224,224)] flex flex-col gap-4">
          <div className="w-full gap-4 flex justify-between">
            <p className="font-bold text-lg leading-6 mb-0">Lọc</p>
            <p className="text-sm font-bold leading-5 tracking-[0px] underline underline-offset-1 break-normal mb-0 text-[rgb(36,116,229)] cursor-pointer">
              Xóa lọc
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
