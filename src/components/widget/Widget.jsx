import "./widget.scss";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonitorIcon from '@mui/icons-material/Monitor';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Widget = ({type})=>{
    let data;

    const amount = 100;
    const diff = 20;

        switch(type){
            case "user":
                data={
                    title:"USERS",
                    isMoney:false,
                    link:"See all users",
                    icon: <AccountCircleIcon className="icon" style={{color:"crimson", backgroundColor :"rgba(255,0,0,0.2)"}}/>
                };
                break;
            case "order":
                data={
                    title:"ORDERS",
                    isMoney:false,
                    link:"See all orders",
                    icon: <ShoppingCartIcon className="icon" style={{backgroundColor: "rgba(218, 165,32,0.2)", color:"goldenrod"}}/>
                };
                break;
            case "earning":
                data={
                    title:"EARNINGS",
                    isMoney:true,
                    link:"See details",
                    icon: <MonitorIcon className="icon" style={{backgrounColor:"rgba(0, 100, 0, 0.2)", color:"green"}}/>
                };
                break;
            case "balance":
                data={
                    title:"Balance",
                    isMoney:true,
                    link:"View all users",
                    icon: <AccountBalanceWalletIcon className="icon" style={{backgroundColor:"rgba(128,0,128,0.2)", color:"purple",}}/>
                };
                break;
            default:
                    break;
        }
    return(
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"}</span>
                <span className="link">{data.link}</span>

            </div>
            <div className="right">
                <div className="percentage positive"><ArrowUpwardIcon/> {diff}</div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget