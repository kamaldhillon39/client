import React, {useState} from 'react'
import { InputFeild } from "./styled/Inputdiv_styles";
// import { Link } from 'react-router-dom';
import Cookies from 'js-cookie'

import { StyledLogIn,Heading,Nav,Logo } from './styled/LogIn_style'




export const SignUp = () => {
    const [credentials, setCredentials] = useState({email:"", password:""})

    const handleSubmit = async (e) =>{
        e.preventDefault();
   
        const response = await fetch("http://localhost:3004/api/v1/auth/signup", {
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

              alert("Created Successfully")

          }
          else{
              alert("Enter valid data")
          }

    }

    const onChange = (e) =>{
        setCredentials({...credentials, [e.target.name]: e.target.value})

    }



  return (
    <div className='sign-up'>
    <Nav>
           <Logo src='./images/logo.png' alt=''/>
          
       </Nav>
   <StyledLogIn bg='#fff'>

       <form onSubmit={handleSubmit}>
      
            <Heading bg='#479FCF'>
                CREATE YOUR NEW EMAIL AND PASSWORD!
            </Heading>
            <InputFeild>
           <div><br/>
               <label className="head" htmlFor='email'>Email Address</label><br/>
               
          <input type="text" className="data" value={credentials.email} onChange={onChange}  name="email" id="email" />

           </div>

           <div>
           <br/>
               <label className="head" htmlFor='password'>Password</label><br/>
              
  <input type="password" className="data" value={credentials.password} onChange={onChange} name="password" id="password"/>

           </div>
           <button className="btn" type="submit" >SUBMIT</button><br/>
           
           

           
           </InputFeild>
       </form>
      

</StyledLogIn>
   </div>
  
  )
}
