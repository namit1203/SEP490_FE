export const TripCard = ({ onToggleDetails, showDetails }) => {
    return (
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
              onClick={onToggleDetails}
            >
              {showDetails ? "Ẩn chi tiết" : "Thông tin chi tiết"}
            </p>
            <button className="mt-2 px-4 block py-2 bg-yellow-400 rounded-none border-none text-sm text-gray-700">
              Chọn chuyến
            </button>
          </div>
        </section>
      </div>
    );
  }