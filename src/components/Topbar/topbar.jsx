import { Chat, Person, Search, Notifications } from "@mui/icons-material"
import PersonImg from "../../assets/person/1.jpeg"
import "./topbar.css"

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <h1 className="logo">WM CAPITAL</h1>
            </div>
            <div className="topbarCenter">
                <div className="searchBox">
                    <Search  className="searchIcon"/>
                    <input className="searchInput" type="text" placeholder="search user or video" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">HomePage</span>
                    <span className="topbarLink">TimeLine</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img className="topbarImg" src={PersonImg} alt="Profile person image" />
            </div>
        </div>
    )
}
