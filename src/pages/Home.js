import React ,{useState,useEffect} from 'react'
import {Navigate, useNavigate,useParams} from "react-router-dom"
import { Link } from 'react-router-dom';
import "./Home.css";
// import {toast} from "react-toastify";
import { ToastContainer ,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const Home = () => {
  useEffect(() => {
    document.title = "MyToDo";
  }, []);
  const [data,setData] = useState("")
  const history = useNavigate()

    const[listData,setListData] = useState([]);
    const loadData = async () => {
      console.log(listData);
        const response = await axios.get("http://localhost:5000/api/items");
        setListData(response.data);
    };

    const handleSubmit=(e)=>{
      console.log({data});
      e.preventDefault();
      if(!data){
        toast.error("please provide task")
      }else{
        axios.post("http://localhost:5000/api/post",{
          data
        }).then(()=>{
          toast.success("Your Task save successfully");
          // window.location.reload(false);
          // setState({data:""});
        }).catch((err)=>{
          console.log(err.response.data);
        });

        setTimeout(function(){
          window.location.reload();
       }, 3000);
       
      }
    };

    const deleteData = async (id)=>{
      console.log("eee");
      const response = await axios.delete(`http://localhost:5000/api/items/${id}`);
      toast.success("Your Task delete successfully");
      setTimeout(function(){
        window.location.reload();
     }, 3000);
    };
    useEffect(()=>{
        loadData();
    },[]);

  return (
    <>
    <Header/>
    
    <section className="todo-outer">
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-sm-12 col-md-8">
          <h1 className='text-white'>Schedule Your Daily Plan Here</h1>
          <div className="todo-inner glassmorphism">
            <form className="form-row row" onSubmit={handleSubmit}>
              <div className="col-6 m-0">
                
                <label htmlFor='task'></label>
                <input type="text"  placeholder="Enter your task" onChange={(e)=>setData(e.target.value)} value={data}/>
                <input type="submit"  palceholder="add" className="ps-2 text-white border border-primary" style={{backgroundColor:"#134ea7"}}/>
              </div>
            </form>
            <div className="to-do-output">
              <table className="table table-striped mt-3 mb-0" id="addedtasklist">
        <thead>
          <tr>
            <th>
              No.
            </th>
            <th>
              Task
            </th>
          </tr>
        </thead>
        <tbody>
          {listData.map((item,index)=>{
            return(
              <>
              <tr key={item.id}>
                  <th scope="row">{index+1}</th>
                  <td className="fw-bold">{item.data}</td>
                  <td>
                <Button onClick={()=>deleteData(item.id)} className="btn btn-delete" style={{backgroundColor:"#134ea7"}}>Delete</Button>
                   <Link to={`/Edit/${item.id}`}>
                     <Button className="btn btn-delete ms-1" style={{backgroundColor:"#134ea7"}}>update</Button>
                    </Link>
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

export default Home;
