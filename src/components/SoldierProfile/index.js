import Header from "../Header"
import Sidebar from "../Sidebar"
import "./index.css"

const SoldierProfile =()=>{
    console.log("kk")
    return <div  className="soldierpro">
        <Sidebar />
       <div className="soldierpro-card">
        <Header />
        <div className="soldierpro-card2">
        <img alt="soldier" src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038fcc5c0c4fc008966984e_soldier__pic.png"/>
        </div></div>
        </div>
}

export default SoldierProfile