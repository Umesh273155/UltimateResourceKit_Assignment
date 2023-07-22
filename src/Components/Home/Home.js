import React from "react";
import "./Home.css";
import NavIcon from "../NavIcon/NavIcon";
import RecentTransaction from "../RecentTransaction/RecentTransaction";
import RetirementIncome from "../RetirementIncome/RetirementIncome";
import RetirementStrategy from "../RetirementStrategy/RetirementStrategy";
function Home() {
  return (
    <div className="home_Main_container">
    <div className="navIcon_RecentTransaction_Box" >
    <div className="navCompDiv">
    <NavIcon />
    </div>
     
     
      <RecentTransaction />
      </div>
     
        <div className="box">
        <RetirementIncome />
        </div>
    
    <div className="box box3" style={{marginRight:"0"}} >
    <RetirementStrategy />
    </div>
    
    
     
    
    </div>
  );
}

export default Home;
