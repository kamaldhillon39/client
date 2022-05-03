import React, { useState } from "react";
import { Link, Routes } from "react-router-dom";
import { StyledLogIn,Heading,Nav,Logo } from './styled/LogIn_style'
import { InputFeild } from "./styled/Inputdiv_styles";


const LogIn = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");



    const [allEntry, setAllEntry]=useState([]);
    const submitForm=(e)=>{
       e.preventDefault();

           const newEntry={email:email, password:password};
           setAllEntry([...allEntry,newEntry]);
    }

  return (
      <>
    <Nav>
           <Logo src='./images/logo.png' alt=''/>
          
       </Nav>
   <StyledLogIn bg='#fff'>

       <form action="" onSubmit={submitForm}>
      
            <Heading bg='#479FCF'>
                WELCOME TO MY REDVEST SUPPORT PORTAL!
            </Heading>
            <InputFeild>
           <div><br/>
               <label className="head" htmlFor='email'>Email Address</label><br/>
               <input className="data" type="text" name="email" id="email"  placeholder="Enter your email address" autoComplete="off"
                   value={email} onChange={(e)=>setEmail(e.target.value)}
               />
           </div>

           <div>
           <br/>
               <label className="head" htmlFor='password'>Password</label><br/>
               <input className="data" type="password" name="password"  placeholder="Enter your password" id="password" autoComplete="off"
                   value={password} onChange={(e)=>setPassword(e.target.value)}
               />
           </div>

           <Link to={"/Token"}><button className="btn" type="submit">Login</button></Link>
           
           </InputFeild>
       </form>
       <div>
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

       </div>

</StyledLogIn>
   </>
  )
}

export default LogIn;