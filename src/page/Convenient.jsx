import React, { useContext, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { message } from "antd";
import axios from "axios";
import { checkLoginToken } from "../utils";
import { AppContext } from "../context/app.context";

const Convenient = () => {
  const { profile } = useContext(AppContext);

  const [dataDetail, setDataDetal] = useState({
    startPoint: "Ha Noi",
    endPoint: "Bac Giang",
    timer: "2024-11-19T13:15:40.077Z",
    typeOfTrip: 1,
  });
  const [price, setPrice] = useState(null);
  const handelBookTrip = async () => {
    try {
      const { data } = await axios.get(
        `http://103.245.237.93:8082/api/Trip/searchTripForConvenient/${dataDetail.startPoint}/${dataDetail.endPoint}/${dataDetail.typeOfTrip}`,
        {
          headers: {
            Authorization: "Bearer " + checkLoginToken(),
          },
        }
      );

      console.log(dataDetail, "dataDetail");
      if (data?.price) {
        setPrice(data?.price);
      }
    } catch (error) {
      //
      console.log(error);
      message.error("Thất bại , vui lòng thử lại !");
    }
  };
  const handelResult = async () => {
    try {
      //
      console.log(dataDetail, "ccc");
      const dataPayload = {
        userName: profile?.username,
        startTime: dataDetail?.timer,
        price: price,
        pointStart: dataDetail?.startPoint,
        pointEnd: dataDetail?.endPoint,
        phoneNumber: profile?.numberPhone,
        typeOfTrip: 2,
      };
      const result = await axios.post(
        "http://103.245.237.93:8082/api/Request/ConvenientTripCreateForUser",
        dataPayload,
        {
          headers: {
            Authorization: "Bearer " + checkLoginToken(),
          },
        }
      );
      message.success("Thành công , chúng tôi sẽ liên hệ lại bạn !");
      setTimeout(() => {
        window.location.href = "/";
      }, 500);
    } catch (error) {
      console.log(error);
      message.error("Thất bại , vui lòng thử lại !");
    }
  };

  return (
    <div>
      <Header />
      <div>
        <div className="bg-gray-100 min-h-screen">
          <div className="relative">
            <img
              src="/tienchuyen.jpg"
              alt="Cars on display with city background"
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="container mx-auto p-4">
            <div className="flex">
              <div className="w-3/5 bg-white p-4 shadow-lg">
                <button className="bg-yellow-500 text-white py-2 px-4 rounded mb-4 w-full">
                  ĐẶT XE
                </button>
                <div className="flex justify-around mb-4">
                  <button className="text-green-500">
                    <i className="fas fa-car"></i> Xe ghép
                  </button>
                  <button className="text-gray-500">
                    <i className="fas fa-plane"></i> Sân bay
                  </button>
                  <button className="text-gray-500">
                    <i className="fas fa-road"></i> Đường dài
                  </button>
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Điểm đi</label>
                  <select
                    // onChange={(e) => {
                    //   setDataDetal({
                    //     ...dataDetail,
                    //     startPoint: e.target.value,
                    //   });
                    // }}
                    className="w-full p-2 border rounded"
                  >
                    <option value="Hà Nội">Hà Nội</option>
                    <option value="Thành Phố Ninh Bình">
                      Thành Phố Ninh Bình
                    </option>
                    <option value="Hoa Lư - Ninh Bình">
                      Hoa Lư - Ninh Bình
                    </option>
                    <option value="Gia Viễn - Ninh Bình">
                      Gia Viễn - Ninh Bình
                    </option>
                    <option value="Nho Quan - Ninh Bình">
                      Nho Quan - Ninh Bình
                    </option>
                    <option value="Tam Điệp - Ninh Bình">
                      Tam Điệp - Ninh Bình
                    </option>
                    <option value="Kim Sơn - Ninh Bình">
                      Kim Sơn - Ninh Bình
                    </option>
                    <option value="Yên Mô - Ninh Bình">
                      Yên Mô - Ninh Bình
                    </option>
                    <option value="Yên Khánh - Ninh Bình">
                      Yên Khánh - Ninh Bình
                    </option>
                    <option value="Hưng Hà - Thái Bình">
                      Hưng Hà - Thái Bình
                    </option>
                    <option value="Thành Phố Thái Bình">
                      Thành Phố Thái Bình
                    </option>
                    <option value="Đông Hưng - Thái Bình">
                      Đông Hưng - Thái Bình
                    </option>
                    <option value="Vũ Thư - Thái Bình">
                      Vũ Thư - Thái Bình
                    </option>
                    <option value="Tiền Hải - Thái Bình">
                      Tiền Hải - Thái Bình
                    </option>
                    <option value="Kiến Xương - Thái Bình">
                      Kiến Xương - Thái Bình
                    </option>
                    <option value="Quỳnh Phụ - Thái Bình">
                      Quỳnh Phụ - Thái Bình
                    </option>
                    <option value="Thái Thụy - Thái Bình">
                      Thái Thụy - Thái Bình
                    </option>
                    <option value="Thành Phố Nam Định">
                      Thành Phố Nam Định
                    </option>
                    <option value="Mỹ Lộc - Nam Định">Mỹ Lộc - Nam Định</option>
                    <option value="Nam Trực - Nam Định">
                      Nam Trực - Nam Định
                    </option>
                    <option value="Ý Yên - Nam Định">Ý Yên - Nam Định</option>
                    <option value="Vụ Bản - Nam Định">Vụ Bản - Nam Định</option>
                    <option value="Trực Ninh- Nam Định">
                      Trực Ninh- Nam Định
                    </option>
                    <option value="Xuân Trường - Nam Định">
                      Xuân Trường - Nam Định
                    </option>
                    <option value="Giao Thủy - Nam Định">
                      Giao Thủy - Nam Định
                    </option>
                    <option value="Hải Hậu - Nam Định">
                      Hải Hậu - Nam Định
                    </option>
                    <option value="Nghĩa Hưng - Nam Định">
                      Nghĩa Hưng - Nam Định
                    </option>
                    <option value="Hạ Long - Quảng Ninh">
                      Hạ Long - Quảng Ninh
                    </option>
                    <option value="Cẩm Phả - Quảng Ninh">
                      Cẩm Phả - Quảng Ninh
                    </option>
                    <option value="Móng Cái - Quảng Ninh">
                      Móng Cái - Quảng Ninh
                    </option>
                    <option value="Uông Bí - Quảng Ninh">
                      Uông Bí - Quảng Ninh
                    </option>
                    <option value="Đông Triều - Quảng Ninh">
                      Đông Triều - Quảng Ninh
                    </option>
                    <option value="Quảng Yên - Quảng Ninh">
                      Quảng Yên - Quảng Ninh
                    </option>
                    <option value="Kiến An - Hải Phòng">
                      Kiến An - Hải Phòng
                    </option>
                    <option value="Lê Chân - Hải Phòng">
                      Lê Chân - Hải Phòng
                    </option>
                    <option value="Ngô Quyền - Hải Phòng">
                      Ngô Quyền - Hải Phòng
                    </option>
                    <option value="Hồng Bàng- Hải Phòng">
                      Hồng Bàng- Hải Phòng
                    </option>
                    <option value="Dương Kinh - Hải Phòng">
                      Dương Kinh - Hải Phòng
                    </option>
                    <option value="Hải An - Hải Phòng">
                      Hải An - Hải Phòng
                    </option>
                    <option value="Đồ Sơn - Hải Phòng">
                      Đồ Sơn - Hải Phòng
                    </option>
                    <option value="An Lão- Hải Phòng">An Lão- Hải Phòng</option>
                    <option value="An Dương - Hải Phòng">
                      An Dương - Hải Phòng
                    </option>
                    <option value="Kiến Thụy - Hải Phòng">
                      Kiến Thụy - Hải Phòng
                    </option>
                    <option value="Tiên Lãng - Hải Phòng">
                      Tiên Lãng - Hải Phòng
                    </option>
                    <option value="Vĩnh Bảo - Hải Phòng">
                      Vĩnh Bảo - Hải Phòng
                    </option>
                    <option value="Thủy Nguyên - Hải Phòng">
                      Thủy Nguyên - Hải Phòng
                    </option>
                    <option value="Cát Hải - Hải Phòng">
                      Cát Hải - Hải Phòng
                    </option>
                    <option value="Vị trí khác">Vị trí khác</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Điểm đến</label>
                  <select
                    // onChange={(e) => {
                    //   setDataDetal({
                    //     ...dataDetail,
                    //     endPoint: e.target.value,
                    //   });
                    // }}
                    className="w-full p-2 border rounded"
                  >
                    <option value="Hà Nội">Hà Nội</option>
                    <option value="Thành Phố Ninh Bình">
                      Thành Phố Ninh Bình
                    </option>
                    <option value="Hoa Lư - Ninh Bình">
                      Hoa Lư - Ninh Bình
                    </option>
                    <option value="Gia Viễn - Ninh Bình">
                      Gia Viễn - Ninh Bình
                    </option>
                    <option value="Nho Quan - Ninh Bình">
                      Nho Quan - Ninh Bình
                    </option>
                    <option value="Tam Điệp - Ninh Bình">
                      Tam Điệp - Ninh Bình
                    </option>
                    <option value="Kim Sơn - Ninh Bình">
                      Kim Sơn - Ninh Bình
                    </option>
                    <option value="Yên Mô - Ninh Bình">
                      Yên Mô - Ninh Bình
                    </option>
                    <option value="Yên Khánh - Ninh Bình">
                      Yên Khánh - Ninh Bình
                    </option>
                    <option value="Hưng Hà - Thái Bình">
                      Hưng Hà - Thái Bình
                    </option>
                    <option value="Thành Phố Thái Bình">
                      Thành Phố Thái Bình
                    </option>
                    <option value="Đông Hưng - Thái Bình">
                      Đông Hưng - Thái Bình
                    </option>
                    <option value="Vũ Thư - Thái Bình">
                      Vũ Thư - Thái Bình
                    </option>
                    <option value="Tiền Hải - Thái Bình">
                      Tiền Hải - Thái Bình
                    </option>
                    <option value="Kiến Xương - Thái Bình">
                      Kiến Xương - Thái Bình
                    </option>
                    <option value="Quỳnh Phụ - Thái Bình">
                      Quỳnh Phụ - Thái Bình
                    </option>
                    <option value="Thái Thụy - Thái Bình">
                      Thái Thụy - Thái Bình
                    </option>
                    <option value="Thành Phố Nam Định">
                      Thành Phố Nam Định
                    </option>
                    <option value="Mỹ Lộc - Nam Định">Mỹ Lộc - Nam Định</option>
                    <option value="Nam Trực - Nam Định">
                      Nam Trực - Nam Định
                    </option>
                    <option value="Ý Yên - Nam Định">Ý Yên - Nam Định</option>
                    <option value="Vụ Bản - Nam Định">Vụ Bản - Nam Định</option>
                    <option value="Trực Ninh- Nam Định">
                      Trực Ninh- Nam Định
                    </option>
                    <option value="Xuân Trường - Nam Định">
                      Xuân Trường - Nam Định
                    </option>
                    <option value="Giao Thủy - Nam Định">
                      Giao Thủy - Nam Định
                    </option>
                    <option value="Hải Hậu - Nam Định">
                      Hải Hậu - Nam Định
                    </option>
                    <option value="Nghĩa Hưng - Nam Định">
                      Nghĩa Hưng - Nam Định
                    </option>
                    <option value="Hạ Long - Quảng Ninh">
                      Hạ Long - Quảng Ninh
                    </option>
                    <option value="Cẩm Phả - Quảng Ninh">
                      Cẩm Phả - Quảng Ninh
                    </option>
                    <option value="Móng Cái - Quảng Ninh">
                      Móng Cái - Quảng Ninh
                    </option>
                    <option value="Uông Bí - Quảng Ninh">
                      Uông Bí - Quảng Ninh
                    </option>
                    <option value="Đông Triều - Quảng Ninh">
                      Đông Triều - Quảng Ninh
                    </option>
                    <option value="Quảng Yên - Quảng Ninh">
                      Quảng Yên - Quảng Ninh
                    </option>
                    <option value="Kiến An - Hải Phòng">
                      Kiến An - Hải Phòng
                    </option>
                    <option value="Lê Chân - Hải Phòng">
                      Lê Chân - Hải Phòng
                    </option>
                    <option value="Ngô Quyền - Hải Phòng">
                      Ngô Quyền - Hải Phòng
                    </option>
                    <option value="Hồng Bàng- Hải Phòng">
                      Hồng Bàng- Hải Phòng
                    </option>
                    <option value="Dương Kinh - Hải Phòng">
                      Dương Kinh - Hải Phòng
                    </option>
                    <option value="Hải An - Hải Phòng">
                      Hải An - Hải Phòng
                    </option>
                    <option value="Đồ Sơn - Hải Phòng">
                      Đồ Sơn - Hải Phòng
                    </option>
                    <option value="An Lão- Hải Phòng">An Lão- Hải Phòng</option>
                    <option value="An Dương - Hải Phòng">
                      An Dương - Hải Phòng
                    </option>
                    <option value="Kiến Thụy - Hải Phòng">
                      Kiến Thụy - Hải Phòng
                    </option>
                    <option value="Tiên Lãng - Hải Phòng">
                      Tiên Lãng - Hải Phòng
                    </option>
                    <option value="Vĩnh Bảo - Hải Phòng">
                      Vĩnh Bảo - Hải Phòng
                    </option>
                    <option value="Thủy Nguyên - Hải Phòng">
                      Thủy Nguyên - Hải Phòng
                    </option>
                    <option value="Cát Hải - Hải Phòng">
                      Cát Hải - Hải Phòng
                    </option>
                    <option value="Vị trí khác">Vị trí khác</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Ngày đi</label>
                  <input type="date" className="w-full p-2 border rounded" />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Giờ đi</label>
                  <input
                    // onChange={(e) => {
                    //   setDataDetal({
                    //     ...dataDetail,
                    //     timer: e.target.value,
                    //   });
                    // }}
                    type="time"
                    className="w-full p-2 border rounded"
                  />
                </div>
                {/* <div className="mb-4">
                  <label className="block mb-2">Họ và tên</label>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Số điện thoại</label>
                  <input type="text" className="w-full p-2 border rounded" />
                </div> */}
                {price && (
                  <>
                    <div className="mb-4">
                      <p className="text-gray-700">Giá chuyển đi:</p>
                      <p className="text-2xl text-green-500">300,000đ</p>
                    </div>
                  </>
                )}
                <button
                  onClick={() => {
                    !price ? handelBookTrip() : handelResult();
                  }}
                  className="bg-green-500 text-white py-2 px-4 rounded w-full"
                >
                  {price ? "ĐẶT XE NGAY" : "Tìm xe ngay"}
                </button>
                <p className="text-gray-500 text-sm mt-4">
                  Lưu ý: Các vé đặt xe sẽ được xác nhận lại qua điện thoại hoặc
                  zalo. Các tuyến khác vui lòng gọi hotline để được tư vấn.
                </p>
              </div>
              <div className="w-2/5 p-4">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">
                  5 CAM KẾT VÀNG VỀ DỊCH VỤ CỦA CHÚNG TÔI
                </h2>
                <ul className="list-decimal list-inside text-gray-700">
                  <li>
                    Sử dụng 100% xe điện của Vinfast đối với xe dưới 7 chỗ.
                  </li>
                  <li>Giá đã bao gồm chi phí trọn gói, không phát sinh.</li>
                  <li>
                    Đón trả khách hàng tận nơi, lộ trình tối ưu nhất như đi xe
                    riêng.
                  </li>
                  <li>Xe mới, sạch sẽ, không mùi, không khói.</li>
                  <li>Lái xe kinh nghiệm, tận tâm, vui vẻ, chuyên nghiệp.</li>
                </ul>
                <div className="flex mt-4">
                  <button className="bg-green-500 text-white py-2 px-4 rounded mr-2">
                    <i className="fas fa-phone"></i>
                  </button>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded">
                    <i className="fas fa-comments"></i> Zalo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Convenient;
