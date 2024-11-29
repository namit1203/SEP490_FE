import { TripDetailsCard } from "./TripDetailsCard";

export const PickupDropInfo = ({ tripDetails }) => (
  <div className="p-4">
    <div className="text-blue-600 font-bold mb-2">Lưu ý</div>
    <div className="mb-4">
      Các mốc thời gian đón, trả bên dưới là thời gian dự kiến.
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
