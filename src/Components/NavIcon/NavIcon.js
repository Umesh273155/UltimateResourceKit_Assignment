import React from 'react'
import './NavIcon.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import OutputIcon from '@mui/icons-material/Output';
function NavIcon() {
  return (
    <div className="navIcon_Main_container" >
     <div className="iconBox SearchIconBox">
     <SearchIcon className="icon SearchIcon"/>
     </div>
     <div  className="iconBox">
     <HomeIcon className="icon HomeIcon"/>
     </div>
     <div  className="iconBox">
     <AssessmentIcon className="icon AssessmentIcon"/>
     </div>
     <div  className="iconBox">
     <ListAltIcon className="icon ListAltIcon"/>
     </div>
     <div  className="iconBox">
     <AccountBoxIcon className="icon ListAltIcon"/>
     </div>


     <div className="nav_Footer_iconBox">
     
     <div  className="iconBox">
     <NotificationsNoneIcon  className="icon ListAltIcon"/>
     </div>
     <div  className="iconBox ">
    <OutputIcon  className="icon ListAltIcon"/>
     </div> 
    
     </div>
       
    </div>
  )
}

export default NavIcon

