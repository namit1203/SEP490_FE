import React, { useState } from "react";
import { Form, Input, Button, InputNumber, message } from "antd";

const DriverCreateTicket = () => {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    console.log("Ticket Data:", values); // Log dữ liệu nhập để kiểm tra

    // TODO: Gọi API thực tế sau khi có backend
    try {
      // const response = await axios.post(
      //   "https://your-api-url.com/create-ticket",
      //   values
      // );
      message.success("Ticket created successfully!");
      form.resetFields(); // Reset form sau khi tạo thành công
    } catch (error) {
      console.error("Error creating ticket:", error);
      message.error("Failed to create ticket.");
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "auto",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Create Ticket
      </h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        autoComplete="off"
      >
        <Form.Item
          label="Pickup Point"
          name="pickupPoint"
          rules={[
            { required: true, message: "Please enter the pickup point!" },
          ]}
        >
          <Input placeholder="Enter pickup point" />
        </Form.Item>

        <Form.Item
          label="Dropoff Point"
          name="dropoffPoint"
          rules={[
            { required: true, message: "Please enter the dropoff point!" },
          ]}
        >
          <Input placeholder="Enter dropoff point" />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[
            { required: true, message: "Please enter the price!" },
            { type: "number", min: 0, message: "Price must be positive!" },
          ]}
        >
          <InputNumber
            placeholder="Enter price"
            style={{ width: "100%" }}
            formatter={(value) => `$ ${value}`}
          />
        </Form.Item>

        <Form.Item
          label="Customer Phone"
          name="customerPhone"
          rules={[
            { required: true, message: "Please enter the customer phone!" },
            { pattern: /^[0-9]{10}$/, message: "Enter a valid 10-digit phone number!" },
          ]}
        >
          <Input placeholder="Enter customer phone number" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Create Ticket
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DriverCreateTicket;
