import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { message } from "antd";
import axios from "axios";
import { checkLoginToken } from "../utils";
import { AppContext } from "../context/app.context";

const Convenient = () => {
  const { profile } = useContext(AppContext);

  const [dataDetail, setDataDetail] = useState({
    startPoint: "Ha Noi",
    endPoint: "Bac Giang",
  });
  const [price, setPrice] = useState(null); // Giá gốc
  const [finalPrice, setFinalPrice] = useState(null); // Giá sau khuyến mãi
  const [selectedService, setSelectedService] = useState("ConvenientTrip");
  const [promotions, setPromotions] = useState([]); // Danh sách khuyến mãi
  const [selectedPromotion, setSelectedPromotion] = useState(null); // Khuyến mãi được chọn

  // Fetch promotions khi component mount
  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        const { data } = await axios.get(
          `https://boring-wiles.202-92-7-204.plesk.page/api/Promotion/getPromotionById`,
          {
            headers: {
              Authorization: `Bearer ${checkLoginToken()}`,
            },
          }
        );

        const uniquePromotions = Array.from(
          new Map(data.map((promo) => [promo.codePromotion, promo])).values()
        );
        setPromotions(uniquePromotions);
      } catch (error) {
        console.error("Failed to fetch promotions:", error);
        message.error("Không thể tải danh sách khuyến mãi.");
      }
    };

    fetchPromotions();
  }, []);

  // Gọi API để lấy giá khi dịch vụ hoặc điểm đi/đến thay đổi
  useEffect(() => {
    const tripType = selectedService === "ConvenientTrip" ? 2 : 3;
    handelBookTrip(tripType);
  }, [selectedService, dataDetail.startPoint, dataDetail.endPoint]);

  const handelBookTrip = async (tripType) => {
    try {
      const { data } = await axios.get(
        `https://boring-wiles.202-92-7-204.plesk.page/api/Trip/searchTripForConvenient/${dataDetail.startPoint}/${dataDetail.endPoint}/${tripType}`,
        {
          headers: {
            Authorization: `Bearer ${checkLoginToken()}`,
          },
        }
      );

      if (data?.price) {
        setPrice(data.price);
        setFinalPrice(data.price); // Giá ban đầu và giá sau khuyến mãi đều là giá gốc
        message.success("Đã cập nhật giá chuyến đi.");
      }
    } catch (error) {
      console.error("Error fetching trip price:", error);
      message.error("Không thể tìm thấy giá chuyến đi.");
    }
  };

  const handleApplyPromotion = () => {
    if (selectedPromotion) {
      const selectedPromo = promotions.find(
        (promo) => promo.codePromotion === selectedPromotion
      );

      if (!selectedPromo) {
        message.warning("Khuyến mãi không hợp lệ.");
        return;
      }

      // Tính giá sau khuyến mãi
      const discount = selectedPromo.discount || 0;
      const discountedPrice = price - (price * discount) / 100;
      setFinalPrice(discountedPrice);

      message.success(`Khuyến mãi đã áp dụng: ${selectedPromo.description}`);
    } else {
      setFinalPrice(price); // Nếu không chọn khuyến mãi, giữ nguyên giá gốc
      message.info("Không áp dụng khuyến mãi.");
    }
  };

  const handelResult = async () => {
    try {
      const dataPayload = {
        userName: profile?.username,
        startTime: dataDetail?.timer,
        price: finalPrice,
        pointStart: dataDetail?.startPoint,
        pointEnd: dataDetail?.endPoint,
        pickUpPoint: dataDetail?.pickUpPoint,
        dropOffPoint: dataDetail?.dropOffPoint,
        phoneNumber: profile?.numberPhone,
        typeOfTrip: selectedService === "ConvenientTrip" ? 2 : 3,
      };
      await axios.post(
        "https://boring-wiles.202-92-7-204.plesk.page/api/Request/ConvenientTripCreateForUser",
        dataPayload,
        {
          headers: {
            Authorization: `Bearer ${checkLoginToken()}`,
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
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto p-4">
          <div className="flex">
            <div className="w-3/5 bg-white p-4 shadow-lg">
              <div className="mb-4">
                <label>Chọn dịch vụ</label>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="datxe_dichvu"
                      value="ConvenientTrip"
                      checked={selectedService === "ConvenientTrip"}
                      onChange={(e) => setSelectedService(e.target.value)}
                    />
                    Tiện chuyến
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="datxe_dichvu"
                      value="PrivateTrip"
                      checked={selectedService === "PrivateTrip"}
                      onChange={(e) => setSelectedService(e.target.value)}
                    />
                    Bao xe
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <label>Điểm đi</label>
                <input
                  type="text"
                  value={dataDetail.startPoint}
                  onChange={(e) =>
                    setDataDetail({ ...dataDetail, startPoint: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label>Điểm đến</label>
                <input
                  type="text"
                  value={dataDetail.endPoint}
                  onChange={(e) =>
                    setDataDetail({ ...dataDetail, endPoint: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                />
              </div>

              <div className="mb-4">
                <label>Chọn khuyến mãi</label>
                <select
                  value={selectedPromotion}
                  onChange={(e) => setSelectedPromotion(e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  <option value="">-- Chọn khuyến mãi --</option>
                  {promotions.map((promo) => (
                    <option key={promo.codePromotion} value={promo.codePromotion}>
                      {promo.codePromotion} - Giảm {promo.discount}%
                    </option>
                  ))}
                </select>
                <button
                  onClick={handleApplyPromotion}
                  className="bg-blue-500 text-white py-2 px-4 mt-2 rounded-full w-full"
                >
                  Áp dụng khuyến mãi
                </button>
              </div>
              <div className="mb-4">
                <p>Giá gốc: {price ? `${price}đ` : "Đang tải..."}</p>
                <p>Giá sau khuyến mãi: {finalPrice ? `${finalPrice}đ` : "Đang áp dụng..."}</p>
              </div>
              <button
                onClick={() => {
                  if (!price) {
                    message.warning("Vui lòng kiểm tra giá trước khi đặt xe.");
                    return;
                  }
                  handelResult();
                }}
                className="bg-green-500 text-white py-2 px-4 rounded-full w-full"
              >
                ĐẶT XE NGAY
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Convenient;
