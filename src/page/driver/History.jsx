import React, { useState } from "react";
import { Table, Tag } from "antd";

const History = () => {
  // Dữ liệu giả định
  const [data, setData] = useState([
    {
      key: "1",
      date: "2024-11-20",
      startLocation: "Hà Nội",
      endLocation: "Ninh Bình",
      distance: "95 km",
      price: "$50",
      status: "Completed",
    },
    {
      key: "2",
      date: "2024-11-18",
      startLocation: "Hà Nội",
      endLocation: "Hải Phòng",
      distance: "105 km",
      price: "$55",
      status: "Completed",
    },
    {
      key: "3",
      date: "2024-11-15",
      startLocation: "Hà Nội",
      endLocation: "Nam Định",
      distance: "85 km",
      price: "$45",
      status: "Cancelled",
    },
  ]);

  // Cột cho bảng
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Start Location",
      dataIndex: "startLocation",
      key: "startLocation",
    },
    {
      title: "End Location",
      dataIndex: "endLocation",
      key: "endLocation",
    },
    {
      title: "Distance",
      dataIndex: "distance",
      key: "distance",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = status === "Completed" ? "green" : "volcano";
        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      },
    },
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Driver's Trip History
      </h2>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default History;
