import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StyledLogIn,Heading,Nav,Logo } from './styled/LogIn_style'
import { InputFeild } from "./styled/Inputdiv_styles";
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';


const LogIn = () => {
    const [credentials, setCredentials] = useState({email:"", password:""})
    // let history = useHistory();
    // const [email,setEmail]=useState("");
    // const [password,setPassword]=useState("");


    let navigate = useNavigate();

    // const [allEntry, setAllEntry]=useState([]);

    const handleSubmit = async (e) =>{
        e.preventDefault();
   
        const response = await fetch("http://localhost:3004/api/v1/auth/login", {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            //   'usertoken': Cookies.get("authtoken"),
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password}) 
          });
          const json = await response.json()
          console.log(json)
          if (json.success){
              // save 
             //localStorage.setItem('authtoken', json.authtoken)
              Cookies.set('authtoken', json.authtoken, { expires: 7 })
              Cookies.set('email', credentials.email, { expires: 7 })
              setCredentials({email: '', password: ''})
            //   navigate("/token");


          }
          else{
              alert("Please enter correct email and password")
          }

    }

    const onChange = (e) =>{
        setCredentials({...credentials, [e.target.name]: e.target.value})

    }
      

  return (
      <>
    <Nav>
           <Logo src='./images/logo.png' alt=''/>
          
       </Nav>
   <StyledLogIn bg='#fff'>

       <form onSubmit={handleSubmit}>
      
            <Heading bg='#479FCF'>
                WELCOME TO MY REDVEST SUPPORT PORTAL!
            </Heading>
            <InputFeild>
           <div><br/>
               <label className="head" htmlFor='email'>Email Address</label><br/>
               {/* <input className="data" type="text" name="email" id="email"  placeholder="Enter your email address" autoComplete="off"
                   value={email} onChange={(e)=>setEmail(e.target.value)}
               /> */}
          <input type="text" className="data" value={credentials.email} onChange={onChange}  name="email" id="email" />

           </div>

           <div>
           <br/>
               <label className="head" htmlFor='password'>Password</label><br/>
               {/* <input className="data" type="password" name="password"  placeholder="Enter your password" id="password" autoComplete="off"
                   value={password} onChange={(e)=>setPassword(e.target.value)}
               /> */}
  <input type="password" className="data" value={credentials.password} onChange={onChange} name="password" id="password"/>

           </div>
           <button className="btn" type="submit" >Login</button><br/>
           <Link to="/sign-up" className="btn" type="submit" >SignUp</Link>
           {/* <Link to={"/Token"}>token</Link> */}

           {/* <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} name="email" id="email" aria-describedby="emailHelp"/>
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password"/>
                </div>
            
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form> */}


           
           </InputFeild>
       </form>
       {/* <div>
              {
                  allEntry.map((CurElem)=>{

                      return(<div>
                        <p>{CurElem.email}</p>
                          <p>{CurElem.password}</p>
                      )
                      </div>

                      )
                  })


              }

       </div> */}

</StyledLogIn>
   </>
  )
}

export default LogIn;