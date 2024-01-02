import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
function Signup() {

    const [formvalue,setFormvalue]=useState({
        id:"",
        name:"",
        email:"",
        password:"",
        mobile:"",
        status:"",
        img:""
       
        
    })

     const changehandel=(e)=>{
           setFormvalue({...formvalue,id:new Date().getTime().toString(),status:"unblock",[e.target.name]:e.target.value})
           console.log(formvalue);
     }
     const submithandle=async(e)=>{
        e.preventDefault();
        const res=await axios.post('http://localhost:3000/customer',formvalue);
     if (res.status==201) {
        toast.success('Resister Sucess !');
        setFormvalue({...formvalue,name:"",email:"",password:"",mobile:"",status:"",img:""});
     }
     }
     
     return (
        <div className="container mt-3">
            <h2>Signup form</h2>
            <form action="/action_page.php">
                <div className="mb-3 mt-3">
                    <label htmlFor="text">Name:</label>
                    <input type="text" value={formvalue.name} onChange={changehandel} className="form-control" id="name" placeholder="Enter name" name="name" />
                </div>
               
                <div className="mb-3 mt-3">
                    <label htmlFor="email">Email:</label>
                    <input type="email" value={formvalue.email} onChange={changehandel} className="form-control" id="email" placeholder="Enter email" name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" value={formvalue.password} onChange={changehandel} className="form-control" id="pwd" placeholder="Enter password" name="password" />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="mobile">Mobile:</label>
                    <input type="number" value={formvalue.mobile} onChange={changehandel} className="form-control" id="pwd" placeholder="Enter Number" name="mobile" />
                </div>
                
                <div className="mb-3">
                    <label htmlFor="Image">Image:</label>
                    <input type="url" value={formvalue.img} height="100" onChange={changehandel} className="form-control" id="Image" placeholder="Enter image url" name="img" />
                    {/* <img src={formvalue.Image} alt="" /> */}
                </div>
                
                <button type="submit" onClick={submithandle} className="btn btn-primary">Submit</button> 
                <Link to="/login" className='float-right' > if you are resistered then login here</Link> 
            </form>
        </div>

    )
     }

export default Signup