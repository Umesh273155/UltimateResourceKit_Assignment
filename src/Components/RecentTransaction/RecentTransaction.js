import React from 'react'
import './RecentTransection.css';
import NavIcon from '../NavIcon/NavIcon';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
function RecentTransaction() {
  return (
    <div className="recentTransaction_Main_Container" >
    <div className="bellDiv" >
    <NotificationsNoneIcon/>
    </div>
   
    <div className="userAccount_Image_Box">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGz1KuuFBS26P2CjyTTdfFj6kE1V5GdUCWog&usqp=CAU"alt="userImage" className="userImage"></img>
    <div>
    <h2>Hi, Mike</h2>
    <p>welcome back</p>
    </div>
     </div>
<div className="transection_Details_box">
 <div  className="transection_Details_InnerBox">
<h4 className="todayText">Today</h4>
 
<h4>$19,892</h4>
<p className="transection_Details_Para">Account Balence</p>

<div className="display" >
 

  <div  className='yearToyearDiv'>
  <h4>$4,0000</h4>
  <p className="transection_Details_Para" >Year-to-Date <span id="Year-to-Date_Contributions"> Contributions</span></p>
  </div>
  
 <div>
 <h4>$1,892</h4>
 <p className="transection_Details_Para">Total Interest</p>
 </div>
 
 </div>
 <select className="selectTag">
 <option className="option">I want to</option>
 </select>
 </div>
 <div className="Recent_Transactions">
  <h4 className="Recent_Transactions_text">Recent Transactions</h4>

 <p className="transectionDate">2020-08-07</p>
 <h6 className="withdrawalPara">Withdrawal Transfer to Bank-XXX11</h6>
 
 <hr></hr>
 
 <p  className="transectionDate">2020-07-21</p>
 <h6 className="withdrawalPara">Withdrawal Transfer to Bank-XXX11</h6>
 
 <hr></hr>
 </div>
 <div className="withdrawalDiv">
 <p  className="transectionDate">2020-07-21</p>
 <h6 className="withdrawalPara">Withdrawal Transfer to Bank-XXX11</h6>
 <hr></hr>
 </div>
 
<br></br>
<div className="navComponentDiv">
<NavIcon style={{display:"block"}}/>
</div>

<br></br>
</div>
 </div>
  )
}

export default RecentTransaction
