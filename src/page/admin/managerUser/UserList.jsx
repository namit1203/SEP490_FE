import { Breadcrumb, Button, Drawer, message, Popconfirm, Table } from "antd";
import React, { useState } from "react";

const UserList = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
  
  const confirm = (e) => {
    console.log(e);
    message.success("Click on Yes");
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      render: () => {
        return (
          <div className="space-x-5">
            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this task?"
              onConfirm={confirm}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <Button className="bg-red-500 text-white font-semibold">
                Remove
              </Button>
            </Popconfirm>

            <Button onClick={showDrawer} className="font-semibold">Edit</Button>
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <Breadcrumb routes={[{ breadcrumbName: "Dashboard/User" }]} />
      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      <div className="mt-5">
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
};

export default UserList;
