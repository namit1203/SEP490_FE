import React from "react";

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
      <div className="flex flex-col gap-4 overflow-hidden w-[266px] border p-4 rounded-lg border-solid border-[rgb(224,224,224)]">
        <div className="w-full gap-4 flex flex-col">
          <p className="font-bold text-lg leading-6 mb-0">Sắp xếp</p>
        </div>

        <div className="flex flex-col gap-4">
          {sortingOptions.map((option) => (
            <label key={option.id} className="flex items-center gap-2">
              <input
                type="radio"
                name="sorting"
                className="w-5 h-5 accent-blue-600 cursor-pointer"
              />
              <span className="text-sm leading-5 font-semibold">
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
