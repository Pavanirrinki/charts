import React,{useState} from 'react';
import { GoogleOAuthProvider,GoogleLogin } from '@react-oauth/google';
import { Link } from 'react-router-dom';


function Signin() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    function Signin(e){
        e.preventDefault()
        console.log(email,password);
        setEmail('');
        setPassword('');
    }
  return (
    <div className='signin-card' >
        <div style={{display:"flex",flexDirection:"row",justifyContent:"around"}}>
     <div style={{backgroundColor:"black",width:"30%",height:"400px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
      <Link to='/dasnboard' style={{textDecoration:"none"}}>
<p style={{color:"white",textAlign:"center"}}><b>Board.</b></p>
</Link>
     </div>
     <div style={{marginLeft:"20%",width:"100%"}}>
     <h3> Sign In</h3>
     <span>Sign in to your account</span> <br />
     <GoogleOAuthProvider clientId="824219202583-m568eg6f0gd7v902mv43t4i0h98ghm1j.apps.googleusercontent.com">
  <div
    style={{
      width: '50%',
      marginBottom: '20px',
    marginTop:"10px"
}}
  >
    <GoogleLogin
      onSuccess={credentialResponse => {
        console.log(credentialResponse);
       
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  </div>
</GoogleOAuthProvider>

 <div style={{backgroundColor:"white",width:"80%",borderRadius:"5px"}}>
<span style={{marginLeft:"10px"}}>Email Address:</span><br />
<input type="email" style={{width:"80%",backgroundColor:"#e6e6e6",
border:"none",borderRadius:"5px",
marginLeft:"10px",
marginBottom:"20px"}}
value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
<span style={{marginLeft:"10px"}}>password:</span><br />
<input type="password" style={{width:"80%",
backgroundColor:"#e6e6e6",
border:"none",
borderRadius:"5px",
marginLeft:"10px"}} 
value={password} onChange={(e)=>setPassword(e.target.value)}/><br />
<p style={{fontSize:"10px",marginLeft:"10px",color:"blue"}}>Forgot password?</p>

<button style={{width:"80%",marginBottom:"20px",marginLeft:"10px",backgroundColor:"black",color:"white",borderRadius:"5px"}} onClick={Signin}>Sign In</button>

 </div>
 <p style={{marginTop:"0px"}}>Don't have an account?<span style={{color:"blue"}}>Register here</span></p> 
     </div>

    </div>
   
    </div>
  )
}

export default Signin
