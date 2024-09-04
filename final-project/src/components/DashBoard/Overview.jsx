import React from 'react';
import { Row, Col, Card } from 'antd';
import { Line, Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const StyledOrderCard = styled.div`
  background-color: #f4f4f4;
  padding: 16px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const RevenueChart = () => (
  <Line
    data={{
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [
        { label: 'Revenue', data: [65, 59, 80, 81, 56, 55, 40], borderColor: '#FC7E06', tension: 0.5 },
        { label: 'Cost', data: [28, 48, 40, 19, 86, 27, 90], borderColor: 'green', tension: 0.5 },
      ],
    }}
    options={{
      plugins: { legend: { display: true } },
    }}
  />
);

const ResponsiveDoughnutChartWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px; 
`;

const DoughnutChart = () => (
  <ResponsiveDoughnutChartWrapper>
    <Doughnut
      data={{
        labels: ['Admin', 'Vendor', 'Partner'],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: ['rgba(43, 63, 229, 0.8)', 'rgba(250, 192, 19, 0.8)', 'rgba(253, 135, 135, 0.8)'],
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: true },
        },
      }}
    />
  </ResponsiveDoughnutChartWrapper>
);

function OverView() {
  const cardData = [
    { title: "Invested", content: "Over All", rate: 10 },
    { title: "Online Sale", content: "Over All", rate: 5 },
    { title: "Offline Sale", content: "Over All", rate: 8 },
  ];

  return (
    <>
      {/* First Row of Cards */}
      <Row gutter={[16, 16]}>
        {cardData.map((card, index) => (
          <Col key={index} span={8}>
            <Card title={card.title} bordered={false}>
              <p>{card.content}</p>
              <p>Rate: {card.rate}%</p>
            </Card>
          </Col>
        ))}
      </Row>

      {/* First Row of Charts */}
      <Row gutter={[16, 16]} style={{ marginTop: '50px' }}>
        <Col span={12}>
          <Card bordered={false}>
            <RevenueChart />
          </Card>
        </Col>
        <Col span={12}>
          <Card bordered={false} style={{ height: '100%' }}>
            <DoughnutChart />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default OverView;
