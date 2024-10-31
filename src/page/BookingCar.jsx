import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { Tabs } from "antd";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const BookingCar = () => {
  const [showOption, setShowOption] = useState(null);
  const [checkSelect, setCheckSelect] = useState(false);
  const [selectAddress, setSelectAddress] = useState(false);
  const location = useLocation();
  const [dataCar, setDataCar] = useState([]);
  const [params, setParams] = useState({
    startPoint: "",
    endPoint: "",
    time: "",
  });
  const initializeParamsFromURL = () => {
    const searchParams = new URLSearchParams(location.search);
    setParams({
      startPoint: searchParams.get("startPoint") || "",
      endPoint: searchParams.get("endPoint") || "",
      time: searchParams.get("time") || "",
    });
  };

  const handelFetchData = async () => {
    try {
      const { data } = await axios.get(
        `http://103.245.237.93:8082/api/Trip/searchTrip/startPoint/endPoint/time`,
        {
          params: {
            startPoint: params.startPoint,
            endPoint: params.endPoint,
            time: params.time,
          },
        }
      );
      setDataCar(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    initializeParamsFromURL();
  }, [location.search]);
  const handleSearchClick = () => {
    navigate({
      search: createSearchParams(params).toString(),
    });
    handelFetchData();
  };
  const navigate = useNavigate();
  const onChange = (key) => {
    console.log(key);
  };
  const discounts = [
    {
      title: "BẠN MỚI (VEXERE)",
      discount: "Giảm 25%, tối đa 50k",
      condition: "Đơn hàng tối đa 2 vé",
      expiry: "HSD: T5, 31/10",
      image: "/voucher.png",
    },
    {
      title: "THANH TOÁN",
      discount: "Giảm 100k",
      condition: "Đơn hàng tối thiểu 450k",
      expiry: "HSD: T5, 31/10",
      image: "/voucher.png",
    },
    {
      title: "GIỜ VÀNG",
      discount: "Giảm 20%, tối đa 250k",
      condition: "Đơn hàng tối đa 1 vé",
      expiry: "Sắp diễn ra! Hiệu lực từ 12:00 - T3, 29/...",
      image: "/voucher.png",
    },
    {
      title: "THANH TOÁN",
      discount: "Giảm 20%",
      condition: "Đơn hàng không giới hạn s...",
      expiry: "HSD: T7, 30/11",
      image: "/voucher.png",
    },
    {
      title: "THANH TOÁN",
      discount: "Giảm 20k",
      condition: "Đơn hàng tối thiểu 200k",
      expiry: "HSD: T5, 19/12",
      image: "/voucher.png",
    },
    {
      title: "THANH TOÁN",
      discount: "Giảm 50k",
      condition: "Đơn hàng tối đa 60k",
      expiry: "HSD: T5, 19/12",
      image: "/voucher.png",
    },
  ];
  const itemsV1 = [
    {
      key: "1",
      label: "Giảm giá",
      children: (
        <div className="p-4">
          <div className="grid grid-cols-2 gap-4">
            {discounts.map((discount, index) => (
              <div key={index} className="border rounded-lg p-4 flex">
                <img
                  src={discount.image}
                  alt="Discount image"
                  className="w-12 h-12 mr-4"
                />
                <div>
                  <div className="text-blue-600 font-bold">
                    {discount.title}
                  </div>
                  <div className="text-lg font-bold">{discount.discount}</div>
                  <div>{discount.condition}</div>
                  <div className="text-gray-500">{discount.expiry}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-blue-600 cursor-pointer">
            <i className="fas fa-exclamation-circle"></i> Báo cáo sai / thiếu
            thông tin
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "Đón/trả",
      children: (
        <div>
          <div className="p-4">
            <div className="text-blue-600 font-bold mb-2">Lưu ý</div>
            <div className="mb-4">
              Các mốc thời gian đón, trả bên dưới là thời gian dự kiến.
              <br />
              Lịch này có thể thay đổi tùy tình hình thực tế.
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="font-bold">Điểm đón</div>
              <div className="font-bold">Điểm trả</div>
              <div>22:00 • Văn phòng 779 Giải Phóng</div>
              <div>04:00 (30/10) • Bến xe Sapa</div>
              <div>23:00 • Văn phòng 7 Phạm Văn Đồng</div>
              <div>04:40 (30/10) • Văn phòng Sapa</div>
              <div>23:00 • Sân bay Nội Bài - Sảnh nội địa cửa đến E5</div>
              <div>
                05:00 (30/10) •{" "}
                <span className="bg-green-200 text-green-800 px-2 py-1 rounded">
                  Có trung chuyển
                </span>{" "}
                Thị trấn Sapa
              </div>
              <div>23:00 • Sân bay Nội Bài - Sảnh quốc tế Cột 17 Tầng 1</div>
              <div></div>
              <div>23:20 • Văn phòng Nội Bài</div>
              <div></div>
              <div>23:20 • Bến xe buýt Chợ Bầu</div>
              <div></div>
              <div>23:25 • Mê Linh Plaza</div>
              <div></div>
              <div>23:40 • Km 16 cao tốc Nội Bài - Lào Cai</div>
              <div></div>
            </div>
            <div className="mt-4 text-blue-600">
              <a href="#">Báo cáo sai/thiếu thông tin</a>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "4",
      label: "Chính sách",
      children: (
        <div className="max-w-3xl mx-auto">
          <h1 className="text-xl font-bold mb-4">Chính sách hủy đơn hàng</h1>
          <div className="flex items-center mb-4">
            <div className="flex-1 text-center bg-yellow-500 text-white py-2">
              Hôm nay
            </div>
            <div className="flex-1 text-center bg-gray-200 py-2">
              21:00
              <br />
              29/10/2024
            </div>
            <div className="flex-1 text-center bg-red-500 text-white py-2">
              Khởi hành
            </div>
          </div>
          <div className="flex justify-between text-sm mb-4">
            <span>Không mất phí</span>
            <span>Phí hủy 100%</span>
          </div>
          <p className="text-sm mb-6">
            <strong>Ghi Chú:</strong> Phí hủy sẽ được tính trên giá gốc, không
            giảm trừ khuyến mãi hoặc giảm giá; đồng thời không vượt quá số tiền
            quý khách đã thanh toán.
          </p>
          <h2 className="text-lg font-bold mb-2">Chính sách nhà xe</h2>
          <h3 className="text-md font-bold mb-2">Yêu cầu lên xe</h3>
          <ul className="list-disc list-inside mb-4">
            <li>
              Có mặt tại văn phòng/quầy vé/bến xe trước 30 phút để làm thủ tục
              lên xe
            </li>
            <li>Đối vé giấy trước khi lên xe</li>
            <li>Xuất trình SMS/Email đặt vé cho nhân viên</li>
            <li>Không mang đồ ăn, thức uống có mùi lên xe</li>
            <li>Không hút thuốc lá, không sử dụng chất kích thích trên xe</li>
            <li>Không vứt rác trên xe</li>
            <li>Không làm ồn, gây mất trật tự trên xe</li>
            <li>Không mang giày, dép trên xe</li>
          </ul>
          <h3 className="text-md font-bold mb-2">Hành lý xách tay</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Tổng trọng lượng hành lý không vượt quá 20 kg</li>
            <li>Không vận chuyển hàng hóa cồng kềnh</li>
            <li>
              Hành lý trên trong trường hợp hủy đơn hàng do vi phạm các quy định
              về hành lý
            </li>
          </ul>
          <h3 className="text-md font-bold mb-2">Trẻ em và phụ nữ có thai</h3>
          <ul className="list-disc list-inside mb-4">
            <li>
              Trẻ em dưới 5 tuổi hoặc dưới 100 cm được miễn phí nếu ngồi cùng
              ghế/giường với bố mẹ
            </li>
            <li>
              Trẻ em từ 5 tuổi hoặc từ 120 cm trở lên mua vé như người lớn
            </li>
            <li>Nhà xe có thể đảm bảo sức khỏe trong quá trình di chuyển</li>
            <li>
              Nhà xe từ chối vận chuyển nếu hành khách không tuân thủ các quy
              định về sức khỏe
            </li>
          </ul>
          <h3 className="text-md font-bold mb-2">Động vật cảnh/Thú cưng</h3>
          <ul className="list-disc list-inside mb-4">
            <li>
              Hành xe có quyền từ chối vận chuyển động vật là một hành lý xách
              tay
            </li>
            <li>Hành khách có trách nhiệm chăm sóc thú cưng</li>
            <li>
              Nhiệt độ trên xe có thể không phù hợp với điều kiện sinh hoạt của
              thú cưng
            </li>
            <li>
              Trong trường hợp thú cưng gây hại, nhà xe không chịu trách nhiệm
              về sự cố
            </li>
          </ul>
          <h3 className="text-md font-bold mb-2">Xuất hóa đơn GTGT</h3>
          <ul className="list-disc list-inside mb-4">
            <li>
              Nhà xe có cung cấp hóa đơn GTGT cho dịch vụ xe khách, phí xuất hóa
              đơn là 10% giá trị vé
            </li>
            <li>
              Quý khách vui lòng cung cấp đầy đủ, chính xác thông tin hóa đơn
            </li>
            <li>
              Nhà xe từ chối xuất lại hóa đơn nếu hành khách cung cấp sai thông
              tin
            </li>
          </ul>
          <div className="text-right text-sm text-blue-500">
            <a href="#">Báo cáo sai/thiếu thông tin</a>
          </div>
        </div>
      ),
    },
    {
      key: "5",
      label: "Hình ảnh",
      children: (
        <div className="flex flex-col items-center p-4">
          <div className="relative w-3/4">
            <img
              src="https://static.vexere.com/production/images/1592301219051.jpeg"
              alt="Three buses parked in a row with trees in the background"
              className="w-full h-auto"
            />
            <div className="absolute bottom-4 left-4 text-white text-2xl font-bold">
              vexere
            </div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-2xl font-bold cursor-pointer">
              <i className="fas fa-chevron-left"></i>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-2xl font-bold cursor-pointer">
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
          <div className="flex mt-4 space-x-2">
            <div className="border-2 border-blue-500 p-1">
              <img
                src="https://static.vexere.com/production/images/1592301219051.jpeg"
                alt="Thumbnail of three buses parked in a row"
                className="w-20 h-20"
              />
            </div>
            <div className="p-1">
              <img
                src="https://static.vexere.com/production/images/1592301219051.jpeg"
                alt="Thumbnail of a bus with lights on at night"
                className="w-20 h-20"
              />
            </div>
            <div className="p-1">
              <img
                src="https://static.vexere.com/production/images/1592301219051.jpeg"
                alt="Thumbnail of a bus parked near a monument"
                className="w-20 h-20"
              />
            </div>
            <div className="p-1">
              <img
                src="https://static.vexere.com/production/images/1592301219051.jpeg"
                alt="Thumbnail of the interior of a bus"
                className="w-20 h-20"
              />
            </div>
            <div className="p-1">
              <img
                src="https://static.vexere.com/production/images/1592301219051.jpeg"
                alt="Thumbnail of a bus driving on a road"
                className="w-20 h-20"
              />
            </div>
          </div>
          <div className="mt-2 text-gray-600">1/6</div>
          <div className="mt-2 text-blue-500 cursor-pointer">
            Báo cáo sai / thiếu thông tin
          </div>
        </div>
      ),
    },
  ];
  return (
    <div>
      <Header />
      {/*  */}

      <div className="mx-32">
        <div
          id="loadingContainer"
          className="loading__LoadingContainer-sc-1dclnqz-0 dKZTJA mt-3"
        >
          <div
            id="loadingWrapper"
            className="loading__LoadingWrapper-sc-1dclnqz-2 ljuRu"
            style={{ visibility: "hidden" }}
          >
            <div className="loading__LoadingStyled-sc-1dclnqz-1 hbnDkB" />
            <div className="loading__LoadingBody-sc-1dclnqz-4 iHapwn">
              <img
                className="imageLoading__Image-sc-19e44f6-0 fiBJvr image-loading"
                src="https://229a2c9fe669f7b.cmccloud.com.vn/icon_horizontal.svg"
                alt="loading"
                width={30}
                height={30}
              />
            </div>
          </div>
          <div className="route__RouteWrapper-sc-3icvq2-0 cmOZcp">
            <div className="route__BodyWrapper-sc-3icvq2-2 fngOWF">
              <div className="TransportationWidgetTab__SearchBase-sc-1a4o00m-0 bftUFJ padding-left-10">
                <div className="TransportationWidgetTab__SearchWrapper-sc-1a4o00m-1 eLiWVh">
                  <div className="ant-tabs ant-tabs-top TransportationWidgetTab__StyledTabs-sc-1a4o00m-2 efZcOi ant-tabs-card ant-tabs-no-animation">
                    <div
                      role="tablist"
                      className="ant-tabs-bar ant-tabs-top-bar ant-tabs-card-bar"
                      tabIndex={0}
                    >
                      <div className="ant-tabs-nav-container">
                        <span className="ant-tabs-tab-prev ant-tabs-tab-btn-disabled">
                          <span className="ant-tabs-tab-prev-icon">
                            <i
                              aria-label="icon: left"
                              className="anticon anticon-left ant-tabs-tab-prev-icon-target"
                            >
                              <svg
                                viewBox="64 64 896 896"
                                focusable="false"
                                className
                                data-icon="left"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" />
                              </svg>
                            </i>
                          </span>
                        </span>
                        <span className="ant-tabs-tab-next ant-tabs-tab-btn-disabled">
                          <span className="ant-tabs-tab-next-icon">
                            <i
                              aria-label="icon: right"
                              className="anticon anticon-right ant-tabs-tab-next-icon-target"
                            >
                              <svg
                                viewBox="64 64 896 896"
                                focusable="false"
                                className
                                data-icon="right"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z" />
                              </svg>
                            </i>
                          </span>
                        </span>
                        <div className="ant-tabs-nav-wrap">
                          <div className="ant-tabs-nav-scroll">
                            <div className="ant-tabs-nav ant-tabs-nav-animated">
                              <div>
                                <div
                                  role="tab"
                                  aria-disabled="false"
                                  aria-selected="true"
                                  className="ant-tabs-tab-active ant-tabs-tab"
                                >
                                  <span className="TransportationWidgetTab__TabLabelContainer-sc-1a4o00m-6 dhuMWw">
                                    <div
                                      style={{
                                        background: "none",
                                        marginLeft: 0,
                                      }}
                                      className="TransportationWidgetTab__IconWrapper-sc-1a4o00m-4 cnqXqt"
                                    >
                                      <svg viewBox="0 0 24 24">
                                        <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z" />
                                      </svg>
                                    </div>
                                    <span className="TransportationWidgetTab__LabelWrapper-sc-1a4o00m-5 gPyyp">
                                      270K
                                    </span>
                                  </span>
                                </div>
                                <div
                                  role="tab"
                                  aria-disabled="false"
                                  aria-selected="false"
                                  className=" ant-tabs-tab"
                                >
                                  <span className="TransportationWidgetTab__TabLabelContainer-sc-1a4o00m-6 dhuMWw">
                                    <div
                                      style={{
                                        background: "none",
                                        marginLeft: 0,
                                      }}
                                      className="TransportationWidgetTab__IconWrapper-sc-1a4o00m-4 cnqXqt"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                      >
                                        <path d="M22 16v-2l-8.421-5V3.5c0-.83-.705-1.5-1.579-1.5s-1.579.67-1.579 1.5V9L2 14v2l8.421-2.5V19l-2.105 1.5V22L12 21l3.684 1v-1.5L13.58 19v-5.5L22 16z" />
                                      </svg>
                                    </div>
                                    <span className="TransportationWidgetTab__LabelWrapper-sc-1a4o00m-5 gPyyp">
                                      Máy bay
                                    </span>
                                    <span className="TransportationWidgetTab__NewLabel-sc-1a4o00m-11 dugVQY">
                                      -20K
                                    </span>
                                  </span>
                                </div>
                                <div
                                  role="tab"
                                  aria-disabled="false"
                                  aria-selected="false"
                                  className=" ant-tabs-tab"
                                >
                                  <span className="TransportationWidgetTab__TabLabelContainer-sc-1a4o00m-6 dhuMWw">
                                    <div
                                      style={{
                                        background: "none",
                                        marginLeft: 0,
                                      }}
                                      className="TransportationWidgetTab__IconWrapper-sc-1a4o00m-4 cnqXqt"
                                    >
                                      <svg
                                        width={25}
                                        height={24}
                                        viewBox="0 0 25 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M8.5 2a4 4 0 0 0-4 4v11a1 1 0 0 0 1 1h1l-2 4h2l.6-1.2h10.8l.6 1.2h2l-2-4h1a1 1 0 0 0 1-1V6a4 4 0 0 0-4-4h-8zm8 16h-8L8 19h9l-.5-1zm-8-14a2 2 0 0 0-2 2v5h5V4h-3zm10 7h-5V4h3a2 2 0 0 1 2 2v5zm-9 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM17 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                                        />
                                      </svg>
                                    </div>
                                    <span className="TransportationWidgetTab__LabelWrapper-sc-1a4o00m-5 gPyyp">
                                      Tàu hỏa
                                    </span>
                                    <span className="TransportationWidgetTab__NewLabel-sc-1a4o00m-11 duhJHP">
                                      Vé Tết
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div
                                className="ant-tabs-ink-bar ant-tabs-ink-bar-animated"
                                style={{
                                  display: "block",
                                  transform: "translate3d(0px, 0px, 0px)",
                                  width: 130,
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      tabIndex={0}
                      style={{
                        width: 0,
                        height: 0,
                        overflow: "hidden",
                        position: "absolute",
                      }}
                      role="presentation"
                    />
                    <div className="ant-tabs-content ant-tabs-content-no-animated ant-tabs-top-content ant-tabs-card-content">
                      <div
                        role="tabpanel"
                        aria-hidden="false"
                        className="ant-tabs-tabpane ant-tabs-tabpane-active TransportationWidgetTab__StyledTabPane-sc-1a4o00m-3 bPgAwO"
                      >
                        <div
                          tabIndex={0}
                          style={{
                            width: 0,
                            height: 0,
                            overflow: "hidden",
                            position: "absolute",
                          }}
                          role="presentation"
                        />
                        <div
                          tabIndex={0}
                          style={{
                            width: 0,
                            height: 0,
                            overflow: "hidden",
                            position: "absolute",
                          }}
                          role="presentation"
                        />
                      </div>
                      <div
                        role="tabpanel"
                        aria-hidden="true"
                        className="ant-tabs-tabpane ant-tabs-tabpane-inactive TransportationWidgetTab__StyledTabPane-sc-1a4o00m-3 bPgAwO"
                      />
                      <div
                        role="tabpanel"
                        aria-hidden="true"
                        className="ant-tabs-tabpane ant-tabs-tabpane-inactive TransportationWidgetTab__StyledTabPane-sc-1a4o00m-3 bPgAwO"
                      />
                    </div>
                    <div
                      tabIndex={0}
                      style={{
                        width: 0,
                        height: 0,
                        overflow: "hidden",
                        position: "absolute",
                      }}
                      role="presentation"
                    />
                  </div>
                  <div className="DesktopSearchWidgetInterface__SearchWidgetContainer-sc-9goqqe-3 ivkDKk search-widget-container searchWidget__DesktopSearchWidgetInterfaceWrapper-ss7u8p-0 grgGod">
                    <div className="ant-row-flex search-widget-inner-content">
                      <div className="ant-col DesktopSearchWidgetInterface__AreaWrapperCol-sc-9goqqe-8 caPPgR area-wrapper-col ant-col-xs-24 ant-col-md-20">
                        <div className="ant-row-flex area-inner-content">
                          <div className="ant-col DesktopSearchWidgetInterface__FromInputCol-sc-9goqqe-9 cBAWQS input-col from-input-col">
                            <div className="DesktopSearchWidgetInterface__SelectWrapper-sc-9goqqe-5 hTQdL select-wrapper from-select-wrapper">
                              <div className="VXRSelect2__Container-sc-13qmht0-0 kMydXj select-container from-select">
                                <div className="VXRSelect2__InputContainer-sc-13qmht0-2 cmgXRT">
                                  <div className="icon-container">
                                    <img
                                      src="https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/pickup_vex_blue_24dp.svg"
                                      width={24}
                                      height={24}
                                      alt
                                    />
                                  </div>
                                  <div className="Input__Container-m45jj3-0 jpHwBh input-container VXRSelect2__InputStyled-sc-13qmht0-3 iqPvDy ant-input VXRSelect__input">
                                    <div className="input-section">
                                      <input
                                        data-testid="SearchWidget.from"
                                        data-id="SearchWidget.from"
                                        id="from_input"
                                        placeholder=" "
                                        defaultValue={params?.startPoint}
                                        onChange={(e) =>
                                          setParams({
                                            ...params,
                                            startPoint: e.target.value,
                                          })
                                        }
                                        value={params.startPoint}
                                        className="styled-input"
                                        autoComplete="off"
                                      />
                                      <label
                                        className="base__Caption-sc-1tvbuqk-26 hTYbup color--light-disable"
                                        htmlFor="from_input"
                                      >
                                        Nơi xuất phát
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <ul className="VXRSelect2__DropdownWrapper-sc-13qmht0-1 UVRNF ant-select-dropdown-menu ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical">
                                  <li className="ant-select-dropdown-menu-item-group">
                                    <div
                                      className="ant-select-dropdown-menu-item-group-title"
                                      title="Tỉnh - Thành Phố"
                                    >
                                      Tỉnh - Thành Phố
                                    </div>
                                    <ul className="ant-select-dropdown-menu-item-group-list">
                                      <li className="Option__OptionItem-sc-6gsygm-0 RERwY ant-select-dropdown-menu-item ">
                                        Hà Nội
                                      </li>
                                      <li className="Option__OptionItem-sc-6gsygm-0 RERwY ant-select-dropdown-menu-item ">
                                        Quảng Ninh
                                      </li>
                                      <li className="Option__OptionItem-sc-6gsygm-0 RERwY ant-select-dropdown-menu-item ">
                                        Ninh Bình
                                      </li>
                                      <li className="Option__OptionItem-sc-6gsygm-0 RERwY ant-select-dropdown-menu-item ">
                                        Đà Nẵng
                                      </li>
                                      <li className="Option__OptionItem-sc-6gsygm-0 RERwY ant-select-dropdown-menu-item ">
                                        Sài Gòn
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="ant-select-dropdown-menu-item-group">
                                    <div
                                      className="ant-select-dropdown-menu-item-group-title"
                                      title="Quận - Huyện"
                                    >
                                      Quận - Huyện
                                    </div>
                                    <ul className="ant-select-dropdown-menu-item-group-list">
                                      <li className="Option__OptionItem-sc-6gsygm-0 RERwY ant-select-dropdown-menu-item ">
                                        Sa Pa
                                      </li>
                                      <li className="Option__OptionItem-sc-6gsygm-0 RERwY ant-select-dropdown-menu-item ">
                                        Vũng Tàu
                                      </li>
                                      <li className="Option__OptionItem-sc-6gsygm-0 RERwY ant-select-dropdown-menu-item ">
                                        Đà Lạt
                                      </li>
                                      <li className="Option__OptionItem-sc-6gsygm-0 RERwY ant-select-dropdown-menu-item ">
                                        Nha Trang
                                      </li>
                                      <li className="Option__OptionItem-sc-6gsygm-0 RERwY ant-select-dropdown-menu-item ">
                                        Phan Thiết
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="DesktopSearchWidgetInterface__SwapContainer-sc-9goqqe-4 jggMXR swap-container">
                              <div className="switch-icon-container bg-gray">
                                <div className="material-icons-wrapper md-24 switch-icon ">
                                  <i className="material-icons-outlined ">
                                    import_export
                                  </i>
                                </div>
                              </div>
                            </div>
                            <div className="DesktopSearchWidgetInterface__Divider-sc-9goqqe-2 JxPgs divider" />
                            <div className="DesktopSearchWidgetInterface__LineFocused-sc-9goqqe-13 dJzjGP line-focus" />
                          </div>
                          <div className="ant-col DesktopSearchWidgetInterface__ToInputCol-sc-9goqqe-10 kXqqIz input-col to-input-col">
                            <div className="DesktopSearchWidgetInterface__SelectWrapper-sc-9goqqe-5 hTQdL select-wrapper to-select-wrapper">
                              <div className="VXRSelect2__Container-sc-13qmht0-0 kMydXj select-container to-select">
                                <div className="VXRSelect2__InputContainer-sc-13qmht0-2 cmgXRT">
                                  <div className="icon-container">
                                    <img
                                      src="https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/dropoff_new_24dp.svg"
                                      width={24}
                                      height={24}
                                      alt
                                    />
                                  </div>
                                  <div className="Input__Container-m45jj3-0 jpHwBh input-container VXRSelect2__InputStyled-sc-13qmht0-3 iqPvDy ant-input VXRSelect__input">
                                    <div className="input-section">
                                      <input
                                        data-testid="SearchWidget.to"
                                        data-id="SearchWidget.to"
                                        id="to_input"
                                        placeholder=" "
                                        defaultValue={params?.endPoint}
                                        onChange={(e) =>
                                          setParams({
                                            ...params,
                                            endPoint: e.target.value,
                                          })
                                        }
                                        value={params?.endPoint}
                                        className="styled-input"
                                        autoComplete="off"
                                      />
                                      <label
                                        className="base__Caption-sc-1tvbuqk-26 hTYbup color--light-disable"
                                        htmlFor="to_input"
                                      >
                                        Nơi đến
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <ul className="VXRSelect2__DropdownWrapper-sc-13qmht0-1 UVRNF ant-select-dropdown-menu ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical">
                                  <li className="ant-select-dropdown-menu-item-group">
                                    <div
                                      className="ant-select-dropdown-menu-item-group-title"
                                      title="Tỉnh - Thành Phố"
                                    >
                                      Tỉnh - Thành Phố
                                    </div>
                                    <ul className="ant-select-dropdown-menu-item-group-list">
                                      <li className="Option__OptionItem-sc-6gsygm-0 RERwY ant-select-dropdown-menu-item ">
                                        Hà Nội
                                      </li>
                                      <li className="Option__OptionItem-sc-6gsygm-0 RERwY ant-select-dropdown-menu-item ">
                                        Quảng Ninh
                                      </li>
                                      <li className="Option__OptionItem-sc-6gsygm-0 RERwY ant-select-dropdown-menu-item ">
                                        Ninh Bình
                                      </li>
                                      <li className="Option__OptionItem-sc-6gsygm-0 RERwY ant-select-dropdown-menu-item ">
                                        Đà Nẵng
                                      </li>
                                      <li className="Option__OptionItem-sc-6gsygm-0 RERwY ant-select-dropdown-menu-item ">
                                        Sài Gòn
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="ant-select-dropdown-menu-item-group">
                                    <div
                                      className="ant-select-dropdown-menu-item-group-title"
                                      title="Quận - Huyện"
                                    >
                                      Quận - Huyện
                                    </div>
                                    <ul className="ant-select-dropdown-menu-item-group-list">
                                      <li className="Option__OptionItem-sc-6gsygm-0 RERwY ant-select-dropdown-menu-item ">
                                        Sa Pa
                                      </li>
                                      <li className="Option__OptionItem-sc-6gsygm-0 RERwY ant-select-dropdown-menu-item ">
                                        Vũng Tàu
                                      </li>
                                      <li className="Option__OptionItem-sc-6gsygm-0 RERwY ant-select-dropdown-menu-item ">
                                        Đà Lạt
                                      </li>
                                      <li className="Option__OptionItem-sc-6gsygm-0 RERwY ant-select-dropdown-menu-item ">
                                        Nha Trang
                                      </li>
                                      <li className="Option__OptionItem-sc-6gsygm-0 RERwY ant-select-dropdown-menu-item ">
                                        Phan Thiết
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="DesktopSearchWidgetInterface__LineFocused-sc-9goqqe-13 dJzjGP line-focus" />
                            <div className="DesktopSearchWidgetInterface__Divider-sc-9goqqe-2 JxPgs divider" />
                          </div>
                          <div className="ant-col DesktopSearchWidgetInterface__CalendarCol-sc-9goqqe-11 dOFBYK calendar-col input-col">
                            <div className="DesktopSearchWidgetInterface__CalendarInputWrapper-sc-9goqqe-6 ljTIiP">
                              <div className="DateInput__Container-sc-1ktr46n-0 eoVHxV date-input-container ">
                                <div className="icon-container">
                                  <img
                                    className="trip-date-icon ls-is-cached lazyloaded"
                                    data-src="https://storage.googleapis.com/fe-production/svgIcon/event_vex_blue_24dp.svg"
                                    src="https://storage.googleapis.com/fe-production/svgIcon/event_vex_blue_24dp.svg"
                                    alt="trip-date-icon"
                                    width={24}
                                    height={24}
                                  />
                                </div>
                                <div className="departure-date-select">
                                  <div className="DateInput__InputContainer-sc-1ktr46n-1 fYjGvO">
                                    <div className="date-input">
                                      <label className="base__BodyHighlight-sc-1tvbuqk-22 bcCBBz color--light-disable">
                                        Ngày đi
                                      </label>
                                      <input
                                        type="datetime-local"
                                        onChange={(e) => {
                                          const value = e.target.value;
                                          const formattedValue =
                                            value.replace("T", " ") + ":00";
                                          setParams({
                                            ...params,
                                            time: formattedValue,
                                          });
                                        }}
                                        defaultValue={params.time}
                                        value={params.time}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="DesktopSearchWidgetInterface__LineFocused-sc-9goqqe-13 dJzjGP line-focus" />
                            </div>
                            <div className="DesktopSearchWidgetInterface__CalendarWrapper-sc-9goqqe-7 gMZfGZ calendar-wrapper" />
                          </div>
                        </div>
                      </div>
                      <div className="ant-col DesktopSearchWidgetInterface__SearchTicketCol-sc-9goqqe-12 dDMURk search-ticket-col">
                        <button
                          onClick={() => {
                            handleSearchClick();
                          }}
                          data-testid="SearchWidget.search"
                          data-tracking-event="search_tickets"
                          type="button"
                          className="ant-btn DesktopSearchWidgetInterface__ButtonDateStyled-sc-9goqqe-0 DesktopSearchWidgetInterface__ButtonSearchStyled-sc-9goqqe-1 kvbcsM jfbJs button-search ant-btn-block"
                        >
                          <span>Tìm kiếm</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="PendingTicketsRoutePageSection__Container-m2wls7-0 fyWwHB pending-tickets-route-page-section " />
          </div>
          <div className="ContactSocial__Container-sc-1js94no-0 bpjFQI">
            <ul className="scroll-animation">
              <li>
                <img
                  className="IconComponent__SVGIcon-r88lg2-0 jtexIT chat_fab"
                  src="https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/chat_fab_zalo.svg"
                  alt="chat_fab_zalo"
                />
              </li>
              <li>
                <img
                  className="IconComponent__SVGIcon-r88lg2-0 jtexIT chat_fab"
                  src="https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/chat_fab_messenger.svg"
                  alt="chat_fab_messenger"
                />
              </li>
            </ul>
            <div>
              <img
                className="IconComponent__SVGIcon-r88lg2-0 jtexIT chat_fab"
                src="https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/chat_fab_main.svg"
                alt="chat_fab_main"
              />
            </div>
          </div>
        </div>
        <div className="flex space-x-4">
          {/* Sidebar Filters */}
          <div className="w-1/4 p-4 bg-gray-100">
            {/* Sort options */}
            <div className="mb-4">
              <h2 className="font-bold text-lg mb-2">Sắp xếp</h2>
              <ul className="space-y-2">
                <li>
                  <input type="radio" name="sort" id="default" />{" "}
                  <label htmlFor="default">Mặc định</label>
                </li>
                <li>
                  <input type="radio" name="sort" id="early" />{" "}
                  <label htmlFor="early">Giờ đi sớm nhất</label>
                </li>
                <li>
                  <input type="radio" name="sort" id="late" />{" "}
                  <label htmlFor="late">Giờ đi muộn nhất</label>
                </li>
                <li>
                  <input type="radio" name="sort" id="rating" />{" "}
                  <label htmlFor="rating">Đánh giá cao nhất</label>
                </li>
                <li>
                  <input type="radio" name="sort" id="price-asc" />{" "}
                  <label htmlFor="price-asc">Giá tăng dần</label>
                </li>
                <li>
                  <input type="radio" name="sort" id="price-desc" />{" "}
                  <label htmlFor="price-desc">Giá giảm dần</label>
                </li>
              </ul>
            </div>
            {/* Filter options */}
            <div className="mb-4">
              <h2 className="font-bold text-lg mb-2">Lọc</h2>
              <div>
                <h3 className="font-bold mb-1">Giờ đi</h3>
                <select className="w-full border rounded-md p-2">
                  <option>Giờ đi</option>
                  <option>00:00 - 06:00</option>
                  <option>06:00 - 12:00</option>
                  <option>12:00 - 18:00</option>
                  <option>18:00 - 24:00</option>
                </select>
              </div>
              <div className="mt-4">
                <h3 className="font-bold mb-1">Nhà xe</h3>
                <select className="w-full border rounded-md p-2">
                  <option>Chọn nhà xe</option>
                  <option>Sao Việt</option>
                  <option>G8 Open Tour</option>
                  <option>HK Business</option>
                </select>
              </div>
              <div className="mt-4">
                <h3 className="font-bold mb-1">Giá vé</h3>
                <select className="w-full border rounded-md p-2">
                  <option>Tất cả</option>
                  <option>0 - 200.000đ</option>
                  <option>200.000đ - 400.000đ</option>
                  <option>400.000đ+</option>
                </select>
              </div>
            </div>
          </div>

          {/* Result list */}
          <div className="w-3/4">
            <h2 className="font-bold text-xl mb-4">
              Kết quả: {dataCar?.length} chuyến
            </h2>
            {/* List of trips */}
            <div className="space-y-4">
              {/* Trip card */}
              {dataCar?.map((items, index) => {
                return (
                  <div key={index} className="border rounded-lg p-4 shadow-md">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-bold text-lg">{items?.fullName}</h3>
                        <p className="text-sm">{items?.description}</p>
                        <p className="text-sm mt-2">
                          {items?.startTime} - {items?.pointStart}
                        </p>
                        <p className="text-sm">{items?.pointEnd}</p>
                      </div>
                      <div className="text-right">
                        <span className="block font-bold text-lg text-blue-500">
                          Từ {items?.listVehicle?.[0]?.price?.toLocaleString()}đ
                        </span>
                        <button
                          onClick={() => {
                            setShowOption(index);
                          }}
                          className="mt-2 px-4 block py-2 bg-yellow-400 rounded-md"
                        >
                          Chọn chuyến
                        </button>
                        {showOption != null && showOption == index && (
                          <button
                            onClick={() => {
                              setCheckSelect(!checkSelect);
                            }}
                            className="mt-2 px-4 py-2 bg-green-400 rounded-md"
                          >
                            {checkSelect ? "Xem chi tiết" : "Đặt chuyến"}
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="mt-2 text-right text-sm text-green-500">
                      Không cần thanh toán trước
                    </div>
                    {showOption != null && showOption == index && (
                      <div className="">
                        {checkSelect ? (
                          <div className="p-4">
                            {selectAddress ? (
                              <>
                                <div
                                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
                                  role="alert"
                                >
                                  <span className="block sm:inline">
                                    An tâm được đón đúng nơi, trả đúng chỗ đã
                                    chọn và dễ dàng thay đổi khi cần.
                                  </span>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="border p-4 rounded">
                                    <h2 className="font-bold mb-2">Điểm đón</h2>
                                    <div className="flex justify-between mb-2">
                                      <span>Sắp xếp theo</span>
                                      <span className="text-blue-500 cursor-pointer">
                                        Thay đổi
                                      </span>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                      <span>Sớm nhất</span>
                                      <span className="text-blue-500 cursor-pointer">
                                        Vị trí của bạn
                                      </span>
                                    </div>
                                    <div className="text-green-600 mb-2">
                                      Cách vị trí của bạn 1.5 km
                                    </div>
                                    <div className="mb-4">
                                      <input
                                        type="radio"
                                        id="pickup1"
                                        name="pickup"
                                        className="mr-2"
                                      />
                                      <label htmlFor="pickup1">
                                        <span className="font-bold">23:25</span>{" "}
                                        • Mê Linh Plaza
                                        <div className="text-sm text-gray-600">
                                          Km8, đường Võ Văn Kiệt, cao tốc Thăng
                                          Long, Thị trấn Quang Minh, Mê Linh, Hà
                                          Nội{" "}
                                          <span className="text-blue-500 cursor-pointer">
                                            Xem vị trí
                                          </span>
                                        </div>
                                      </label>
                                      <div className="text-green-600">
                                        Cách vị trí của bạn 7.6 km
                                      </div>
                                    </div>
                                    <div>
                                      <input
                                        type="radio"
                                        id="pickup2"
                                        name="pickup"
                                        className="mr-2"
                                      />
                                      <label htmlFor="pickup2">
                                        <span className="font-bold">23:40</span>{" "}
                                        • Km 16 cao tốc Nội Bài - Lào Cai
                                        <div className="text-sm text-gray-600">
                                          Km 16 cao tốc Nội Bài - Lào Cai, Sóc
                                          Sơn, Hà Nội{" "}
                                          <span className="text-blue-500 cursor-pointer">
                                            Xem vị trí
                                          </span>
                                        </div>
                                      </label>
                                      <div className="text-green-600">
                                        Cách vị trí của bạn 23 km
                                      </div>
                                    </div>
                                  </div>
                                  <div className="border p-4 rounded">
                                    <h2 className="font-bold mb-2">Điểm trả</h2>
                                    <div className="flex justify-between mb-2">
                                      <span>Sắp xếp theo</span>
                                      <span className="text-blue-500 cursor-pointer">
                                        Thay đổi
                                      </span>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                      <span>Sớm nhất</span>
                                      <span className="text-blue-500 cursor-pointer">
                                        Vị trí của bạn
                                      </span>
                                    </div>
                                    <div className="text-green-600 mb-2">
                                      Cách vị trí của bạn 240.1 km
                                    </div>
                                    <div className="mb-4">
                                      <input
                                        type="radio"
                                        id="dropoff1"
                                        name="dropoff"
                                        className="mr-2"
                                      />
                                      <label htmlFor="dropoff1">
                                        <span className="font-bold">
                                          04:00 (30/10)
                                        </span>{" "}
                                        • Bến xe Sapa
                                        <div className="text-sm text-gray-600">
                                          Quốc lộ 4D, Sapa, Thị trấn Sa Pa, Sa
                                          Pa, Lào Cai{" "}
                                          <span className="text-blue-500 cursor-pointer">
                                            Xem vị trí
                                          </span>
                                        </div>
                                      </label>
                                      <div className="text-green-600">
                                        Cách vị trí của bạn 240.1 km
                                      </div>
                                    </div>
                                    <div>
                                      <input
                                        type="radio"
                                        id="dropoff2"
                                        name="dropoff"
                                        className="mr-2"
                                        checked
                                      />
                                      <label htmlFor="dropoff2">
                                        <span className="font-bold">
                                          04:40 (30/10)
                                        </span>{" "}
                                        • Văn phòng Sapa
                                        <div className="text-sm text-gray-600">
                                          Đường N1, Chợ Mới, 571 đường Điện Biên
                                          Phủ, Thị trấn Sa Pa, Sa Pa, Lào Cai{" "}
                                          <span className="text-blue-500 cursor-pointer">
                                            Xem vị trí
                                          </span>
                                        </div>
                                      </label>
                                      <div className="text-green-600">
                                        Cách vị trí của bạn 240.2 km
                                      </div>
                                      <div className="bg-green-100 text-green-700 px-2 py-1 rounded inline-block mt-2">
                                        Trung chuyển
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </>
                            ) : (
                              <div className="flex">
                                <div className="w-1/3">
                                  <h2 className="font-bold mb-2">Chú thích</h2>
                                  <div className="flex items-center mb-2">
                                    <div
                                      className="SeatThumbnail__SeatContainer-sc-1ooosi9-0 daMVvn seat-thumbnail"
                                      disabled
                                    >
                                      <svg
                                        width={32}
                                        height={40}
                                        viewBox="0 0 28 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <rect
                                          x="2.75"
                                          y="2.75"
                                          width="22.5"
                                          height="34.5"
                                          rx="2.25"
                                          fill="#FFF"
                                          stroke="#B8B8B8"
                                          strokeWidth="1.5"
                                          strokeLinejoin="round"
                                        />
                                        <rect
                                          x="5.75"
                                          y="27.75"
                                          width="16.5"
                                          height="6.5"
                                          rx="2.25"
                                          fill="#FFF"
                                          stroke="#B8B8B8"
                                          strokeWidth="1.5"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          className="icon-selected"
                                          d="M14 8.333A6.67 6.67 0 0 0 7.333 15 6.67 6.67 0 0 0 14 21.667 6.67 6.67 0 0 0 20.667 15 6.669 6.669 0 0 0 14 8.333zm-1.333 10L9.334 15l.94-.94 2.393 2.387 5.06-5.06.94.946-6 6z"
                                          fill="transparent"
                                        />
                                        <path
                                          className="icon-disabled"
                                          d="M18.96 11.46l-1.42-1.42L14 13.59l-3.54-3.55-1.42 1.42L12.59 15l-3.55 3.54 1.42 1.42L14 16.41l3.54 3.55 1.42-1.42L15.41 15l3.55-3.54z"
                                          fill="transparent"
                                        />
                                      </svg>
                                    </div>
                                    <span>Ghế không bán</span>
                                  </div>
                                  <div className="flex items-center mb-2">
                                    <div className="SeatThumbnail__SeatContainer-sc-1ooosi9-0 dLgsTe seat-thumbnail">
                                      <svg
                                        width={32}
                                        height={40}
                                        viewBox="0 0 28 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <rect
                                          x="2.75"
                                          y="2.75"
                                          width="22.5"
                                          height="34.5"
                                          rx="2.25"
                                          fill="#FFF"
                                          stroke="green"
                                          strokeWidth="1.5"
                                          strokeLinejoin="round"
                                        />
                                        <rect
                                          x="5.75"
                                          y="27.75"
                                          width="16.5"
                                          height="6.5"
                                          rx="2.25"
                                          fill="#FFF"
                                          stroke="green"
                                          strokeWidth="1.5"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          className="icon-selected"
                                          d="M14 8.333A6.67 6.67 0 0 0 7.333 15 6.67 6.67 0 0 0 14 21.667 6.67 6.67 0 0 0 20.667 15 6.669 6.669 0 0 0 14 8.333zm-1.333 10L9.334 15l.94-.94 2.393 2.387 5.06-5.06.94.946-6 6z"
                                          fill="transparent"
                                        />
                                        <path
                                          className="icon-disabled"
                                          d="M18.96 11.46l-1.42-1.42L14 13.59l-3.54-3.55-1.42 1.42L12.59 15l-3.55 3.54 1.42 1.42L14 16.41l3.54 3.55 1.42-1.42L15.41 15l3.55-3.54z"
                                          fill="transparent"
                                        />
                                      </svg>
                                    </div>
                                    <span>Đang chọn</span>
                                  </div>
                                  <div className="flex items-center mb-2">
                                    <div
                                      className="SeatThumbnail__SeatContainer-sc-1ooosi9-0 vvWPx seat-thumbnail"
                                      color="#fba442"
                                    >
                                      <svg
                                        width={32}
                                        height={40}
                                        viewBox="0 0 28 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <rect
                                          x="2.75"
                                          y="2.75"
                                          width="22.5"
                                          height="34.5"
                                          rx="2.25"
                                          fill="#FFF"
                                          stroke="orange"
                                          strokeWidth="1.5"
                                          strokeLinejoin="round"
                                        />
                                        <rect
                                          x="5.75"
                                          y="27.75"
                                          width="16.5"
                                          height="6.5"
                                          rx="2.25"
                                          fill="#FFF"
                                          stroke="orange"
                                          strokeWidth="1.5"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          className="icon-selected"
                                          d="M14 8.333A6.67 6.67 0 0 0 7.333 15 6.67 6.67 0 0 0 14 21.667 6.67 6.67 0 0 0 20.667 15 6.669 6.669 0 0 0 14 8.333zm-1.333 10L9.334 15l.94-.94 2.393 2.387 5.06-5.06.94.946-6 6z"
                                          fill="transparent"
                                        />
                                        <path
                                          className="icon-disabled"
                                          d="M18.96 11.46l-1.42-1.42L14 13.59l-3.54-3.55-1.42 1.42L12.59 15l-3.55 3.54 1.42 1.42L14 16.41l3.54 3.55 1.42-1.42L15.41 15l3.55-3.54z"
                                          fill="transparent"
                                        />
                                      </svg>
                                    </div>
                                    <span>CABIN ĐƠN</span>
                                    <span className="ml-2">400,000đ</span>
                                  </div>
                                  <div className="flex items-center mb-2">
                                    <div
                                      className="SeatThumbnail__SeatContainer-sc-1ooosi9-0 lfCjCF seat-thumbnail"
                                      color="#ae70ff"
                                    >
                                      <svg
                                        width={32}
                                        height={40}
                                        viewBox="0 0 28 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <rect
                                          x="2.75"
                                          y="2.75"
                                          width="22.5"
                                          height="34.5"
                                          rx="2.25"
                                          fill="#FFF"
                                          stroke="purple"
                                          strokeWidth="1.5"
                                          strokeLinejoin="round"
                                        />
                                        <rect
                                          x="5.75"
                                          y="27.75"
                                          width="16.5"
                                          height="6.5"
                                          rx="2.25"
                                          fill="#FFF"
                                          stroke="purple"
                                          strokeWidth="1.5"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          className="icon-selected"
                                          d="M14 8.333A6.67 6.67 0 0 0 7.333 15 6.67 6.67 0 0 0 14 21.667 6.67 6.67 0 0 0 20.667 15 6.669 6.669 0 0 0 14 8.333zm-1.333 10L9.334 15l.94-.94 2.393 2.387 5.06-5.06.94.946-6 6z"
                                          fill="transparent"
                                        />
                                        <path
                                          className="icon-disabled"
                                          d="M18.96 11.46l-1.42-1.42L14 13.59l-3.54-3.55-1.42 1.42L12.59 15l-3.55 3.54 1.42 1.42L14 16.41l3.54 3.55 1.42-1.42L15.41 15l3.55-3.54z"
                                          fill="transparent"
                                        />
                                      </svg>
                                    </div>
                                    <span>CABIN ĐÔI</span>
                                    <span className="ml-2">750,000đ</span>
                                  </div>
                                </div>
                                <div className="w-2/3 flex justify-between">
                                  <div>
                                    <h2 className="font-bold mb-2 text-center">
                                      Tầng dưới
                                    </h2>
                                    <div className="flex flex-col items-center">
                                      <i className="fas fa-bus text-2xl mb-2"></i>
                                      <div className="flex flex-wrap justify-center">
                                        {Array(1, 2, 3).map((a, index) => {
                                          return (
                                            <div
                                              key={index}
                                              className="SeatThumbnail__SeatContainer-sc-1ooosi9-0 daMVvn seat-thumbnail"
                                              disabled
                                            >
                                              <svg
                                                width={32}
                                                height={40}
                                                viewBox="0 0 28 40"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  x="2.75"
                                                  y="2.75"
                                                  width="22.5"
                                                  height="34.5"
                                                  rx="2.25"
                                                  fill="#FFF"
                                                  stroke="#B8B8B8"
                                                  strokeWidth="1.5"
                                                  strokeLinejoin="round"
                                                />
                                                <rect
                                                  x="5.75"
                                                  y="27.75"
                                                  width="16.5"
                                                  height="6.5"
                                                  rx="2.25"
                                                  fill="#FFF"
                                                  stroke="#B8B8B8"
                                                  strokeWidth="1.5"
                                                  strokeLinejoin="round"
                                                />
                                                <path
                                                  className="icon-selected"
                                                  d="M14 8.333A6.67 6.67 0 0 0 7.333 15 6.67 6.67 0 0 0 14 21.667 6.67 6.67 0 0 0 20.667 15 6.669 6.669 0 0 0 14 8.333zm-1.333 10L9.334 15l.94-.94 2.393 2.387 5.06-5.06.94.946-6 6z"
                                                  fill="transparent"
                                                />
                                                <path
                                                  className="icon-disabled"
                                                  d="M18.96 11.46l-1.42-1.42L14 13.59l-3.54-3.55-1.42 1.42L12.59 15l-3.55 3.54 1.42 1.42L14 16.41l3.54 3.55 1.42-1.42L15.41 15l3.55-3.54z"
                                                  fill="transparent"
                                                />
                                              </svg>
                                            </div>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <h2 className="font-bold mb-2 text-center">
                                      Tầng trên
                                    </h2>
                                    <div className="flex flex-col items-center">
                                      <div className="flex flex-wrap justify-center">
                                        {Array(1, 2, 3).map((a, index) => {
                                          return (
                                            <div
                                              key={index}
                                              className="SeatThumbnail__SeatContainer-sc-1ooosi9-0 daMVvn seat-thumbnail"
                                              disabled
                                            >
                                              <svg
                                                width={32}
                                                height={40}
                                                viewBox="0 0 28 40"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  x="2.75"
                                                  y="2.75"
                                                  width="22.5"
                                                  height="34.5"
                                                  rx="2.25"
                                                  fill="#FFF"
                                                  stroke="purple"
                                                  strokeWidth="1.5"
                                                  strokeLinejoin="round"
                                                />
                                                <rect
                                                  x="5.75"
                                                  y="27.75"
                                                  width="16.5"
                                                  height="6.5"
                                                  rx="2.25"
                                                  fill="#FFF"
                                                  stroke="purple"
                                                  strokeWidth="1.5"
                                                  strokeLinejoin="round"
                                                />
                                                <path
                                                  className="icon-selected"
                                                  d="M14 8.333A6.67 6.67 0 0 0 7.333 15 6.67 6.67 0 0 0 14 21.667 6.67 6.67 0 0 0 20.667 15 6.669 6.669 0 0 0 14 8.333zm-1.333 10L9.334 15l.94-.94 2.393 2.387 5.06-5.06.94.946-6 6z"
                                                  fill="transparent"
                                                />
                                                <path
                                                  className="icon-disabled"
                                                  d="M18.96 11.46l-1.42-1.42L14 13.59l-3.54-3.55-1.42 1.42L12.59 15l-3.55 3.54 1.42 1.42L14 16.41l3.54 3.55 1.42-1.42L15.41 15l3.55-3.54z"
                                                  fill="transparent"
                                                />
                                              </svg>
                                            </div>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                            <div className="flex justify-between items-center mt-4">
                              <div>
                                <span>
                                  Ghế:{" "}
                                  <span className="font-bold text-blue-600">
                                    A3
                                  </span>
                                </span>
                              </div>
                              <div>
                                <span>
                                  Tổng cộng:{" "}
                                  <span className="font-bold text-blue-600">
                                    750,000 đ
                                  </span>
                                </span>
                                <button
                                  onClick={() => {
                                    if (!selectAddress) {
                                      setSelectAddress(true);
                                    } else {
                                      navigate("/bookingconfirmation");
                                    }
                                  }}
                                  className="ml-4 bg-blue-600 text-white px-4 py-2 rounded"
                                >
                                  Tiếp tục
                                </button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <Tabs
                            defaultActiveKey="1"
                            items={itemsV1}
                            onChange={onChange}
                          />
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <Footer />
    </div>
  );
};

export default BookingCar;
