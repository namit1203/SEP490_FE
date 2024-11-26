import React, { useContext, useEffect, useState } from "react";
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
  const [selectedService, setSelectedService] = useState("ConvenientTrip");
  const [promotions, setPromotions] = useState([]); // Promotions list
  const [selectedPromotion, setSelectedPromotion] = useState(null); // Selected promotion

  // Fetch promotions when the component mounts
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
        setPromotions(data || []);
      } catch (error) {
        console.error("Failed to fetch promotions:", error);
        message.error("Không thể tải danh sách khuyến mãi.");
      }
    };

    fetchPromotions();
  }, []);

  const handleApplyPromotion = async () => {
    if (!selectedPromotion) {
      message.warning("Vui lòng chọn một khuyến mãi.");
      return;
    }

    try {
      const selectedPromo = promotions.find(
        (promo) => promo.codePromotion === selectedPromotion
      );
      if (!selectedPromo) {
        message.warning("Khuyến mãi không hợp lệ.");
        return;
      }

      message.success(`Khuyến mãi đã áp dụng: ${selectedPromo.description}`);
    } catch (error) {
      console.error("Failed to apply promotion:", error);
      message.error("Áp dụng khuyến mãi thất bại, vui lòng thử lại.");
    }
  };

  const handelBookTrip = async () => {
    try {
      const tripType = selectedService === "ConvenientTrip" ? 1 : 2;
      const { data } = await axios.get(
        `https://boring-wiles.202-92-7-204.plesk.page/api/Trip/searchTripForConvenient/${dataDetail.startPoint}/${dataDetail.endPoint}/${tripType}`,
        {
          headers: {
            Authorization: `Bearer ${checkLoginToken()}`,
          },
        }
      );

      if (data?.price) {
        setPrice(data?.price);
      }
    } catch (error) {
      console.log(error);
      message.error("Thất bại , vui lòng thử lại !");
    }
  };

  const handelResult = async () => {
    try {
      const dataPayload = {
        userName: profile?.username,
        startTime: dataDetail?.timer,
        price: price,
        pointStart: dataDetail?.startPoint,
        pointEnd: dataDetail?.endPoint,
        phoneNumber: profile?.numberPhone,
        typeOfTrip: selectedService === "ConvenientTrip" ? 1 : 2,
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
                <button className="bg-yellow-500 text-white py-2 px-4 rounded-full mb-4 w-full">
                  ĐẶT XE
                </button>
                <div className="mb-4">
                  <label className="block mb-2">Chọn dịch vụ</label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="datxe_dichvu"
                        value="ConvenientTrip"
                        checked={selectedService === "ConvenientTrip"}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="mr-2"
                      />
                      Tiện chuyến
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="datxe_dichvu"
                        value="PrivateTrip"
                        checked={selectedService === "PrivateTrip"}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="mr-2"
                      />
                      Bao xe
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Điểm đi</label>
                  <input
                    type="text"
                    value={dataDetail.startPoint}
                    onChange={(e) =>
                      setDataDetal({ ...dataDetail, startPoint: e.target.value })
                    }
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Điểm đến</label>
                  <input
                    type="text"
                    value={dataDetail.endPoint}
                    onChange={(e) =>
                      setDataDetal({ ...dataDetail, endPoint: e.target.value })
                    }
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Chọn khuyến mãi</label>
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
                <button
                  onClick={() => {
                    !price ? handelBookTrip() : handelResult();
                  }}
                  className="bg-green-500 text-white py-2 px-4 rounded-full w-full"
                >
                  {price ? "ĐẶT XE NGAY" : "Tìm xe ngay"}
                </button>
                {price && (
                  <div className="mt-4">
                    <p className="text-gray-700">Giá chuyển đi:</p>
                    <p className="text-2xl text-green-500">{price}đ</p>
                  </div>
                )}
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
