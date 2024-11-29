import React from "react";

export default function OptionTrip({ data }) {
  return (
    <>
      <div
        className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4 mt-4"
        role="alert"
      >
        <span className="block sm:inline text-sm">
          An tâm được đón đúng nơi, trả đúng chỗ đã chọn và dễ dàng thay đổi khi
          cần.
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="border p-4 rounded">
          <h2 className="font-bold mb-2 text-lg">Điểm đón</h2>
          <div className="text-green-600 text-sm my-2">
            Cách vị trí của bạn 1.5 km
          </div>
          {[1, 2, 3]?.map((index) => {
            return (
              <div key={index} className="mb-4">
                <input
                  type="radio"
                  id="pickup1"
                  name="pickup"
                  className="mr-2"
                />
                <label>
                  <span className="font-bold">05:00:00</span> •
                  <span className="font-semibold text-sm">Bến Xe Mỹ Đình</span>
                </label>
                <div className="text-green-600 text-sm my-2">
                  Cách vị trí của bạn 7.6 km
                </div>
              </div>
            );
          })}
        </div>
        <div className="border p-4 rounded">
          <h2 className="font-bold mb-2 text-lg">Điểm trả</h2>
          <div className="text-green-600 text-sm my-2">
            Cách vị trí của bạn 240.1 km
          </div>
          {[1, 2, 3]?.map((index) => {
            return (
              <div key={index} className="mb-4">
                <input
                  type="radio"
                  id="pickup2"
                  name="pickup2"
                  className="mr-2"
                />
                <label>
                  <span className="font-bold">05:00:00</span> •
                  <span className="font-semibold text-sm">Bến Xe Mỹ Đình</span>
                </label>
                <div className="text-green-600 text-sm my-2">
                  Cách vị trí của bạn 7.6 km
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between mt-4 items-center">
        <span className="text-md font-medium">
          Ghế: <span className="text-blue-600 text-md">A3</span>
        </span>

        <button className="mt-2 px-4 block py-2 bg-blue-400 rounded-none border-none text-sm text-white">
          Thanh toán
        </button>
      </div>
    </>
  );
}
