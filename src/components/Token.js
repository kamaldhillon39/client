import React from 'react'
import { InputFeild } from "./styled/Inputdiv_styles";
import Cookies from 'js-cookie'



export const Token = () => {





  return (
      <InputFeild className='token'>
      
      <label className="head">Token Number</label><br/>
               {/* <input className="data" type="password"  placeholder="New token"/> */}

               <h1>{Cookies.get("authtoken")} </h1>
      
      </InputFeild>
  
  )
}

