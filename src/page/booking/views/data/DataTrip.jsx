import React from "react";

export default function DataTrip() {
  return (
    <div className="space-y-4">
      <div className="border rounded-lg p-4 shadow-md">
        {/* card */}
        <>
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

              <button className="mt-2 px-4 block py-2 bg-yellow-400 rounded-none border-none text-sm text-gray-700">
                Chọn chuyến
              </button>
            </section>
          </div>
          <div className="text-right text-sm text-green-500">
            Không cần thanh toán trước
          </div>
        </>
      </div>
    </div>
  );
}
