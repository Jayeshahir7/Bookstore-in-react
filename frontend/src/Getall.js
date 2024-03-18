import { useEffect,useState } from "react";
import{Link} from "react-router-dom";
const apiurl="http://localhost:1000/bs"

function Get_all(){
const[data,setDate]=useState([]);
useEffect(()=>{
    fetch(apiurl).then((res)=>{return res.json();}).then((res)=>{setDate(res);});
},[]);

const datas= data.map((bookitem)=>{
    return(
        <>
        <div class="card col-2 g-1  m-3 border border-2 border-danger">
          <img src={bookitem.Bookimg} class="card-img-top" alt="..." height={200} />
          <div class="card-body">
            <h5 class="card-title text-center text-secondary mt-1   ">{bookitem.Title}</h5>
            <h5 class="card-title text-center text-danger mt-1 ">{'₹ '+bookitem.Price}</h5>
            
           <div className="text-center">
            <Link
              to={"/bs/" + bookitem.BookID}
              type="button"
              class="btn btn-outline-dark  mt-2"
            >
              View Detail
            </Link>
            </div>
          </div>
        </div>
      </>  
    );
});
return (
    <>
        <h1 className="text-center text-secondary">All BOOKS</h1>
      <div className="container">
        <div className="row">{datas}</div>
      </div>
    </>
  );
}
export default Get_all;