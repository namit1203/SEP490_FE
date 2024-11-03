import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Bookingconfirmation = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="max-w-5xl mx-auto p-4">
        <a onClick={() => navigate("/")} className="text-blue-600 mb-4 block">
          &lt; Quay lại
        </a>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Thông tin liên hệ</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Tên người đi *</label>
              <input
                type="text"
                value="THÀNH ĐÔ VŨ"
                className="w-full p-2 border rounded mt-1"
                readOnly
              />
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-gray-700">VN +84</label>
                <input
                  type="text"
                  value="+84"
                  className="w-full p-2 border rounded mt-1"
                  readOnly
                />
              </div>
              <div className="col-span-2">
                <label className="block text-gray-700">Số điện thoại *</label>
                <input
                  type="text"
                  value="566730000"
                  className="w-full p-2 border rounded mt-1"
                  readOnly
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                Email để nhận thông tin đặt chỗ *
              </label>
              <input
                type="email"
                value="thanhdo9xi@gmail.com"
                className="w-full p-2 border rounded mt-1"
                readOnly
              />
            </div>
            <div className="bg-green-100 p-4 rounded-lg text-green-700">
              <i className="fas fa-check-circle mr-2"></i>
              Số điện thoại và email được sử dụng để gửi thông tin đơn hàng và
              liên hệ khi cần thiết.
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Tạm tính</h2>
            <div className="text-2xl font-bold text-gray-800">750.000đ</div>
            <button onClick={()=> navigate('/payment-method')} className="w-full mt-5 bg-yellow-500 text-white py-2 rounded font-bold">
              Thanh toán
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="md:col-span-2 bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Tiện ích</h2>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span>Bảo hiểm chuyến đi (+20.000đ/ghế)</span>
              </div>
              <div className="ml-6 text-gray-700">
                Được bồi thường lên đến 400.000đ/ghế. Cung cấp bởi{" "}
                <span className="font-semibold">Bảo Việt</span> &{" "}
                <span className="font-semibold">Saladin</span>.
              </div>
              <div className="border border-green-500 p-4 rounded-lg mt-2">
                <div className="font-semibold text-green-700 mb-2">
                  Bảo hiểm tai nạn
                </div>
                <div className="text-gray-700 mb-2">
                  Quyền lợi bảo hiểm lên đến 400 triệu đồng khi xảy ra tai nạn
                </div>
                <div className="font-semibold text-green-700 mb-2">
                  Bảo hiểm hủy chuyến
                </div>
                <div className="text-gray-700 mb-2">
                  Bồi thường 100% tiền vé nếu chuyến đi bị hủy bởi các lý do
                  khách quan hoặc bất khả kháng về sức khỏe.
                </div>
                <div className="text-green-700">
                  Bồi thường trực tuyến nhanh chóng, dễ dàng
                </div>
                <a href="#" className="text-blue-600 mt-2 block">
                  Chi tiết
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fas fa-check-circle text-green-500 mr-2"></i>
              <span>Thuê xe máy tại Sa Pa</span>
            </div>
            <div className="ml-6 text-gray-700">
              Vexere sẽ hỗ trợ xác nhận dịch vụ
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Thông tin chuyến đi</h2>
            <div className="flex items-center mb-4">
              <i className="fas fa-calendar-alt text-blue-600 mr-2"></i>
              <span className="text-gray-700">T3, 29/10/2024</span>
              <span className="ml-auto text-gray-700">1</span>
              <a href="#" className="text-blue-600 ml-4">
                Chi tiết
              </a>
            </div>
            <div className="flex items-center mb-4">
              <img
                src="https://placehold.co/50x50"
                alt="Image of Sao Việt bus"
                className="w-12 h-12 rounded mr-4"
              />
              <div>
                <div className="font-semibold text-gray-800">Sao Việt</div>
                <div className="text-gray-600">
                  Limousine giường phòng 21 chỗ
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <i className="fas fa-map-marker-alt text-blue-600 mr-2"></i>
                <div>
                  <div className="font-semibold text-gray-800">
                    Văn phòng 7 Phạm Văn Đồng
                  </div>
                  <div className="text-gray-600">
                    Số 7 Phạm Văn Đồng, Phường Mai Dịch, Cầu Giấy, Hà Nội
                  </div>
                </div>
                <a href="#" className="text-blue-600 ml-auto">
                  Thay đổi
                </a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-clock text-blue-600 mr-2"></i>
                <div className="text-gray-800">23:00</div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <i className="fas fa-map-marker-alt text-blue-600 mr-2"></i>
                <div>
                  <div className="font-semibold text-gray-800">
                    Văn phòng Sapa
                  </div>
                  <div className="text-gray-600">
                    Đường N1, Chợ Mới, 571 đường Điện Biên Phủ, Thị trấn Sa Pa,
                    Sa Pa, Lào Cai
                  </div>
                </div>
                <a href="#" className="text-blue-600 ml-auto">
                  Thay đổi
                </a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-clock text-blue-600 mr-2"></i>
                <div className="text-gray-800">04:40 (30/10)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookingconfirmation;
