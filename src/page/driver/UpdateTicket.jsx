import React, { useState, useEffect } from "react";
import { Form, Input, Button, InputNumber, message } from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateTicket = () => {
  const [form] = Form.useForm();
  const { ticketId } = useParams(); // Lấy ID của ticket từ URL
  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState(null); // Lưu dữ liệu ban đầu của ticket

  // Fetch dữ liệu ticket
  useEffect(() => {
    const fetchTicket = async () => {
      try {
        // TODO: Thay URL bằng API thực tế để lấy chi tiết ticket
        const { data } = await axios.get(
          `https://example.com/api/tickets/${ticketId}`
        );
        setInitialValues(data);
        form.setFieldsValue(data); // Điền dữ liệu ban đầu vào form
      } catch (error) {
        console.error("Error fetching ticket:", error);
        message.error("Failed to fetch ticket details.");
      }
    };

    fetchTicket();
  }, [ticketId, form]);

  // Xử lý khi submit form
  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      // TODO: Thay URL bằng API thực tế để cập nhật ticket
      await axios.put(`https://example.com/api/tickets/${ticketId}`, values);
      message.success("Ticket updated successfully!");
    } catch (error) {
      console.error("Error updating ticket:", error);
      message.error("Failed to update ticket.");
    } finally {
      setLoading(false);
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
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Update Ticket</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        autoComplete="off"
        initialValues={initialValues} // Dữ liệu ban đầu
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
          <Button type="primary" htmlType="submit" block loading={loading}>
            Update Ticket
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateTicket;
