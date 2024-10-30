import { Link } from "react-router-dom"

const Navbar = () => {
    return <div className="flex gap-8 justify-center">
    <Link to={"/"} className="p-2 hover:bg-slate-400">Home</Link>
    <Link to={"/about"} className="p-2 hover:bg-slate-400">About</Link>
    <Link to={"/contact"} className="p-2 hover:bg-slate-400">Contact</Link>
    </div>  
}

export default Navbar