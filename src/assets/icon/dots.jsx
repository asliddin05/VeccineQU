import React from "react";

export const Dots = ({ style }) => {
  return <svg style={{marginBottom: "30px"}} width={100} height={70} viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg" >
    <circle cx={5} cy={5} r={5} fill="#FFE1D8" />
    <circle cx={5} cy={35} r={5} fill="#FFE1D8" />
    <circle cx={5} cy={65} r={5} fill="#FFE1D8" />
    <circle cx={35} cy={5} r={5} fill="#FFE1D8" />
    <circle cx={35} cy={35} r={5} fill="#FFE1D8" />
    <circle cx={35} cy={65} r={5} fill="#FFE1D8" />
    <circle cx={65} cy={5} r={5} fill="#FFE1D8" />
    <circle cx={65} cy={35} r={5} fill="#FFE1D8" />
    <circle cx={65} cy={65} r={5} fill="#FFE1D8" />
    <circle cx={95} cy={5} r={5} fill="#FFE1D8" />
    <circle cx={95} cy={35} r={5} fill="#FFE1D8" />
    <circle cx={95} cy={65} r={5} fill="#FFE1D8" />
  </svg>    
}