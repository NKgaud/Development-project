import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';


function Login() {
    const redirect=useNavigate();
    const [formvalue,setFormvalue]=useState({
        email:"",
        password:"",
    })
    const changehandel=(e)=>{
        setFormvalue({...formvalue,[e.target.name]:e.target.value});
        console.log(formvalue);
    }
        const submithandle=async(e)=>{
            e.preventDefault();
            const res=await axios.get(`http://localhost:3000/customer?email=${formvalue.email}`);
         if (res.data.length>0)
          {
           if (res.data[0].password==formvalue.password) 
           {
            // if (res.data[0].status=="unblock") {
                localStorage.setItem('customer_id',res.data[0].id);
                localStorage.setItem('customer_name',res.data[0].name);
                toast.success('Login sucess !');
                setFormvalue({...formvalue,email:"",password:""});
                return redirect('/');
            }
            else
            {
                toast.error('Wrong password');
                setFormvalue({...formvalue,email:"",password:""});
            }
        }
            else
            {
                toast.error('username not found!');
                setFormvalue({...formvalue,email:"",password:""});
            }
        }
            // else{
            //     toast.error('username not found!');
            //     setFormvalue({...formvalue,email:"",password:""});
            // }
           
         

    return (
        <div className="container mt-3">
            <h2>Login form</h2>
            <form action="/action_page.php" method='get'>
                  <div className="mb-3 mt-3">
                    <label htmlFor="email">Email:</label>
                    <input type="email" value={formvalue.email} onChange={changehandel} className="form-control" id="email" placeholder="Enter email" name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" value={formvalue.password} onChange={changehandel} className="form-control" id="pwd" placeholder="Enter password" name="password" />
                </div>
                
               
                <button type="submit" onClick={submithandle} className="btn btn-primary">Login Now</button>
                <hr />
            {/* Not register ? <Link to="/Signup">click here </Link> or go to <a href="index.html">Home</a> */}
            </form>
        </div>

    )
}

export default Login