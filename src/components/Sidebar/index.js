import "./index.css"

const Sidebar=()=>{
    console.log("side")
    return <nav className="sidebar">
        <ul className="side-ul"><li className="side-li">
            <img alt="soldier" src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafac57edde91d49b301f_side-menu__game-1.png" />
        </li>
        <li>
            <p>help</p>
            <p>Quit</p></li></ul>
    </nav>
}

export default Sidebar