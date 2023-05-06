import React, { useContext } from 'react'
import './Sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {

  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className='sidebar'>
        <div className='top'>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <span className="logo">ReactAdmin</span>
            </Link>
        </div>
        <div className='center'>
            <ul>
                <p className="title">MAIN</p>
                <li><DashboardIcon className="icon" /><span>DASHBOARD</span></li>
                <p className="title">LISTS</p>
                <Link to="/users" style={{ textDecoration: 'none' }}>
                    <li>
                        <PersonOutlinedIcon className="icon" /><span>USERS</span>
                    </li>
                </Link>
                <Link to="/products" style={{ textDecoration: 'none' }}>
                    <li><ProductionQuantityLimitsIcon className="icon" /><span>PRODUCTS</span></li>
                </Link>
                <li><CreditCardIcon className="icon" /><span>ORDERS</span></li>
                <p className="title">USEFUL</p>
                <li><InsertChartIcon className="icon" /><span>STATS</span></li>
                <li><NotificationsNoneIcon className="icon" /><span>NOTIFICATIONS</span></li>
                <p className="title">SERVICE</p>
                <li><SettingsSystemDaydreamOutlinedIcon className="icon" /><span>SYSTEM HEALTH</span></li>
                <li><PsychologyOutlinedIcon className="icon" /><span>LOGS</span></li>
                <li><SettingsApplicationsIcon className="icon" /><span>SETTINGS</span></li>
                <p className="title">USER</p>
                <li><AccountCircleOutlinedIcon className="icon" /><span>PROFILE</span></li>
                <li><ExitToAppIcon className="icon" /><span>LOGOUT</span></li>
            </ul>
        </div>
        <div className='bottom'>
            <div className="color-option" onClick={() => dispatch({ type: 'LIGHT'})}></div>
            <div className="color-option" onClick={() => dispatch({ type: 'DARK'})}></div>
        </div>
    </div>
  )
}

export default Sidebar
