import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";
import { jwtDecode } from "jwt-decode"; // Import jwt-decode để giải mã token
import { useNavigate } from "react-router-dom";

const DriverLogin: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handelLogin = async (values: { username: string; password: string }) => {
    setLoading(true);

    try {
      // Gửi request login và nhận token trả về
      const { data: token } = await axios.post(
        "https://boring-wiles.202-92-7-204.plesk.page/loginDriver",
        {
          username: values.username,
          password: values.password,
        }
      );

      // Kiểm tra token
      if (!token || typeof token !== "string") {
        message.error("Invalid token received from API.");
        return;
      }

      try {
        // Decode token để lấy thông tin role
        const decodedToken = jwtDecode<{ role: string }>(token);
        console.log("Decoded Token:", decodedToken);

        if (decodedToken.role === "Driver") {
          // Nếu role là Driver, tiến hành lưu thông tin và cho phép đăng nhập
          message.success("Login successful");
          localStorage.setItem("driverToken", token); // Lưu token vào localStorage

          navigate("/driver-dashboard"); // Điều hướng đến dashboard driver
        } else {
          // Nếu không phải Driver
          message.error("Không đủ thẩm quyền để truy cập.");
          localStorage.removeItem("driverToken"); // Xóa token không hợp lệ (nếu có)
        }
      } catch (decodeError) {
        console.error("Decode Error:", decodeError);
        message.error("Invalid token format.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      message.error("Invalid username or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5",
      }}
    >
      <div
        style={{
          padding: "30px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
          width: "400px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Driver Login
        </h2>
        <Form
          layout="vertical"
          onFinish={handelLogin}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              { required: true, message: "Please enter your username!" },
            ]}
          >
            <Input placeholder="Enter your username" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please enter your password!" },
            ]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={loading}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default DriverLogin;
