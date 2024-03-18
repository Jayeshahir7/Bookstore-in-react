import { useEffect,useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
const apiUrl="http://localhost:1000/bs";

function Get_id(){
    const[data,setDate]=useState([]);
    const{id}=useParams();
    const navigate=useNavigate();
    
    useEffect(()=>{
        fetch(apiUrl+"/"+id).then((res)=>{return res.json();}).then((res)=>{setDate(res)})
    },[]);
    return(<>
     <div className="container mt-3 border border-3 border-success-subtle rounded">
        <div className="row ">
          <div className="col-4 m-2 mb-5">
            <img src={data.Bookimg} width={350} height={400} className="img ms-2" />
          </div>
          <div className="col">
            <table class="table" >
              <tr>
                <td>
                  <h1 className="h1 mt-4 text-primary ">BookID :-  {data.BookID}</h1>
                  <h3 className="p1 text-danger">Title :- {data.Title}</h3>
                  <h3 className="p1 text-danger ">Price :- {'₹ '+data.Price}</h3>
                  <h3 className="p1 text-danger">Author :- {data.Author}</h3>
                  <h3 className="p1 text-danger">Genre :- {data.Genre}</h3>
                  <button
                    className="btn btn-secondary btn-lg m-3  border border-2 border-secondary"
                    onClick={() => {
                      navigate('/bs');
                    }}
                  >
                    Back
                  </button>
                  <button
                    className="btn btn-warning btn-lg border border-2 border-warning   m-3"
                    onClick={() => {
                      navigate("/bs/edit/" + id);
                    }}
                  >
                    Edit 
                  </button>
                  <button
                    className="btn btn-danger m-3  btn-lg border border-2 border-danger"
                    onClick={() => {
                      fetch(apiUrl + "/" + id, {
                        method: "DELETE",
                      })
                        .then((res) => {
                          return res.json();
                        })
                        .then((res) => {
                          console.log(res);
                          navigate("/bs");
                        });
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>)
}
export default Get_id;