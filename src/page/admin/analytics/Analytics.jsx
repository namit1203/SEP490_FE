import React, { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, CartesianGrid, XAxis, Bar, YAxis, ResponsiveContainer } from "recharts";
import { Typography, Spin, DatePicker, Button, Space } from "antd";
import dayjs from "dayjs";
import { checkLoginToken } from "../../../utils";

const { Title } = Typography;
const { RangePicker } = DatePicker;

const Analytics = () => {
  const [data, setData] = useState([]);
  const [dataV2, setDataV2] = useState([]);

  const [totalRevenue, setTotalRevenue] = useState(0);
  const [loading, setLoading] = useState(false);
  const [dates, setDates] = useState([
    dayjs("2024-06-06T10:30:00"),
    dayjs("2024-11-20T10:30:00"),
  ]);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A0D1FB", "#FFC0CB", "#BADA55", "#FFD700"];

  const fetchData = async (startDate, endDate) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://103.245.237.93:8082/api/PaymentRentVehicel/getPaymentRentVehicle/${startDate}/${endDate}`,
        {
          headers:{  Authorization: "Bearer " + checkLoginToken(),

          }
        }
      );
      const response2 = await axios.get(
        `http://103.245.237.93:8082/api/Revenue/getRevenue/${startDate}/${endDate}`,{
          headers:{  Authorization: "Bearer " + checkLoginToken(),

          }
        }
      );
      console.log(response2,'response2response2')
      const paymentData = response.data.paymentRentVehicelDTOs;
      const groupedData = paymentData.reduce((acc, item) => {
        const existing = acc.find((el) => el.carOwnerId === item.carOwnerId);
        if (existing) {
          existing.value += item.price;
        } else {
          acc.push({ name: `Car Owner ${item.carOwnerId}`, value: item.price });
        }
        return acc;
      }, []);
      setData(groupedData);
      setTotalRevenue(response.data.total);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  const fetchDataV2 = async(startDate, endDate)=>{
    try {
      const response = await axios.get(
        `http://103.245.237.93:8082/api/Revenue/getRevenue/${startDate}/${endDate}`,
        {
          headers: {
            Authorization: `Bearer ${checkLoginToken()}`,
          },
        }
      );
      console.log(response,'response')
      const paymentRentDriversData = response.data.totalPayementRentDrivers[0].paymentRentDriverDTOs?.map(item => item.price);
        const totalPaymentRentDrivers = paymentRentDriversData?.reduce((acc, value) => acc + value, 0);
        const lossCostsData = response.data.totalLossCosts[0].listLossCostVehicle?.map(item => item.price);
        const totalLossCosts = lossCostsData?.reduce((acc, value) => acc + value, 0);
        const paymentRentVehicleData = response.data.totalPaymentRentVehicleDTOs[0].paymentRentVehicelDTOs?.map(item => item.price);
        const totalPaymentRentVehicle = paymentRentVehicleData?.reduce((acc, value) => acc + value, 0);
        console.log( response.data.revenueTicketDTOs[0],' response.data.revenueTicketDTOs[0]')
       
        const revenueTicketData = response.data.revenueTicketDTOs[0].listTicket?.map(item => item.pricePromotion);
        const totalRevenueTicket = revenueTicketData?.reduce((acc, value) => acc + value, 0);
        console.log(totalPaymentRentDrivers,'totalPaymentRentDrivers')
        console.log(totalLossCosts,'totalLossCosts')
        console.log(totalPaymentRentVehicle,'totalPaymentRentVehicle')
        console.log(totalRevenueTicket,'totalRevenueTicket')

        const chartData = [
          { name: 'Doanh Thu Thanh Toán Lái Xe', value: totalPaymentRentDrivers },
          { name: 'Chi Phí Mất Mát', value: totalLossCosts },
          { name: 'Thanh Toán Thuê Xe', value: totalPaymentRentVehicle },
          { name: 'Doanh Thu Vé', value: totalRevenueTicket },
        ];
      setDataV2(chartData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }
 
  useEffect(() => {
    fetchData(dates[0].toISOString(), dates[1].toISOString());
    fetchDataV2(dates[0].toISOString(), dates[1].toISOString());
  }, []);

  const handleDateChange = (dateRange) => {
    if (dateRange) {
      setDates(dateRange);
    }
  };

  const handleFilter = () => {
    fetchData(dates[0].toISOString(), dates[1].toISOString());
  };
  console.log(dataV2,'dataV2')
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="p-8">
      <Title level={2} className="text-center">
        Thống Kê Doanh Thu
      </Title>
      <div className="flex justify-center my-4">
        <Space direction="vertical">
          <RangePicker
            defaultValue={dates}
            format="YYYY-MM-DD"
            onChange={handleDateChange}
          />
          <Button htmlType="" type="primary" onClick={handleFilter}>
            Lọc
          </Button>
        </Space>
      </div>
      <div className="flex justify-center items-center my-8">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            label
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
      <div className="text-center">
        <Title level={4}>Tổng Doanh Thu: {totalRevenue.toLocaleString()} VND</Title>
      </div>
      <div>
      <ResponsiveContainer width="100%" height={400}>
      <BarChart data={dataV2}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;