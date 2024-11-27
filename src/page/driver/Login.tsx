import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DriverLogin = () => {
  const [loading, setLoading] = useState(false); // Trạng thái nút login
  const navigate = useNavigate(); // Điều hướng sau khi login

  const handleLogin = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://boring-wiles.202-92-7-204.plesk.page/loginDriver",
        {
          username: values.username,
          password: values.password,
        }
      );

      const { token } = response.data;

      if (token) {
        // Lưu token vào localStorage hoặc sessionStorage
        localStorage.setItem("driverToken", token);

        message.success("Login successful!");
        navigate("/driver-dashboard"); // Điều hướng đến dashboard của driver
      } else {
        message.error("Login failed! Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
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
          onFinish={handleLogin}
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
