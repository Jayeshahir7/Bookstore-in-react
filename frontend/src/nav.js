import { Link } from "react-router-dom";
function Nav(){
    return(
        <>
        <div className="contanier ">
        <nav className="navbar bg-dark ">
     
            <div className="col-9">
            <h1 className="text-white ms-3">BookStore</h1>
            </div>
            <div className="mx-2">
            <Link className="btn btn-success mx-2" to="/bs/add">Add a Book
            </Link>
            <Link className="btn btn-success" to="/bs">All Book
            </Link>
            </div>
     
        </nav>
        <div className="col">
        <img src="https://images.pexels.com/photos/256559/pexels-photo-256559.jpeg?auto=compress&cs=tinysrgb&w=600" width={1460} height={610} alt="..." />
        </div>
        </div>
        </>
    )
}
export default Nav;