import bannerBG from "../assets/more/15.jpg"
import logo from "../assets/more/logo1.png"

const NavBar = () => {
    return (
        <div className={`flex justify-center items-center gap-4 py-5 bg-[url(${bannerBG})]`} >
            <img src={logo} alt="" className="w-10" />
            <h1>Espresso Emporium</h1>
        </div>
    );
};

export default NavBar;