import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";

export default function MyOrder() {
  const [data, setData] = useState([]);

  const demoData = [
    {
      id: "1",
      description: "Yêu cầu thêm xe mới vào hệ thống",
      note: "Đang chờ xác nhận từ staff",
    },
    {
      id: "2",
      description: "Cập nhật thông tin xe số 12",
      note: "Hoàn tất",
    },
    {
      id: "3",
      description: "Xóa thông tin xe không còn hoạt động",
      note: "Đang xử lý",
    },
  ];

  useEffect(() => {
    setData(demoData);
  }, []);

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
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Button
          type="primary"
          onClick={() => handleAction(record.id)}
          htmlType=""
        >
          Chi tiết
        </Button>
      ),
    },
  ];

  const handleAction = (id) => {
    console.log(`Action clicked for ID: ${id}`);
  };

  return (
    <>
      <p className="text-xl font-bold">Đơn hàng của tôi</p>
      <Table
        dataSource={data}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 5 }}
      />
    </>
  );
}
