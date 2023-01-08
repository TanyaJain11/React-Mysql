import React ,{useState,useEffect} from 'react'
import {Navigate, useNavigate,useParams} from "react-router-dom"
import { Link } from 'react-router-dom';
import "./Home.css";
import { ToastContainer ,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const initialState={
  task:"",
}

const Edit = () => {
  useEffect(() => {
    document.title = "MyToDo";
  }, []);
  const {id}=useParams();
  const [data,setData] = useState("")
  const [state,setState]=useState(initialState);
  const [value,setValue]=useState("");
  // const {task}=state;
  const history = useNavigate()
 
    const[listData,setListData] = useState([]);
    const handleSubmit=(e)=>{
        console.log(id);
        console.log({data});
        e.preventDefault();
        if(!data){
          toast.error("please provide task")
        }else{
          axios.patch(`http://localhost:5000/api/items/${id}`,{
            data
          }).then(()=>{
            toast.success("Your Task edit successfully");
            setState({data:""});
          }).catch((err)=>{
            console.log(err.response);
          });
          setTimeout(function(){
            history("/");
         }, 3000);
  
          
         
        }
      };

    console.log(data);
    const getDataById = async ()=>{
      const response = await axios.get(`http://localhost:5000/api/items/${id}`);
      setListData(response.data)
    }

    useEffect(()=>{
        getDataById();
    },[]);

  return (
    <>
    <Header/>  
    <section className="todo-outer">
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-sm-12 col-md-8">
          <h1 className='text-white' >Update Your Task</h1>
          <div className="todo-inner glassmorphism">
            <form className="form-row row" onSubmit={handleSubmit}>
              <div className="col-6 m-0">
                
                <label htmlFor='task'></label>
                <input type="text"  placeholder="Enter task to update" onChange={(e)=>setData(e.target.value)} value={data}/>
                <input type="submit" className="ps-2 text-white border border-primary" style={{backgroundColor:"#134ea7"}}/>
              </div>
            </form>
            <div className="to-do-output">
              <table className="table table-striped mt-3 mb-0" id="addedtasklist">
        <thead>
          <tr>
            <th className='fs-4'>
              Task To Update
            </th>
          </tr>
        </thead>
        <tbody>
          {listData.map((item,index)=>{
            return(
              <>
              <tr key={item.id}>
                  <td className='fw-bold'>{item.data}</td>
                  <td>
                  </td>
              </tr>
             
            </>
            )
          })}
          </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Edit;
