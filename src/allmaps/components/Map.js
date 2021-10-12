import React, { useState } from "react";
import "./map.css";
import Popup from "./popup";
import { uzbDatas } from "../uzbDatas";
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';


function Map() {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);
  const history = useHistory();
  // const allInfos = useSelector(state => state.regionsSlice.allInfos)
  // console.log(allInfos)
  const togglePopup = (id, name) => {
    setId(id);
    setName(name);
    setIsOpen(true);
  };
  const doubleClick = (id) => {
    history.push(`/regionData/${id}`);
  };
  return (
    <div className="regions">
      {isOpen && (
        <Popup
          content={
            <>
              <p
                style={{
                  fontSize: "15px",
                  color: "orange",
                  fontWeight: "bold",
                }}
              >
                id:{id},
                <br />
                name:{name}
              </p>
            

            </>
          }
          handleClose={togglePopup}
        />
      )}
      <div className='svg_responsive'>
      <svg
        width= "1000px"  
        height= "650px"
        id="uzbekistan"
        baseprofile="tiny"
        stroke="orange"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        version="1.2"
        viewbox="0 0 500 500"
        onMouseOut={() => setIsOpen(true)}
      >
        
           <g>
        {uzbDatas.map((item) => (
          <svg

            onDoubleClick={(id) => {
              doubleClick(item.id);
            }}
            onClick={(id, name) => {
              togglePopup(item.id, item.name);
            }}
          >
           
            <path name={item.name} id={item.id} d={item.d} />
          </svg>
        ))}
          </g>
        <g>
        <circle cx="673.4" cy="626" id="0"></circle>
        <circle cx="637.6" cy="506" id="1"></circle>
        <circle cx="636" cy="498.9" id="2"></circle>
      </g>
      </svg>
      </div>
    </div>
  );
}

export default Map;
