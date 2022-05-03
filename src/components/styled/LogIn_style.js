import styled from "styled-components"

export const StyledLogIn=styled.header`
background-color: ${(props)=>props.bg};
margin: 150px 400px 400px 400px;
height:400px;
${'' /* border:4px solid #479FCF;
border-radius:10px; */}

`
export const Heading=styled.header`
background-color: ${(props)=>props.bg};
padding:10px 5px;
color:#fff;
text-align:center;
font-size:150%;
font-family: Arial, Helvetica, sans-serif;
font-weight: bold;

`
export const Nav=styled.nav`
height:80px;
background-color:#0047ab;
`
export const Logo=styled.img`
height:70px;
width:150px;
margin-left:45%;
`