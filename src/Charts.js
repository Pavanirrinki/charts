import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as Chartjs, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip } from 'chart.js/auto';
import Piecharts from './Piechart';

Chartjs.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip);

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

  const array = [];
  const sales = [];
  const sales2 = [];

  chartData?.map((data) => array.push(data.year));
  chartData?.map((data) => sales.push(data.samsung));
  chartData?.map((data) => sales2.push(data.Redmi));

  const data = {
    labels: array,
    datasets: [
      {
        label: 'Samsung Sales',
        data: sales,
        backgroundColor: 'aqua',
        borderColor: 'black',
        pointBorderColor: 'aqua',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Redmi Sales',
        data: sales2,
        backgroundColor: 'lightgreen',
        borderColor: 'black',
        pointBorderColor: 'lightgreen',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        min: 1000,
        max: 5000,
      },
    },
  };
  const Bardata = {
    labels: array,
    datasets: [
      {
        label: 'Samsung Sales',
        data: sales,
        backgroundColor: 'aqua',
        borderColor: 'black',
        borderWidth: 1,
      },
      {
        label: 'Redmi Sales',
        data: sales2,
        backgroundColor: 'lightgreen',
        borderColor: 'black',
        borderWidth: 1,
      },
    ],
  };

  const Baroptions = {
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 5000,
        ticks: {
          stepSize: 1000,
        },
      },
    },
  };
  return (
    <div>
    <div className='charts-cards display-none123'>
      <div>
      <div style={{display:"flex",flexDirection:"row"}}>
     <div style={{backgroundColor:"black",width:"20%",height:"90vh",margin:"20px",borderRadius:"10px"}}>
<p style={{color:"white",textAlign:"center"}}><b>Board.</b></p>
<p style={{color:"white",textAlign:"center",fontWeight:"bold",opacity:"0.6"}}>Dashboard.</p>
<p style={{color:"white",textAlign:"center",fontWeight:"bold",opacity:"0.6"}}>Transactions.</p>
<p style={{color:"white",textAlign:"center",fontWeight:"bold",opacity:"0.6"}}>Schedules.</p>
<p style={{color:"white",textAlign:"center",fontWeight:"bold",opacity:"0.6"}}>Settings.</p>
<p style={{color:"white",textAlign:"center",fontWeight:"bold",opacity:"0.6"}}>Users.</p>
     </div>
     
    <div style={{ width: '500px', height: '300px'}}>
    <h5>DashBoard</h5>
    
    <div style={{display:'flex'}}>
      <Line data={data} options={options} />
      <div style={{marginLeft:"30%"}}>
      <div style={{backgroundColor:' #ccffe6',padding:"0px 15px",height:"60px",borderRadius:"5px",display:'flex',flexDirection:"column",justifyContent:"center",marginBottom:"10px"}}>  
        <h6 style={{marginBottom:"0px"}}>TOTALREVENUE</h6>
   <p style={{marginTop:"0px",opacity:"0.5",fontWeight:"bold"}}>$23,456,678</p>
      </div>
   
      <div style={{backgroundColor:'#ffffb3',padding:"0px 15px",height:"60px",borderRadius:"5px",display:'flex',flexDirection:"column",justifyContent:"center",marginBottom:"10px"}}>
        <h6 style={{marginBottom:"0px"}}>TOTALTRANSACTIONS</h6>
   <p style={{marginTop:"0px",opacity:"0.5",fontWeight:"bold"}}>1,520</p>
      </div>
<div style={{backgroundColor:' #ffe6e6',padding:"0px 15px",height:"60px",borderRadius:"5px",display:'flex',flexDirection:"column",justifyContent:"center",marginBottom:"10px"}}>      
  <h6 style={{marginBottom:"0px"}}>TOTALLIKES</h6>
   <p style={{marginTop:"0px",opacity:"0.5",fontWeight:"bold"}}>9,721</p>
      </div>
   
      <div style={{backgroundColor:'#b3b3cc',padding:"0px 15px",height:"60px",borderRadius:"5px",display:'flex',flexDirection:"column",justifyContent:"center",marginBottom:"10px"}}>  
        <h6 style={{marginBottom:"0px"}}>TOTALUSERS</h6>
   <p style={{marginTop:"0px",opacity:"0.5",fontWeight:"bold"}}>892</p>
      </div>
      </div>
      </div>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        
      <Piecharts />
      <div style={{ width: '600px', height: '700px' }}>
      <Bar data={Bardata} options={Baroptions} />
      </div>
  
      </div>
      </div>
    </div>
    </div>
    </div>










{/* MOBILE VERSION */}
<div className='display-block123'>
<div style={{backgroundColor:"black",width:"100%",margin:"20px",borderRadius:"10px",display:"flex",justifyContent:"space-around",marginLeft:"0px"}}>

<p style={{color:"white",textAlign:"center",fontWeight:"bold",opacity:"0.6"}}>Dashboard</p>
<p style={{color:"white",textAlign:"center",fontWeight:"bold",opacity:"0.6"}}>Transactions</p>
<p style={{color:"white",textAlign:"center",fontWeight:"bold",opacity:"0.6"}}>Schedules</p>
<p style={{color:"white",textAlign:"center",fontWeight:"bold",opacity:"0.6"}}>Settings</p>
<p style={{color:"white",textAlign:"center",fontWeight:"bold",opacity:"0.6"}}>Users</p>
     </div>
     <div style={{backgroundColor:"#d9d9d9",width:"100%",marginBottom:"0px",borderRadius:"10px",marginLeft:"0px"}}>
     <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
     <div style={{backgroundColor:' #ccffe6',padding:"0px 15px",height:"60px",borderRadius:"5px",display:'flex',flexDirection:"column",justifyContent:"center",marginBottom:"10px",marginTop:"20px"}}>  
        <h6 style={{marginBottom:"0px"}}>TOTALREVENUE</h6>
   <p style={{marginTop:"0px",opacity:"0.5",fontWeight:"bold"}}>$23,456,678</p>
      </div>
      <div style={{backgroundColor:'#ffffb3',padding:"0px 15px",height:"60px",borderRadius:"5px",display:'flex',flexDirection:"column",
      justifyContent:"center",marginBottom:"10px",marginTop:"20px"}}>
        <h6 style={{marginBottom:"0px"}}>TOTALTRANSACTIONS</h6>
   <p style={{marginTop:"0px",opacity:"0.5",fontWeight:"bold"}}>1,520</p>
      </div>
<div style={{backgroundColor:' #ffe6e6',padding:"0px 15px",height:"60px",borderRadius:"5px",display:'flex',
flexDirection:"column",justifyContent:"center",marginBottom:"10px",marginTop:"20px"}}>      
  <h6 style={{marginBottom:"0px"}}>TOTALLIKES</h6>
   <p style={{marginTop:"0px",opacity:"0.5",fontWeight:"bold"}}>9,721</p>
      </div>
   
      <div style={{backgroundColor:'#b3b3cc',padding:"0px 15px",height:"60px",borderRadius:"5px",display:'flex',
      flexDirection:"column",justifyContent:"center",marginBottom:"10px",marginTop:"20px"}}>  
        <h6 style={{marginBottom:"0px"}}>TOTALUSERS</h6>
   <p style={{marginTop:"0px",opacity:"0.5",fontWeight:"bold"}}>892</p>
      </div>
     </div>
     <Line data={data} options={options} />
    <Piecharts />
       <Bar data={Bardata} options={Baroptions} />
  
  
    </div>
   </div>
   </div>
  );
}

export default Charts;
