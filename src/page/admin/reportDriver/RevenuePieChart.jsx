import React, { useEffect, useState } from 'react';
import { Pie } from '@ant-design/charts';

const RevenuePieChart = ({ data }) => {
  const [chartData, setChartData] = useState([]);

  console.log(`data đã truyền qua: ${data}`)

  useEffect(() => {
    if (data) {
      const processedData = processDataByDriver(data);
      setChartData(processedData);
      console.log(`ChartData: ${processedData}`)
    }
  }, [data]);

  const config = {
    appendPadding: 10,
    data: chartData,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'outer',
      content: '{name} ({percentage})',
    },
    interactions: [{ type: 'element-active' }],
    statistic: {
      title: {
        content: 'Doanh thu',
      },
      content: {
        content: `${data?.total || 0} VND`,
      },
    },
  };

  const processDataByDriver = (data) => {
    const grouped = data.reduce((acc, curr) => {
      const name = curr.driverName || "Không rõ";
      acc[name] = (acc[name] || 0) + curr.price;
      return acc;
    }, {});

    return Object.keys(grouped).map((key) => ({
      type: key,
      value: grouped[key],
    }));
  };

  return <Pie {...config} />;
};

export default RevenuePieChart;
