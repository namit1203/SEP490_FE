import {
  Breadcrumb,
  Button,
  Checkbox,
  DatePicker,
  Drawer,
  Form,
  Input,
  message,
  Popconfirm,
  Table,
} from "antd";
import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { checkLoginToken } from "../../../utils";

const VehicleList = () => {
  const [open, setOpen] = useState(false);
  const [idUser, setIdUser] = useState(null);

  const [dataUser, setDataUser] = useState([]);
  const [accountData, setAccountData] = useState(null);
  const [form] = Form.useForm();

  const handelFetchData = async () => {
    const { data } = await axios.get("http://103.245.237.93:8082/api/Vehicle/listVehicle", {
      headers: {
        Authorization: "Bearer " + checkLoginToken(),
      },
    });
    setDataUser(data);
  };
  useEffect(() => {
    handelFetchData();
  }, []);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
    setIdUser(null);
  };

  const confirm = async (e) => {
    await axios.delete("http://103.245.237.93:8082/api/Vehicle/deleteVehicleByStatus/" + e,{
      headers:{
        'Authorization': 'Bearer ' + checkLoginToken()
      }
  });
    handelFetchData();
    message.success("Click on Yes");
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };
  const dataSource = dataUser.filter((data) => data.status == true);
  const columns = [
    {
      title: "description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "licensePlate",
      dataIndex: "licensePlate",
      key: "licensePlate",
    },
    {
      title: "numberSeat",
      dataIndex: "numberSeat",
      key: "numberSeat",
    },

    {
      title: "Action",
      render: ({ id }) => {
        return (
          <div className="space-x-5">
            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this task?"
              onConfirm={() => confirm(id)}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <Button htmlType="" className="bg-red-500 text-white font-semibold">
                Remove
              </Button>
            </Popconfirm>

            <Button
            htmlType=""
              onClick={() => {
                setIdUser(id);
                showDrawer();
              }}
              className="font-semibold"
            >
              chi tiết
            </Button>
          </div>
        );
      },
    },
  ];
  const onFinish = async (values) => {
    await axios.put("http://103.245.237.93:8082/api/Driver/" + idUser, {
      ...values,
      dob: "2024-10-31T03:44:08.522Z",
      statusWork: "string",
      typeOfDriver: 0,
      status: true,
    });
    message.success("success")
    onClose()
    handelFetchData()

  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://103.245.237.93:8082/api/Driver/" + idUser
        );
        const data = await response.json();
        form.setFieldsValue({
          ...data,
          dob: data.dob ? dayjs(data.dob) : null,
          createdAt: data.createdAt ? dayjs(data.createdAt) : null,
          updateAt: data.updateAt ? dayjs(data.updateAt) : null,
        });
        setAccountData(data);
        form.setFieldsValue(data); // Đặt dữ liệu vào form
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (open) {
      fetchData();
    }
  }, [open, form, idUser]);
  return (
    <div>
      <Breadcrumb routes={[{ breadcrumbName: "Dashboard/User" }]} />
      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        <Form
          form={form}
          name="accountDetails"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item label="ID" name="id">
            <Input disabled />
          </Form.Item>

          <Form.Item
            label="name driver"
            name="userName"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="name"
            name="name"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="numberPhone"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Avatar" name="avatar">
            <Input />
          </Form.Item>
          {/* <Form.Item label="Address" name="address">
              <Input />
            </Form.Item>
  
            <Form.Item label="Status" name="status" valuePropName="checked">
              <Checkbox />
            </Form.Item>
  
            <Form.Item label="Date of Birth" name="dob">
              <DatePicker format="YYYY-MM-DD" />
            </Form.Item>
  
            <Form.Item label="Created At" name="createdAt">
              <DatePicker format="YYYY-MM-DD HH:mm:ss" showTime />
            </Form.Item>
  
            <Form.Item label="Created By" name="createdBy">
              <Input disabled />
            </Form.Item>
  
            <Form.Item label="Updated At" name="updateAt">
              <DatePicker format="YYYY-MM-DD HH:mm:ss" showTime />
            </Form.Item>
  
            <Form.Item label="Updated By" name="updateBy">
              <Input disabled />
            </Form.Item> */}

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
      <div className="mt-5">
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
};

export default VehicleList;
