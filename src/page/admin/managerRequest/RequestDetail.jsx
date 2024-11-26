import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Form, Input, DatePicker, Select, Button, Spin, message } from "antd";
import axios from "axios";
import dayjs from "dayjs";
import { checkLoginToken } from "../../../utils";

const { Option } = Select;

const RequestDetail = () => {
  const { id } = useParams(); // Lấy ID từ URL
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [typeId, setTypeId] = useState(null); // Lưu typeId để hiển thị giao diện
  const [drivers, setDrivers] = useState([]); // Danh sách drivers (type 4)
  const [vehicles, setVehicles] = useState([]); // Danh sách vehicles (type 2 và 7)
  const [selectedDriver, setSelectedDriver] = useState(null); // Driver được chọn (type 4)
  const [selectedVehicle, setSelectedVehicle] = useState(null); // Vehicle được chọn (type 2 và 7)

  useEffect(() => {
    const fetchDetails = async () => {
      if (!id) {
        setError(true);
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(false);

      try {
        // Lấy danh sách request để xác định typeId
        const requestListResponse = await axios.get(
          "https://boring-wiles.202-92-7-204.plesk.page/api/Request",
          {
            headers: {
              Authorization: "Bearer " + checkLoginToken(),
            },
          }
        );

        const request = requestListResponse.data.find(
          (req) => req.id.toString() === id
        );

        if (!request) {
          throw new Error("Request not found");
        }

        setTypeId(request.typeId); // Lưu typeId

        // Lấy dữ liệu chi tiết từ API GetRequestDetailById
        const requestDetailResponse = await axios.get(
          `https://boring-wiles.202-92-7-204.plesk.page/GetRequestDetailById/${id}`,
          {
            headers: {
              Authorization: "Bearer " + checkLoginToken(),
            },
          }
        );

        const data = requestDetailResponse.data;

        // Nếu typeId = 2 hoặc 7, lấy danh sách vehicles
        if (request.typeId === 2 || request.typeId === 7) {
          const vehiclesResponse = await axios.get(
            "https://boring-wiles.202-92-7-204.plesk.page/api/HistoryRentVehicle/ListVehicleRent",
            {
              headers: {
                Authorization: "Bearer " + checkLoginToken(),
              },
            }
          );
          setVehicles(vehiclesResponse.data || []);
        }

        // Nếu typeId = 4, lấy danh sách drivers
        if (request.typeId === 4) {
          const driversResponse = await axios.get(
            "https://boring-wiles.202-92-7-204.plesk.page/api/HistoryRentDriver/ListDriverRent",
            {
              headers: {
                Authorization: "Bearer " + checkLoginToken(),
              },
            }
          );
          setDrivers(driversResponse.data || []);
        }

        // Cập nhật form với dữ liệu trả về từ API
        form.setFieldsValue({
          driverId: data.driverId || "N/A",
          vehicleId: data.vehicleId || "N/A",
          startLocation: data.startLocation || "N/A",
          endLocation: data.endLocation || "N/A",
          startTime: data.startTime ? dayjs(data.startTime) : null,
          endTime: data.endTime ? dayjs(data.endTime) : null,
          seats: data.seats || "N/A",
          price: data.price || "",
        });
      } catch (error) {
        console.error("Error fetching request detail:", error);
        message.error("Failed to fetch request details.");
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id, form]);

  const handleActionType2And7 = async (choose) => {
    const price = form.getFieldValue("price");
    if (!selectedVehicle) {
      message.error("Please select a vehicle.");
      return;
    }

    try {
      await axios.post(
        "https://boring-wiles.202-92-7-204.plesk.page/api/Ticket/createTicketForRentCar",
        {
          requestID: id,
          choose,
          vehicleID: selectedVehicle,
          price,
        },
        {
          headers: {
            Authorization: "Bearer " + checkLoginToken(),
          },
        }
      );

      message.success(
        choose
          ? "Request has been allowed successfully."
          : "Request has been denied."
      );
    } catch (error) {
      console.error("Error submitting action:", error);
      message.error("Failed to process the action.");
    }
  };

  const handleActionType4 = async (choose) => {
    if (!selectedDriver) {
      message.error("Please select a driver.");
      return;
    }

    try {
      await axios.post(
        "https://boring-wiles.202-92-7-204.plesk.page/api/HistoryRentDriver/AddHistoryDriver",
        {
          requestId: id,
          choose,
          driverId: selectedDriver,
        },
        {
          headers: {
            Authorization: "Bearer " + checkLoginToken(),
          },
        }
      );

      message.success(
        choose
          ? "Driver has been accepted successfully."
          : "Driver selection has been denied."
      );
    } catch (error) {
      console.error("Error submitting action:", error);
      message.error("Failed to process the action.");
    }
  };

  const handleSavePriceType5And6 = async () => {
    const price = form.getFieldValue("price");
    try {
      await axios.post(
        "https://boring-wiles.202-92-7-204.plesk.page/api/Request/UpdatePrice",
        {
          requestId: id,
          price,
        },
        {
          headers: {
            Authorization: "Bearer " + checkLoginToken(),
          },
        }
      );

      message.success("Price has been updated successfully.");
    } catch (error) {
      console.error("Error updating price:", error);
      message.error("Failed to update price.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center font-bold text-red-600 text-xl">
        Failed to load request details. Please try again later.
      </div>
    );
  }

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Request Details</h2>
      <Form
        form={form}
        name="requestDetails"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        autoComplete="off"
      >
        <Form.Item label="Driver ID" name="driverId">
          <Input disabled />
        </Form.Item>
        <Form.Item label="Start Location" name="startLocation">
          <Input disabled />
        </Form.Item>
        <Form.Item label="End Location" name="endLocation">
          <Input disabled />
        </Form.Item>
        <Form.Item label="Seats" name="seats">
          <Input disabled />
        </Form.Item>
        <Form.Item label="Price" name="price">
          <Input />
        </Form.Item>
        <Form.Item label="Start Time" name="startTime">
          <DatePicker showTime disabled />
        </Form.Item>
        <Form.Item label="End Time" name="endTime">
          <DatePicker showTime disabled />
        </Form.Item>
        {(typeId === 2 || typeId === 7) && (
          <Form.Item label="Vehicle">
            <Select
              onChange={(value) => setSelectedVehicle(value)}
              placeholder="Select a vehicle"
            >
              {vehicles.map((vehicle) => (
                <Option key={vehicle.licensePlate} value={vehicle.licensePlate}>
                  {vehicle.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        )}
        {typeId === 4 && (
          <Form.Item label="Driver">
            <Select
              onChange={(value) => setSelectedDriver(value)}
              placeholder="Select a driver"
            >
              {drivers.map((driver) => (
                <Option key={driver.id} value={driver.id}>
                  {driver.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        )}
      </Form>
      <div className="mt-5 flex space-x-4">
        {(typeId === 2 || typeId === 7) && (
          <>
            <Button
              type="primary"
              onClick={() => handleActionType2And7(true)}
              disabled={!selectedVehicle}
            >
              Accept
            </Button>
            <Button danger onClick={() => handleActionType2And7(false)}>
              Deny
            </Button>
          </>
        )}
        {typeId === 4 && (
          <>
            <Button
              type="primary"
              onClick={() => handleActionType4(true)}
              disabled={!selectedDriver}
            >
              Accept
            </Button>
            <Button danger onClick={() => handleActionType4(false)}>
              Deny
            </Button>
          </>
        )}
        {(typeId === 5 || typeId === 6) && (
          <Button type="primary" onClick={handleSavePriceType5And6}>
            Save Price
          </Button>
        )}
      </div>
    </div>
  );
};

export default RequestDetail;
