import React from 'react'
import './RetirementStrategy.css'
import CloseIcon from '@mui/icons-material/Close';
function RetirementStrategy() {
  return (
    <div className="RetirementStrategy_Main_Container" style={{paddingTop:"0"}}>
    <div className="bellDiv">
    <CloseIcon/>
    </div>
   
        <h3 className="Retirement_Strateg_header">Retirement Strategy</h3>
        <h5>Employee Contribution</h5>
        <div className="range_Percentage_Box">
        <input type="range" id="volume" name="volume"
         min="0" max="12%"></input>
        <h5 className="percentage">12%</h5>
        </div>

        <h5>Retirement Age</h5>
        <div  className="range_Percentage_Box">
        <input type="range" id="volume" name="volume"
         min="0" max="85"></input>
        <h5  className="percentage">65</h5>
        </div>
        <hr></hr>
             <div  className="range_Percentage_Box">
             <h5>Employer Contribution</h5>
             <h5  className="percentage">8.4%</h5>
             </div>

             <div  className="range_Percentage_Box">
             <h5>Interest Rate</h5>
             <h5  className="percentage" >5%</h5>

             </div>
               <div className="range_Percentage_Box" style={{marginBottom:"0"}}>
               <button className="updateButton">Update</button>
              
               </div>
               <p style={{textAlign:"center",fontSize:"small",color:"blue",fontWeight:"500",marginBottom:"30px"}}>View Help Docs &gt;</p>
          
                 <div className="retirementStrategy_Footer">
                      <p className="retirementStrategy_Footer_Para">Are you considering a</p>
                      <p className="retirementStrategy_Footer_Para" style={{marginBottom:"10px"}}><b>Housing Advance?</b></p>
                       <p  className="retirementStrategy_Footer_Para">Limited time reduced interest.</p>
                       <p className="learnMore" style={{marginBottom:"20px"}}>Learn More &gt;</p>

                
                 </div>

    </div>
  )
}

export default RetirementStrategy

