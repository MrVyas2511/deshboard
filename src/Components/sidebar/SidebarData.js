import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SchoolIcon from '@mui/icons-material/School'; 
import ReceiptIcon from '@mui/icons-material/Receipt'; 
import PaymentsIcon from '@mui/icons-material/Payments';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';



export const  SidebarData =[
    {
        title:"Dashboard",
        icon: <DashboardIcon/>,
        link: "/dashboard"    
    },

    {
        title:"Activity Points",
        icon: <PeopleAltIcon/>,
        link: "/activitypoints"    
    },

    {
        title:"Scholarship",
        icon: <SchoolIcon/>,
        link: "/scholarship"    
    },

    {
        title:"Result",
        icon: <ReceiptIcon/>,
        link: "/result"    
    },

    {
        title:"Payments/Fees",
        icon: <PaymentsIcon/>,
        link: "/payments"    
    },

    {
        title:"Settings",
        icon: <SettingsIcon/>,
        link: "/settings"    
    },

    {
        title:"About",
        icon: <InfoIcon/>,
        link: "/about"    
    },

    {
        title:"Log Out",
        icon: <LogoutIcon/>,
        link: "/logout"    
    },
]
 

