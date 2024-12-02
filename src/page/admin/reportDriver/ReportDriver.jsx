import React, { useState, useEffect } from 'react'
import { Breadcrumb, Card, Col, Row } from "antd";
import RevenuePieChart from './RevenuePieChart';
import axios from "axios";

const ReportDriver = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    // Giả lập API
    const fetchData = async () => {
      const storedData = localStorage.getItem('token'); // Lấy dữ liệu từ localStorage
      //const parsedData = storedData ? JSON.parse(storedData) : null; // Parse dữ liệu nếu không null
      // Dùng tạm vì chưa đăng nhập được
      const parsedData = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImR1Y2xpbmg1MTIyMDAyMjJAZ21haWwuY29tIiwiSUQiOiIyIiwicm9sZSI6IlN0YWZmIiwibmJmIjoxNzMzMTM5ODY1LCJleHAiOjE3MzMxNDE2NjUsImlhdCI6MTczMzEzOTg2NSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo3MTI0IiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDozMDAzIn0.IZHsHbJi4mB1dtV0xwxvOcOk-k9pYHeSlTLnYu-5jJQ'
      
      console.log(`Gọi API nè`)
      try{
      const apiData = await axios.get(
        "https://boring-wiles.202-92-7-204.plesk.page/api/HistoryRentDriver/rent-details-with-total-for-owner?startDate=2024-01-01&endDate=2024-11-26&vehicleId=1&vehicleOwnerId=1",
        {
          headers: {
            'Authorization': `Bearer ${parsedData}`
          },
        }
      );
      console.log(`${JSON.stringify(apiData.data)}`)
      setData(JSON.stringify(apiData.data));
      }catch(error){
        console.error("Lỗi khi gọi API:", error.response ? error.response.data : error.message);
      }
    //  const apiData = {"paymentRentDriverDTOs":[{"driverName":"string","licenseVehicle":"98B-00968","price":900000,"createdAt":"2024-11-05T07:30:00"},{"driverName":"Trần Thị B","licenseVehicle":"98B-00968","price":950000,"createdAt":"2024-11-06T08:30:00"},{"driverName":"Lê Văn C","licenseVehicle":"98B-00977","price":1000000,"createdAt":"2024-11-07T09:30:00"},{"driverName":"Phạm Thị D","licenseVehicle":"98B-00216","price":1100000,"createdAt":"2024-11-08T10:30:00"},{"driverName":"Trần Thị B","licenseVehicle":null,"price":110,"createdAt":"2024-11-25T13:43:29.55"}],"total":3950110}
      setData(JSON.stringify(apiData.data));
    };
    fetchData();
  }, []);

  return (
   <>
   <Breadcrumb routes={[{ breadcrumbName: "Dashboard/ReportDriver" }]} />
   <div className='my-5'>
   <Row gutter={16}>
    <Col span={8}>
      <Card title="Tổng Tiền" bordered={false}>
      ${data.total}
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Tổng Số Tài Xế" bordered={false}>
        10
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
  </Row>
   </div>
   <div style={{ width: '600px', margin: '0 auto' }}>
      <h1 className='text-center'>Biểu đồ Doanh Thu</h1>
      {data ? <RevenuePieChart data={data.paymentRentDriverDTOs} /> : <p className='text-center'>Đang tải dữ liệu...</p>}
    </div>

   </>
  )
}

export default ReportDriver