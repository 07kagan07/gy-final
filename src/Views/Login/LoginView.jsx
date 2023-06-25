import Login from "../../components/Login/Login"
import loginImg from "../../assets/login.png"

const LoginView = () => {
  return (
    <div className="row justify-content-between align-items-center">
      
     <div className="col-6">
     <div className=" rounded-3 border-primary p-3">
       <h2 className="text-center">Login</h2>
         <Login/>
     </div>
       </div>
     <div className="col-5 "> 
     <img className="img-fluid rounded-3" src={loginImg} alt="" />
     </div>
    </div>
  )
}

export default LoginView