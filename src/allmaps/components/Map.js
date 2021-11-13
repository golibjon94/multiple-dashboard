import React, { useState } from "react";
import "./map.css";
import Popup from "./popup";
import { uzbDatas } from "../uzbDatas";
import { useHistory } from "react-router-dom";
// import { useSelector } from 'react-redux';


function Map() {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);
  const history=useHistory()

  const togglePopup = (id, name) => {

    setId(id);
    setName(name);
    setIsOpen(true);
  };
  const doubleClick = (id) => {
    history.push(`/regionData/${id}`)

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
    

      <div className="uzbmap">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 264.05408 171.97914"
          version="1.1"
          id="uzbekistan"
          stroke="orange"
          stroke-width="0.5"
          
          xmlns="http://www.w3.org/2000/svg"
        >
          <sodipodi
            id="namedview204"
            pagecolor="#505050"
            bordercolor="#eeeeee"
            borderopacity="1"
            showgrid="false"
            width="264.05408mm"
            height="240mm"
            fit-margin-top="0"
            fit-margin-left="0"
            fit-margin-right="0"
            fit-margin-bottom="0"
          />

          <g id="layer1" transform="translate(-32.388773,-30.710986)">
            {uzbDatas?.map((item) => ( 
              <path 
              d={item.d} name={item.name} id={item.id}
              onDoubleClick={(id)=>doubleClick(item.id)}
              onClick={(id, name) => {
                togglePopup(item.id, item.name);
              }}>
              </path>
              
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