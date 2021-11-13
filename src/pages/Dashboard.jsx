import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import Chart from "react-apexcharts";

import StatusCard from "../components/status-card/StatusCard";

import Table from "../components/table/Table";

import Badge from "../components/badge/Badge";

import statusCards from "../assets/JsonData/status-card-data.json";
import InputInfos from "../components/inputInfos";
import Map from "../allmaps/components/Map";
import RegionsData from "../allmaps/components/RegionsData";
import {BrowserRouter as Router ,Route, Switch } from "react-router-dom";
import Chartt from "../allmaps/components/chart";
import Chartt2 from "../allmaps/components/chart2";
import AllInfos from "../allmaps/datas/apidatas.json";
import RegionsInfos from "../allmaps/datas/regionsInfos.json";
import Grid from '../allmaps/components/grid';
import { useSelector } from "react-redux";

const chartOptions = {
  series: [
    {
      name: "Online Customers",
      data: [40, 70, 20, 90, 36, 80, 30, 91, 60],
    },
    {
      name: "Store Customers",
      data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10],
    },
  ],
  options: {
    color: ["#6ab04c", "#2980b9"],
    chart: {
      background: "transparent",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    legend: {
      position: "top",
    },
    grid: {
      show: false,
    },
  },
};

const topCustomers = {
  head: ["user", "total orders", "total spending"],
  body: [
    {
      username: "john doe",
      order: "490",
      price: "$15,870",
    },
    {
      username: "frank iva",
      order: "250",
      price: "$12,251",
    },
    {
      username: "anthony baker",
      order: "120",
      price: "$10,840",
    },
    {
      username: "frank iva",
      order: "110",
      price: "$9,251",
    },
    {
      username: "anthony baker",
      order: "80",
      price: "$8,840",
    },
  ],
};

const renderCusomerHead = (item, index) => <th key={index}>{item}</th>;

const renderCusomerBody = (item, index) => (
  <tr key={index}>
    <td>{item.username}</td>
    <td>{item.order}</td>
    <td>{item.price}</td>
  </tr>
);

const latestOrders = {
  header: ["order id", "user", "total price", "date", "status"],
  body: [
    {
      id: "#OD1711",
      user: "john doe",
      date: "17 Jun 2021",
      price: "$900",
      status: "shipping",
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid",
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "pending",
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid",
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "refund",
    },
  ],
};

const orderStatus = {
  shipping: "primary",
  pending: "warning",
  paid: "success",
  refund: "danger",
};

const renderOrderHead = (item, index) => <th key={index}>{item}</th>;
const regInfos=RegionsInfos.map(item=>item.infos);
const renderOrderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.user}</td>
    <td>{item.price}</td>
    <td>{item.date}</td>
    <td>
      <Badge type={orderStatus[item.status]} content={item.status} />
    </td>
  </tr>
);
const Dashboard = () => {
  const [showDatas, setShowDatas] = useState(false);
  const {mode} = useSelector(state => state.themeSlice)
  const allInfos = useSelector(state => state.regionsSlice.allInfos);
  const filteredUzbInfos=AllInfos.filter(item=>item.name==="Uzb")
console.log(filteredUzbInfos)
console.log(allInfos)

  return (
      <Router>
    <div>

      <InputInfos />
      <h2 className="page-header">Dashboard</h2>
      <Switch>
        <Route exact path="/">
     <div style={{display:"flex"}}>
          <Map />
      <div style={{marginTop:"70px",marginLeft:"20px"}}className="row">
        <div className="col-8"></div>
        <div className="col-4">
          <div className="row">
            {filteredUzbInfos[0].infos.map((item, index) => (
              <div className="col-6" key={index}>
                <StatusCard
                  count={item.count}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
        </div>
        </div>

      <div style={{width:"600px",marginLeft:"50px"}}> 
<div style={{display:"flex",justifyContent:"space-between"}}>
      <Chartt uzb={true} infos={ [
            {
              "tumanNomi":"Tashkent",
              "JamiArizalar": "1000000",
              "maqullangan": "700000",
              "radEtilgan": "200000",
              "muddatiTugagan": "100000",
              "datas":[700000,200000,100000]
            },]}/>
    <Chartt2/>
    </div>
    <div style={{marginLeft:"50px"}}>
    <Grid/>
    </div>

      
      </div>
      </Route>
      
        <Route exact path="/regionData/:id">
          <div style={{display:"flex"}}>
          < RegionsData/>
      <div style={{marginTop:"70px"}}className="row">
        <div className="col-8"></div>
        <div className="col-4">
          <div className="row">
          {filteredUzbInfos[0].infos.map((item, index) => (
              <div className="col-6" key={index}>
                <StatusCard
                  count={item.count}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
        </div>
        </div>
    
      <div style={{width:"600px",marginLeft:"-50px",marginTop:"-60px"}}> 

      <div style={{display:"flex",justifyContent:"space-between",}}>
      <Chartt uzb={false} regInfos={RegionsInfos}/>
    <Chartt2/>
        </div>
        <div style={{marginLeft:"150px"}}>
    <Grid/>
    </div>


      </div>
        </Route>
      </Switch>
    </div>
    </Router>
    
  );
};

export default Dashboard;
