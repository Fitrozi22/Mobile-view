import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";

const FormRegister = () => {
    return (
        <form action="">
            <InputForm 
              label="Fullname" 
              type="text" 
              placeholder="Insert your name here" 
              name="Fullname" 
            />
            <InputForm 
              label="Email" 
              type="email" 
              placeholder="Email@example.com" 
              name="email" 
            />
            <InputForm 
              label="Password" 
              type="password" 
              placeholder="*******" 
              name="password" 
            />
            <InputForm 
              label="Confirm Password" 
              type="password" 
              placeholder="*******" 
              name="Comfirm Password" 
            />  
            <Button classname="bg-blue-600 w-full ">Register</Button>
          </form>
    )
}

export default FormRegister

//3. Merender beberapa input form, dan input formnya ada di folder elemente