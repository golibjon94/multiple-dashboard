import React,{useState,useEffect} from "react";
import { Doughnut } from "react-chartjs-2";
import Table from "../components/table";
import { useSelector } from "react-redux";



function Chart() {
const [datas, setDatas] = useState([2000])
  const allInfos=useSelector(state=>state.regionsSlice.allInfos)

  console.log(datas)
  useEffect(() => {
    allInfos?.map(item=> {
      setDatas([item.maqullangan,item.radEtilgan,item.muddatiTugagan])
   })
  }, [allInfos])
const state = {
  labels: [
   
    "Maqullangan",
    "Rad etilgan",
    "Muddati tugagan",
  
  ],
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: ["royalblue", "red", "#2FDE00", ],
      hoverBackgroundColor: [
        "#501800",
        "#4B5000",
        "black",
      ],
      data:datas
    },
  ],
};
    return (
      <div style={{backgroundColor:"aliceblue", marginTop: "0px", }}>
        {allInfos?.map(item=>(
 <h1 style={{paddingLeft:"10px"}}>
 Tuman nomi:<span style={{color:"royalblue"}}>{item.tumanNomi}</span>
 </h1>
        ))}
       
        <Doughnut
          style={{height: "140px",width:"280px",
          marginLeft: "20px",
          marginTop:"-60px",
        padding:"100px" }}
          data={state}
          options={
            
            {
            title: {
              display: true,
              text: "Average Rainfall per month",
              fontSize:"65",
            },
            legend: {
              display: true,
              position: "right",
            },
        
        
          }}
        />
    <Table/>
      </div>
    );
  
}
export default Chart;
