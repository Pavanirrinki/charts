import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

function Charts() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('https://mobilesdata.onrender.com/posts');
    const apiData = await response.json();
    setChartData(apiData);
  };

 

  const years = chartData?.map((data) => data.year);
  const samsungSales = chartData?.map((data) => data.samsung);
  const appleSales = chartData?.map((data) => data.Redmi);

  const data = {
    labels: years,
    datasets: [
      {
        label: 'Samsung Sales',
        data: samsungSales,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
      {
        label: 'Apple Sales',
        data: appleSales,
        backgroundColor: ['#4BC0C0', '#9966FF', '#FF9F40'],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <div style={{ width: '250px', height: '300px' }}>
      <Pie data={data} options={options} />
    </div>
  );
}

export default Charts;
