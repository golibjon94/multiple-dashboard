import React, { useState, useEffect } from "react";
import "./regionsData.css";
import { allDatas } from "../allDatas";
import { useParams } from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux";
import {addRegionsInfos} from "../redux/regionsSlice"
import data from "../datas/apidatas.json";

function RegionsData() {
  const [categories, setcategories] = useState([]);
  const { id } = useParams();
 
  const filteredDatas = allDatas.filter((item, name) => item.id === id);
 const dispatch = useDispatch()
  useEffect(() => {
    filteredDatas.map((item, name) => setcategories(item.infos));
  }, []);


const getDatas=(id,name)=>{
   alert(id,name)
 const filterData=data.filter(item=>item.id==id)
    dispatch(addRegionsInfos(filterData))
    // axios.get("https://jsonplaceholder.typicode.com/users")
    // .then(res=>dispatch(addRegionsInfos(res.data)))
    // .catch(err=>console.log(err.message))
}
// const hoverHandling=(id)=>{
//  alert(id,)
//  }
  return (
    <div>
   
 {filteredDatas.map(itemm=>(
   
  <svg
        id={itemm.name}
        baseprofile="tiny"
        width="530"
        height="600"
        stroke="#ffffff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        version="1.2"
        viewbox="0 0 1000 652"
        border="1px"

       
      >
        
        <svg>
          {categories?.map((item) => (
            
            <path
            // onMouseOver={(id)=>{hoverHandling(item.id)}}
            onClick={(id,name)=>{getDatas(item.id,item.name)}}
             id={item.id} d={item.d} name={item.name} />
             
          ))}
        </svg>
        <circle cx="673.4" cy="626" id="0"></circle>
        <circle cx="637.6" cy="506" id="1"></circle>
        <circle cx="636" cy="498.9" id="2"></circle>
      </svg>
))}
    </div>
  );
}

export default RegionsData;
