import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";
import{ useRef, useEffect, useState} from "react";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState('');
  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem('email', event.target.email.value);
    // localStorage.setItem('password', event.target.password.value);
    // //redirect ke halaman products
    // window.location.href = '/products';
    const data = {
      username: event.target.username.value,
      password: event.target.password.value
    };
    login(data, (status, res) => {
      if(status) {
        localStorage.setItem('token', res);
        window.location.href = '/promo';
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };
  const usernameRef = useRef(null)

  // const emailRef = useRef()
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

    return (
        <form onSubmit={handleLogin}>
          
            <InputForm 
              label="Username" 
              type="text" 
              placeholder="Jhon Doe" 
              name="username" 
              ref={usernameRef}
            />
            <InputForm 
              label="Password" 
              type="password" 
              placeholder="*******" 
              name="password" 
            /> 
            <Button classname="bg-blue-600 w-full " type="submit">Login</Button>
            {loginFailed && <p className="text-red-600 mt-5">{loginFailed}</p>}
          </form>
    )
}

export default FormLogin


//EvenHandler
// event.preventDefault() digunakan agar saat mengklick halaman tidak melakukan refresh
//console.log(event.target.email.value); untuk menangkap email value saat di klik langsung muncul