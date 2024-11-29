import { TripDetailsCard } from "./TripDetailsCard";

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
];

export const PickupDropInfo = () => {
  return (
    <div className="p-4">
      <div className="text-blue-600 font-bold mb-2">Lưu ý</div>
      <div className="mb-4">
        Các mốc thởi gian đón, trả bên dới là thởi gian dự kiến.
        <br />
        Lịch này có thể thay đổi tùy tình hình thực tế.
      </div>
      {tripDetails.map((detail, index) => (
        <TripDetailsCard key={index} details={detail} />
      ))}
      <div className="mt-4 text-blue-600">
        <a href="#">Báo cáo sai/thiếu thông tin</a>
      </div>
    </div>
  );
};
