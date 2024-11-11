import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { checkLoginToken } from "../utils";
import { AppContext } from "../context/app.context";
import { message } from "antd";

const Bookingconfirmation = () => {
  const navigate = useNavigate();
  const { profile } = useContext(AppContext);
  const { id } = useParams();
  const [promotion, setPromotion] = useState([]);
  const [promotionId, setPromotionId] = useState([]);
  const [checkSelectPromtion, setCheckSelectPromtion] = useState(null);

  const handelFetchData = async () => {
    const { data } = await axios.get(
      "http://103.245.237.93:8082/api/Promotion",
      {
        headers: {
          Authorization: "Bearer " + checkLoginToken(),
        },
      }
    );
    const currentDate = new Date();
    const validPromotions = data.filter(
      (item) => new Date(item.endDate) > currentDate
    );
    setPromotion(validPromotions);
  };
  const handelFetchDataTipDetails = async () => {
    const { data } = await axios.get(
      "http://103.245.237.93:8082/api/TripDetails/tripId?TripId=" + id,
      {
        headers: {
          Authorization: "Bearer " + checkLoginToken(),
        },
      }
    );
    console.log("promotionId", data);
    setPromotionId(data);
  };
  useEffect(() => {
    handelFetchData();
    handelFetchDataTipDetails();
  }, []);
  const handelBookTrip = async () => {
    try {
      const dataPayload = {
        note: "string",
        typeOfPayment: 1,
      };
      const response = await axios.post(
        `http://103.245.237.93:8082/api/Ticket/bookTicket/${id}?promotionCode=${checkSelectPromtion}`,
        dataPayload,
        {
          headers: {
            Authorization: "Bearer " + checkLoginToken(),
          },
        }
      );
      console.log(response,'response')
      message.success("booking success")
      setTimeout(()=>{
        navigate('/profile')
      },300)
    } catch (error) {
      //
    }
  };
  const discounts = promotion;
  // {
  //   key: "1",
  //   label: "Giảm giá",
  //   children: (
  //     <div className="p-4">
  //       <div className="grid grid-cols-2 gap-4">
  //         {discounts.map((discount, index) => (
  //           <div key={index} className="border rounded-lg p-4 flex">
  //             <img
  //               src={discount.image}
  //               alt="Discount image"
  //               className="w-12 h-12 mr-4"
  //             />
  //             <div>
  //               <div className="text-blue-600 font-bold">
  //                 {discount.title}
  //               </div>
  //               <div className="text-lg font-bold">{discount.discount}</div>
  //               <div>{discount.condition}</div>
  //               <div className="text-gray-500">{discount.expiry}</div>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //       <div className="mt-4 text-blue-600 cursor-pointer">
  //         <i className="fas fa-exclamation-circle"></i> Báo cáo sai / thiếu
  //         thông tin
  //       </div>
  //     </div>
  //   ),
  // },
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
                value={profile?.username}
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
                  value={profile?.numberPhone}
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
                value={profile?.email}
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
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                {discounts.map((discount, index) => (
                  <div
                    onClick={() => {
                      setCheckSelectPromtion(discount?.codePromotion);
                    }}
                    key={index}
                    className={`border rounded-lg p-4 flex cursor-pointer hover:bg-gray-300 ${
                      checkSelectPromtion == discount?.codePromotion
                        ? "bg-gray-500"
                        : ""
                    }`}
                  >
                    <img
                      src={discount?.imagePromotion}
                      alt="Discount image"
                      className="w-12 h-12 mr-4"
                    />
                    <div>
                      <div className="text-blue-600 font-bold">
                        {discount.title}
                      </div>
                      <div className="text-lg font-bold">
                        {discount.discount}
                      </div>
                      <div>{discount.condition}</div>
                      <div className="text-gray-500">{discount.expiry}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-blue-600 cursor-pointer">
                <i className="fas fa-exclamation-circle"></i> Báo cáo sai /
                thiếu thông tin
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-4">Tạm tính</h2>
            <div className="text-2xl font-bold text-gray-800">750.000đ</div>
            <button
              onClick={handelBookTrip}
              className="w-full mt-5 bg-yellow-500 text-white py-2 rounded font-bold"
            >
              Thanh toán
            </button>
          </div>
        </div>
        <div className="col-span-2 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Phương thức thanh toán</h2>
          <div className="mb-4">
            <input type="radio" id="qr" name="payment" className="mr-2" />
            <label htmlFor="qr" className="font-bold">
              QR chuyển khoản/ Ví điện tử
            </label>
            <span className="ml-2 bg-green-100 text-green-700 px-2 py-1 rounded">
              An toàn & tiện lợi
            </span>
            <p className="text-gray-500 mt-2">
              Không cần nhập thông tin. Xác nhận thanh toán tức thì, nhanh chóng
              và ít sai sót.
            </p>
            <div className="flex mt-2">
              <img
                src="https://placehold.co/40x40"
                alt="MoMo logo"
                className="mr-2"
              />
              <img
                src="https://placehold.co/40x40"
                alt="ZaloPay logo"
                className="mr-2"
              />
              <img
                src="https://placehold.co/40x40"
                alt="ShopeePay logo"
                className="mr-2"
              />
              <img
                src="https://placehold.co/40x40"
                alt="ViettelPay logo"
                className="mr-2"
              />
              <img
                src="https://placehold.co/40x40"
                alt="ACB logo"
                className="mr-2"
              />
              <a href="#" className="text-blue-500">
                Xem tất cả
              </a>
            </div>
          </div>
          <div className="mb-4 bg-yellow-100 p-2 rounded">
            <span className="text-yellow-700">Chuyến đi chưa được bảo vệ</span>
            <a href="#" className="text-blue-500 ml-2">
              Thêm bảo hiểm
            </a>
          </div>
          <div className="mb-4">
            <input
              type="radio"
              id="pay-on-bus"
              name="payment"
              className="mr-2"
            />
            <label htmlFor="pay-on-bus" className="font-bold">
              Thanh toán khi lên xe
            </label>
            <p className="text-gray-500 mt-2">
              Bạn có thể thanh toán cho tài xế khi lên xe
            </p>
          </div>
          <div className="mb-4">
            <input type="radio" id="momo" name="payment" className="mr-2" />
            <label htmlFor="momo" className="font-bold">
              Ví MoMo
            </label>
            <p className="text-gray-500 mt-2">
              Điện thoại của bạn phải được cài đặt ứng dụng MoMo
            </p>
            <p className="text-green-600 mt-2">
              Giảm 20K và 60K khi nhập mã MOMOFLASH15 lần lượt cho đơn hàng từ
              300K và 1.200K trong khung giờ Flash Sale 12h - 14h ngày
              29/10/2024
            </p>
            <a href="#" className="text-blue-500">
              Điều kiện sử dụng
            </a>
          </div>
          <div className="mb-4">
            <input
              type="radio"
              id="international-card"
              name="payment"
              className="mr-2"
            />
            <label htmlFor="international-card" className="font-bold">
              Thẻ thanh toán quốc tế
            </label>
            <p className="text-gray-500 mt-2">Thẻ Visa, MasterCard, JCB</p>
            <p className="text-gray-500 mt-2">
              1/ Nhập mã VXRHDS50 hoặc VXRHDS100 tại Vexere - Giảm 50K hoặc 100K
              lần lượt cho đơn từ 250K hoặc 100K khi thanh toán bằng Thẻ Tín
              dụng quốc tế HDSAISON.
            </p>
            <p className="text-gray-500 mt-2">
              2/Nhập mã VEXEREHOME tại Vexere - Giảm 20% tối đa 60K khi thanh
              toán bằng Thẻ tín dụng Home Credit
            </p>
          </div>

          <p className="text-gray-500 text-center mt-2">
            Bằng việc nhấn nút Thanh toán, bạn đồng ý với{" "}
            <a href="#" className="text-blue-500">
              Chính sách bảo mật thanh toán
            </a>
          </p>
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
              {promotionId?.map((dt, index) => {
                return (
                  <div
                    key={index}
                    className="mb-4 p-4 border rounded-lg shadow-md bg-white"
                  >
                    <div className="mb-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Point Start Details
                      </label>
                      <input
                        value={dt.pointStartDetails}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        readOnly
                      />
                    </div>
                    <div className="mb-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Point End Details
                      </label>
                      <input
                        value={dt.pointEndDetails}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        readOnly
                      />
                    </div>
                    <div className="mb-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Time Start Details
                      </label>
                      <input
                        value={dt.timeStartDetils}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        readOnly
                      />
                    </div>
                    <div className="mb-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Time End Details
                      </label>
                      <input
                        value={dt.timeEndDetails}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        readOnly
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookingconfirmation;
