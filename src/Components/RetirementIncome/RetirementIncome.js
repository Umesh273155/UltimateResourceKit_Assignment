
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import "./RetirementIncome.css";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CloseIcon from '@mui/icons-material/Close';
function RetirementIncome() {
  const data = [
    { name: "20", x: 12, y: 12, z: 12 },
    { name: "  ", x: 18, y: 18, z: 18 },
    { name: "25", x: 23, y: 23, z: 23 },
    { name: "  ", x: 27, y: 27, z: 27 },
    { name: "30", x: 31, y: 31, z: 31 },
    { name: "  ", x: 37, y: 37, z: 37 },
    { name: "35", x: 42, y: 42, z: 42 },
    { name: "  ", x: 47, y: 47, z: 47 },
    { name: "40", x: 54, y: 54, z: 54 },
    { name: "  ", x: 37, y: 37, z: 37 },
    { name: "35", x: 42, y: 42, z: 42 },
    { name: "  ", x: 47, y: 47, z: 47 },
    { name: "40", x: 54, y: 54, z: 54 },
  ];
  const normalizedProgress = Math.max(0, Math.min(100, 22));
  const radius = 40;
  const circumference = 8 * Math.PI * radius;
  const offset = circumference - (circumference * normalizedProgress) / 100;

  return (
    <div className="RetirementIncome_Main_Container" id="RetirementIncome_Main_ContainerId">
    <div className="bellDiv" >
    <NotificationsNoneIcon/>
    </div>
   
      <p className="RetirementIncomeText">Retirement Income</p>
      <h4 className="startingYear">Starting Year 2056</h4>
      <br></br>
      <br></br>
      <div className="Goals_MonthlyIncome_Box" >
        <div className="Goals_MonthlyIncome_Child_Box">
          <h3>$300,000</h3>
          <p className="GoalAcievedPara">My Goal</p>
        </div>

        <div className="Goals_MonthlyIncome_Child_Box">
          <h3>59%</h3>
          <p className="GoalAcievedPara">My Achieved</p>
        </div>

        <div className="Goals_MonthlyIncome_Child_Box">
          <h3>$300</h3>
          <p className="GoalAcievedPara">Est. Monthly Income</p>
        </div>
      </div>
      <div>
        <h4 className="ContributionsPara">Contributions Overtime</h4>
        {/*** */}

        <div className="Contribution_Employee_Box">
          <div className="Contribution_EmployeeDiv">
            <button className="nullButton">.</button>
            <p className="Contribution_EmployeePara" >
              Employer: <b>K73,500</b>
            </p>
          </div>

          <div className="Contribution_EmployeeDiv" id="Contribution_EmployeeDivFirst">
            <button className="nullButton" id="nullButton1">.</button>
            <p className="Contribution_EmployeePara" style={{ marginLeft: "0" }}>
              Employer: <b>K52,500</b>
            </p>
          </div>

          <div className="Contribution_EmployeeDiv">
            <button className="nullButton">.</button>
            <p className="Contribution_EmployeePara" style={{ marginLeft: "0" }}>
              Total Interest: <b>K244,313</b>
            </p>
          </div>
        </div>

        {/** */}

        {/**bar chart operation start */}
     


      <BarChart className="barChart" data={data} width={450} height={200} >
          <CartesianGrid />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="x" stackId="a" fill="#0800a3" />
          <Bar dataKey="y" stackId="a" fill="#4a35ff" />
          <Bar dataKey="y" stackId="a" fill="#85b0ff" />
        </BarChart>
        
             <div  className="circularGraphMainContainer">
            <div>
            <h4  className="compareHeader">How do I compare to my peers?</h4>
            <p  className="fontSizeSmall"style={{marginTop:"0",marginBottom:"0",marginLeft:"20px"}}>These numbers represent current goal achievement.</p>
            </div>
              <div className="selectorBox" style={{backgroundColor:"white"}}>
          
           <select  className="fontSizeSmall" style={{marginTop:"35px"}}> 
           <option  className="fontSizeSmall">Age: &nbsp; &nbsp; &nbsp;Under 30</option>
           </select>
           <hr></hr>
           <select className="fontSizeSmall">
           <option className="fontSizeSmall">Salary: &nbsp;K20-K30</option>
           </select>
           <hr></hr>

          <select className="fontSizeSmall" >
          <option className="fontSizeSmall">Gender</option>
          <option className="fontSizeSmall">Male</option>
          <option className="fontSizeSmall">Female</option>
         
          </select>
          <hr></hr>
           </div>
                 
        <div className="circleProgress_Div" style={{width:"100%"}} >   

          <svg width="150"  height="150"  xmlns="http://www.w3.org/2000/svg">

            {/* Outer circle */}
            <circle cx="100" cy="50" r={radius} stroke="#f0fcf9" strokeWidth="10" fill="none" />

            {/* Inner circle with progress */}
            <circle
              cx="100"
              cy="100"
              r={radius}
              stroke="#22D6A9"
              strokeWidth="10"
              fill="none"
              style={{
                strokeDasharray: circumference,
                strokeDashoffset: offset,
                transform: "rotate(-90deg)",
                transformOrigin: "center",
              }}
            />

            {/* Text */}
            <text x="100" y="50" textAnchor="middle" dominantBaseline="middle" fill="black" fontSize="15">
              {78}%
            </text>
            <text x="100" y="125" textAnchor="middle" fill="black" fontSize="14">
              Average
            </text>
          </svg>
          <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg">
            {/* Outer circle */}
            <circle cx="100" cy="50" r={radius} stroke="#f0fcf9" strokeWidth="10" fill="none" />

            {/* Inner circle with progress */}
            <circle
              cx="100"
              cy="100"
              r={radius}
              stroke="#22D6A9"
              strokeWidth="10"
              fill="none"
              style={{
                strokeDasharray: circumference,
                strokeDashoffset: offset,
                transform: "rotate(-90deg)",
                transformOrigin: "center",
              }}
            />

            {/* Text */}
            <text x="100" y="50" textAnchor="middle" dominantBaseline="middle" fill="black" fontSize="16">
              {95}%
            </text>
            <text x="100" y="125" textAnchor="middle" fill="black" fontSize="14">
              Top
            </text>
          </svg>
          <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg">
            {/* Outer circle */}
            <circle cx="100" cy="50" r={radius} stroke="#f0fcf9" strokeWidth="10" fill="none" />

            {/* Inner circle with progress */}
            <circle
              cx="100"
              cy="100"
              r={radius}
              stroke="#22D6A9"
              strokeWidth="10"
              fill="none"
              style={{
                strokeDasharray: circumference,
                strokeDashoffset: offset,
                transform: "rotate(-90deg)",
                transformOrigin: "center",
              }}
            />

            {/* Text */}
            <text x="100" y="50" textAnchor="middle" dominantBaseline="middle" fill="black" fontSize="16">
              {59}%
            </text>
            <text x="100" y="125" textAnchor="middle" fill="black" fontSize="14">
              Me
            </text>
          </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RetirementIncome;
