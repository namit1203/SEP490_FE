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
const LossCostType = () => {
  const [open, setOpen] = useState(false);
  const [checkAdd, setCheckAdd] = useState(false);
  const [idUser, setIdUser] = useState(null);
  const [dataUser, setDataUser] = useState([]);
  const [accountData, setAccountData] = useState(null);
  const [form] = Form.useForm();
  const handelFetchData = async () => {
    const { data } = await axios.get(
      "http://103.245.237.93:8082/api/LossCostType/listLossCostType",
      {
        headers: {
          Authorization: "Bearer " + checkLoginToken(),
        },
      }
    );
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
    await axios.delete(
      "http://103.245.237.93:8082/api/LossCostType/deleteLossCostType/" + e,
      {
        headers: {
          Authorization: "Bearer " + checkLoginToken(),
        },
      }
    );
    handelFetchData();
    message.success("Click on Yes");
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };
  const dataSource = dataUser;
  const columns = [
    {
      title: "Name Driver",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action",
      render: ({ description, id }) => {
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
              <Button className="bg-red-500 text-white font-semibold">
                Remove
              </Button>
            </Popconfirm>

            <Button
              onClick={() => {
                setCheckAdd(description);
                setIdUser(id);
                showDrawer();
              }}
              className="font-semibold"
            >
              Sửa
            </Button>
          </div>
        );
      },
    },
  ];
  const onFinish = async (values) => {
    {
      idUser
        ? await axios.put(
            "http://103.245.237.93:8082/api/LossCostType/updateLossCostType/" +
              idUser,
            {
              description: values.description,
            },
            {
              headers: {
                Authorization: "Bearer " + checkLoginToken(),
              },
            }
          )
        : await axios.post(
            "http://103.245.237.93:8082/api/LossCostType/addLossCostType",
            {
              description: values.description,
            },
            {
              headers: {
                Authorization: "Bearer " + checkLoginToken(),
              },
            }
          );
    }
    message.success("success");
    onClose();
    handelFetchData();
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
          description: checkAdd || null,
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
  }, [open, form, idUser, checkAdd]);
  return (
    <div>
      <Breadcrumb routes={[{ breadcrumbName: "Dashboard/LossCostType" }]} />
      <div className="flex justify-end">
        <Button
          onClick={showDrawer}
          className="bg-green-500 text-white font-medium"
        >
          Thêm Mới
        </Button>
      </div>
      <Drawer title="Basic Drawer" onClose={onClose} open={open} width={600}>
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
          <Form.Item
            label="name description"
            name="description"
            rules={[
              { required: true, message: "Please input your description!" },
            ]}
          >
            <Input />
          </Form.Item>
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

export default LossCostType;
