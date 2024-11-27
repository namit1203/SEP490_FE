import React, { useState } from "react";
import { Table } from "antd";

const DriverRequests = () => {
  // Dữ liệu mẫu giả lập
  const [data, setData] = useState([
    {
      key: "1",
      id: "REQ001",
      description: "Request for vehicle maintenance",
      note: "Pending approval",
    },
    {
      key: "2",
      id: "REQ002",
      description: "Request for additional fuel",
      note: "Approved",
    },
    {
      key: "3",
      id: "REQ003",
      description: "Request for route adjustment",
      note: "Denied",
    },
  ]);

  // Cột của bảng
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Note",
      dataIndex: "note",
      key: "note",
    },
  ];

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "auto",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Driver Requests
      </h2>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default DriverRequests;
