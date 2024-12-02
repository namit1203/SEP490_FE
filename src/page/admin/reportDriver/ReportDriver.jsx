import React, { useState, useEffect } from 'react'
import { Breadcrumb, Card, Col, Row, Table, Tag } from "antd";
import RevenuePieChart from './RevenuePieChart';
import axios from "axios";
import { checkLoginToken } from '../../../utils';

const ReportDriver = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    // Giả lập API
    const fetchData = async () => {
 
      console.log(`Gọi API nè`)
      try{
      const apiData = await axios.get(
        "https://boring-wiles.202-92-7-204.plesk.page/api/HistoryRentDriver/rent-details-with-total-for-owner?startDate=2024-01-01&endDate=2024-11-26&vehicleId=1&vehicleOwnerId=1",
        {
          headers: {
            'Authorization': 'Bearer ' + checkLoginToken() 
          },
        }
      );
      console.log(`${JSON.stringify(apiData.data.paymentRentDriverDTOs)}`)
      setData(apiData.data);
      console.log(data.paymentRentDriverDTOs?.length)
      }catch(error){
        console.error("Lỗi khi gọi API:", error.response ? error.response.data : error.message);
      }
    };
    fetchData();
  }, []);

  const dataSource = data?.paymentRentDriverDTOs?.map((item, index) => ({
    driverName: item?.driverName, // Lấy giá trị từ driverName trong data
    licenseVehicle: <Tag color='green'>{item?.licenseVehicle}</Tag>, // Lấy giá trị từ licenseVehicle
    price: item?.price, // Lấy giá trị từ price
  }));
  
  const columns = [
    {
      title: 'Tên tài xế',
      dataIndex: 'driverName',
      key: 'driverName',
    },
    {
      title: 'Biển số',
      dataIndex: 'licenseVehicle',
      key: 'licenseVehicle',
    },
    {
      title: 'Số tiền',
      dataIndex: 'price',
      key: 'price',
    },
  ];

  return (
   <>
   <Breadcrumb routes={[{ breadcrumbName: "Dashboard/ReportDriver" }]} />
   <div className='my-5'>
   <Row gutter={16}>
    <Col span={8}>
      <Card title="Tổng Tiền" className='color-primary'>
      {data?.total}
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Tổng Số Tài Xế" >
      {data.paymentRentDriverDTOs?.length}
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Trung bình một tài xế" >
      {data?.total / data?.paymentRentDriverDTOs?.length}
      </Card>
    </Col>
  </Row>
   </div>
   <div style={{ width: '600px', margin: '0 auto' }}>
      <h1 className='text-center'>Báo cáo thống kê thuê tài xế</h1>
      {data ? <RevenuePieChart data={data.paymentRentDriverDTOs} /> : <p className='text-center'>Đang tải dữ liệu...</p>}
       {/* <RevenuePieChart data={datatest} />  */}
    </div>
<div>
<Table dataSource={dataSource} columns={columns} />
</div>
   </>
  )
}

export default ReportDriver


