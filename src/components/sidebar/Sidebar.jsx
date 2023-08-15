import "./sidebar.scss"
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WebStoriesIcon from '@mui/icons-material/WebStories';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () =>{
    const {dispatch} = useContext(DarkModeContext);

    return (
        <div className='sidebar'>
            <div className="top">
                <Link to = "/" style={{textDecoration:"none"}}>
                <span className="logo">Nithushan</span>
                </Link>
                
            </div>
            <hr/>
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <AnalyticsIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <Link to = "/users" style={{textDecoration:"none"}}>

                    <li>
                        <PersonIcon className="icon"/>
                        <span>Users</span>
                    </li>
                    </Link>
                    <Link to = "/products" style={{textDecoration:"none"}}>
                    <li>
                        <InventoryIcon className="icon"/>
                        <span>Products</span>
                    </li>
                    </Link>
                    <li>
                        <MilitaryTechIcon className="icon"/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <AirportShuttleIcon className="icon"/>
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>

                    <li>
                        <QueryStatsIcon className="icon"/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsIcon className="icon"/>
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>

                    <li> 
                        <FavoriteIcon className="icon"/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <WebStoriesIcon className="icon"/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className="icon"/>
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>

                    <li>
                        <AccountCircleIcon className="icon"/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className="icon"/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" 
                onClick={()=> dispatch({type:"LIGHT"})}></div>
                <div className="colorOption" 
                onClick={()=> dispatch({type:"Dark"})}></div>
                

            </div>

        </div>
    )
}

export default Sidebar;