import { Person } from "@mui/icons-material"
import Topbar from "../../components/Topbar/topbar.jsx"
import "./home.style.css"
import Feed from "../../components/feed/Feed.jsx"
import RightBar from "../../components/rightbar/RightBar.jsx"
import Sidebar from "../../components/sidebar/Sidebar.jsx"

export default function Home() {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <Sidebar />
                <Feed />
                <RightBar />
            </div>
        </>
    )
}