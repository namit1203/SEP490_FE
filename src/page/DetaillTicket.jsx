import React from "react";

const DetaillTicket = () => {
  return (
    <div style={{ backgroundColor: "#1365af", padding: "15px 5px 15px" }}>
      <div
        style={{
          maxWidth: 600,
          margin: "0 auto",
          fontFamily: "Arial,sans-serif",
        }}
      >
        <div style={{ backgroundColor: "#fff" }}>
          <div
            style={{
              padding: "10px 25px",
              fontFamily: "arial,sans-serif",
              fontSize: 14,
              lineHeight: 24,
            }}
          >
            <div
              style={{
                border: "1px solid #1e62a3",
                borderRadius: 5,
                width: "100%",
              }}
            >
              <div
                style={{
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5,
                  backgroundColor: "#1d65b1",
                  width: "100%",
                }}
              >
                <table style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <td style={{ width: "100%" }}>
                        <div style={{ float: "left", padding: 5 }}>
                          <img
                            src="https://ci3.googleusercontent.com/meips/ADKq_NYAsOOUZ-jqJqOMbvpE92idnOp7wLn3PtJRLspy-MEzzqVT9Fi6If5JXMt6WMkmxaUpyVDhvhiaWc0w6sqt9w=s0-d-e1-ft#https://static.vexere.com/images/logo.jpg"
                            alt="vexere.com"
                            height="40px"
                            className="CToWUd"
                            data-bit="iit"
                          />
                        </div>
                        <div
                          style={{
                            float: "right",
                            width: 240,
                            color: "#ffffff",
                            fontSize: "1.2em",
                            fontWeight: "bold",
                            textAlign: "right",
                            padding: "10px 5px",
                          }}
                        >
                          <span>MÃ VÉ:</span>{" "}
                          <span style={{ color: "#fdb813" }}>OCL991</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div style={{ backgroundColor: "#fff", paddingBottom: 15 }}>
                <div style={{ paddingLeft: 15, paddingRight: 15 }}>
                  <h3
                    style={{
                      fontSize: "1.7em",
                      color: "#1e62a3",
                      textAlign: "center",
                      margin: "10px 0",
                    }}
                  >
                    Thông tin vé xe
                  </h3>
                  <table
                    style={{
                      width: "100%",
                      verticalAlign: "text-top",
                      fontSize: 13,
                      color: "#000",
                      lineHeight: 20,
                      fontFamily: "Arial,sans-serif",
                    }}
                  >
                    <tbody>
                      <tr>
                        <td style={{ width: "35%", padding: 5 }}>Hãng xe:</td>
                        <td style={{ width: "65%", padding: 5 }}>
                          <b>Phúc Lộc Thọ Limousine</b>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "35%", padding: 5 }}>Điểm đón:</td>
                        <td style={{ width: "65%", padding: 5 }}>
                          <b>Khuất Duy Tiến</b>
                          <br />
                          166, 168 Khuất Duy Tiến, Thanh Xuân, Hà Nội
                          <b />
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "35%", padding: 5 }}>
                          Giờ đón (dự kiến):
                        </td>
                        <td style={{ width: "65%", padding: 5 }}>
                          <b>13:30 ngày 20/10/2018</b>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "35%", padding: 5 }}>Điểm trả:</td>
                        <td style={{ width: "65%", padding: 5 }}>
                          <b>Nam Định</b>
                          <br />
                          08 Trần Anh Tông, QL 10, P. Lộc Vượng, Nam Định, Nam
                          Định
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "35%", padding: 5 }}>
                          Số ghế/giường:
                        </td>
                        <td style={{ width: "65%", padding: 5 }}>
                          <strong>6</strong>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "35%", padding: 5 }}>Tuyến:</td>
                        <td style={{ width: "65%", padding: 5 }}>
                          <b>Cầu Giấy - Nam Định</b>
                          <br />
                          (xuất phát 13:30 ngày 20/10/2018)
                        </td>
                      </tr>
                      <tr style={{ fontSize: 16, fontWeight: "bold" }}>
                        <td
                          style={{
                            width: "35%",
                            padding: "10px 5px",
                            color: "#1e62a3",
                          }}
                        >
                          Tổng tiền:
                        </td>
                        <td
                          style={{
                            width: "65%",
                            padding: "10px 5px",
                            color: "#fd8017",
                          }}
                        >
                          100.000 VND
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <hr />
                  <h3
                    style={{
                      fontSize: "1.7em",
                      color: "#1e62a3",
                      textAlign: "center",
                      margin: "10px 0",
                    }}
                  >
                    Thông tin hành khách
                  </h3>
                  <table
                    style={{
                      width: "100%",
                      verticalAlign: "text-top",
                      fontSize: 13,
                      color: "#000",
                      lineHeight: 15,
                    }}
                  >
                    <tbody>
                      <tr>
                        <td style={{ width: "35%", padding: 5 }}>Họ tên:</td>
                        <td style={{ width: "65%", padding: 5 }}>
                          <b>LE QUOC HUNG</b>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "35%", padding: 5 }}>
                          Điện thoại:
                        </td>
                        <td style={{ width: "65%", padding: 5 }}>
                          <b>0966889786</b>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "35%", padding: 5 }}>
                          Hình thức T.T:
                        </td>
                        <td style={{ width: "65%", padding: 5 }}>
                          <b>Tại đại lý</b>
                        </td>
                      </tr>
                      <tr>
                        <td
                          colSpan={2}
                          style={{
                            width: "100%",
                            padding: "10px 5px",
                            textAlign: "center",
                          }}
                        >
                          <img
                            src="https://ci3.googleusercontent.com/meips/ADKq_NZg4kMOo6qYPjqINxie_RCZD_S_b5h0WTD1P5VSJovy40m_U4WIj_FpgWSh9BEZMSQlAslzAL2h9upZw-0DHLHWbhK-Ag=s0-d-e1-ft#https://static.vexere.com/images/paid-stamp.png"
                            alt="đã thanh toán"
                            width="184px"
                            className="CToWUd"
                            data-bit="iit"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#1d65b1",
                  color: "#ffffff",
                  lineHeight: 24,
                  padding: "5px 15px",
                  borderBottomLeftRadius: 5,
                  borderBottomRightRadius: 5,
                  fontSize: 12,
                }}
              >
                <table style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <td style={{ width: "100%", color: "#fff" }}>
                        <div style={{ float: "left" }}>
                          <span>Hotline: 1900 969681</span>
                        </div>
                        <div style={{ float: "right" }}>
                          <span>E-Ticket - Vexere.com (00:00 20/10/2018)</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://ci3.googleusercontent.com/meips/ADKq_NZa5q1i1-0E5fQ7_WCN6ThOUM29iy8CKshCv76tUYX5iWqWmv4I00_0Bo9DHmEdsf6qNeBlXvT3asoRs96aOX8vZw=s0-d-e1-ft#https://static.vexere.com/images/divider.png"
              alt="divider"
              width="100%"
              style={{ maxHeight: 40 }}
              className="CToWUd"
              data-bit="iit"
            />
          </div>
          <div
            style={{
              padding: "10px 25px",
              fontSize: 12,
              textAlign: "justify",
              color: "#000",
            }}
          >
            <p style={{ margin: "5px 0" }}>
              <a
                href="https://vexere.com"
                target="_blank"
                data-saferedirecturl="https://www.google.com/url?q=https://vexere.com&source=gmail&ust=1731591293150000&usg=AOvVaw3HHuhzbepT47t6MgSwQwNt"
              >
                VeXeRe.com
              </a>
              xin cảm ơn quý khách và rất mong sẽ được phục vụ mọi nhu cầu mua
              vé xe của quý khách trong tương lai. Quý khách vui lòng đọc kĩ quy
              chế của VeXeRe.com
              <a
                href="https://vexere.com/vi-VN/quy-che.html"
                target="_blank"
                data-saferedirecturl="https://www.google.com/url?q=https://vexere.com/vi-VN/quy-che.html&source=gmail&ust=1731591293150000&usg=AOvVaw3TCBezHt8FObVZdtOeX-Gz"
              >
                tại đây
              </a>{" "}
              trường hợp cần được hỗ trợ trực tiếp về các vấn đề huỷ vé, đổi vé,
              huỷ chuyến,... xin vui lòng liên hệ dịch vụ chăm sóc khách hàng
              của chúng tôi:
            </p>
            <div style={{ paddingLeft: 15 }}>
              <b>Công ty cổ phần VeXeRe.com:</b>
              <br />
              <ol style={{ margin: "5px 0" }}>
                <li>
                  <span>
                    Miền Bắc: P1202, Tòa nhà 101 Láng Hạ, Quận Đống Đa, Hà Nội.
                  </span>
                  <br />
                  <span>
                    Giờ làm việc:{" "}
                    <b>
                      Thứ hai đến Thứ sáu: 8:30 - 18:00; Thứ bảy: 8:30 - 12:00
                    </b>
                  </span>
                  <span>
                    Hotline:{" "}
                    <a href="tel:1900%207075" target="_blank">
                      1900 7075
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    Miền Nam: Tầng M, Khu B, Tòa nhà Sài Gòn Town, 83/16 Thoại
                    Ngọc Hầu, Phường Hòa Thạnh, Quận Tân Phú, TP. Hồ Chí Minh.
                  </span>
                  <br />
                  <span>
                    Giờ làm việc:{" "}
                    <b>
                      Thứ hai đến Thứ sáu: 8:30 - 18:00; Thứ bảy: 8:30 - 12:00
                    </b>
                  </span>
                  <span>
                    Hotline:{" "}
                    <a href="tel:1900%207070" target="_blank">
                      1900 7070
                    </a>{" "}
                    -{" "}
                    <a href="tel:1900%20969681" target="_blank">
                      1900 969681
                    </a>
                  </span>
                </li>
              </ol>
              Email:{" "}
              <a href="mailto:cs@vexere.com" target="_blank">
                cs@vexere.com
              </a>
              <div className="yj6qo" />
              <div className="adL">
                {" "}
                <br />
              </div>
            </div>
            <div className="adL"></div>
          </div>
          <div className="adL"></div>
        </div>
        <div className="adL"></div>
      </div>
    </div>
  );
};

export default DetaillTicket;
