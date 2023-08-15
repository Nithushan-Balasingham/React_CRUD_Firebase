import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ListIcon from '@mui/icons-material/List';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () =>{
    const {dispatch} = useContext(DarkModeContext);

    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">
                    <input type = "text" placeholder="Search..."/>
                    <SearchIcon/>
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageIcon className="icon"/>
                        English
                    </div>
                    <div className="item">
                        <DarkModeIcon className="icon1" onClick={()=>dispatch({type:"TOGGLE"})}/>
                    </div>
                    <div className="item">
                        <FullscreenIcon className="icon"/>
                    </div>
                    <div className="item">
                        <NotInterestedIcon className="icon"/>
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleIcon className="icon"/>
                        <div className="counter">2</div>

                    </div>
                    <div className="item">
                        <ListIcon className="icon"/>
                    </div>
                    <div className="item">
                        <AccountCircleIcon className="avatar"/>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar;