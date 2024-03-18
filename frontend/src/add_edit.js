import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const apiUrl="http://localhost:1000/bs";
function Add_Edit(){
    const{id}=useParams();
    const[data,setData]=useState({});
    const navigate=useNavigate();
    
    useEffect(()=>{
        if(id!==undefined){
            fetch(apiUrl+"/"+id)
            .then((res)=>res.json())
            .then((res)=>setData(res));
        }
    },[]);

    return(
        <>
        <div className="container mt-5">
        <input type="text" placeholder="Enter BookID" className=" form-control border border-success border border-3"
        value={data.BookID} onChange={(e)=>{setData({...data,BookID:e.target.value});}}>
        </input>
        <br /> 

        <input type="text" placeholder="Enter Image-path" className=" form-control border border-success border border-3"
        value={data.Bookimg} onChange={(e)=>{setData({...data,Bookimg:e.target.value});
        }}></input>
        <br />

        <input type="text" placeholder="Enter Title" className=" form-control border border-success border border-3"
        value={data.Title} onChange={(e)=>{setData({...data,Title:e.target.value});
        }}></input>
        <br />

        <input type="text" placeholder="Enter Author" className=" form-control border border-success border border-3"
        value={data.Author} onChange={(e)=>{setData({...data,Author:e.target.value});
        }}></input>
        <br />

        <input type="text" placeholder="Enter Genre"  className=" form-control border border-success border border-3"
        value={data.Genre} onChange={(e)=>{setData({...data,Genre:e.target.value});
        }}></input>
        <br />

        <input type="Number" placeholder="Enter Price" className=" form-control border border-success border border-3"
        value={data.Price} onChange={(e)=>{setData({...data,Price:e.target.value});
        }}></input>
        <br/>
        <div class="d-grid gap-2 col-6 mx-auto"> 
        {id === undefined &&(<button className="btn btn-primary" onClick={()=>{
            fetch(apiUrl,{
                method:"POST",body:JSON.stringify(data),
            headers :{
                "Content-Type":"application/json",
            },}).then(()=>{navigate("/bs")});
        }}>Add</button>)}</div>
        
        <div class="d-grid gap-2 col-6 mx-auto"> 
        {id !== undefined &&(<button className="btn btn-warning " onClick={()=>{
            fetch(apiUrl+"/"+id,{
                method:"PUT",body:JSON.stringify(data),
            headers :{ 
                "Content-Type":"application/json"
            },})
            .then((res)=>{
                return res.json();
            })
            .then(()=>{navigate("/bs")});    
        }}>Edit</button>)}</div>
        
        </div>
        </>
    )
}
export default Add_Edit;