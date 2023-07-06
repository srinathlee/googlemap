import './index.css'

const Header =()=>{
   const toggle=()=>{
    let toggle_btn=document.querySelector(".toggle-btn")
    let drop_menue=document.querySelector(".drop-menue")
    let toggle=document.querySelector(".toggle-btn i")

        drop_menue.classList.toggle("open")
        let isopen=drop_menue.classList.contains("open")
        // toggle.childeren=isopen?"fas fa-times":"fa-solid fa-bars"

   }

    return(
 <header>
    <div class="navbar">
        <div className="logo"><a>logo</a></div>
        <ul className="links">
            <li className="link"><a href="home">home</a></li>
            <li className="link"><a href="contact">contact</a></li>
            <li className="link"><a href="about">about</a></li>
            <li className="link"><a href="services">services</a></li>
        </ul>
        <a href="#" className="get-action-btn">Add Pothole</a>
        <div onClick={toggle} class="toggle-btn">
            =
        </div>

    </div>
    <div className="drop-menue">
        <ul className="links">
            <li className="link"><a href="home">home</a></li>
            <li className="link"><a href="contact">contact</a></li>
            <li className="link"><a href="about">about</a></li>
            <li className="link"><a href="services">services</a></li>
            <li className="link"><a href="#" className="get-action-btn">Add Pothole</a></li>
        </ul>
    </div>
    </header>   
    )
}
export default Header