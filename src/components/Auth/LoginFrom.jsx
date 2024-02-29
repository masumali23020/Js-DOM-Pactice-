import axios from 'axios';

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth';
import Field from './Field';

const LoginFrom = () => {
  const {register,handleSubmit,formState: {errors}, setError} = useForm();
  const navigate = useNavigate()
  const {setAuth} = useAuth()

  const submitForm =async (formData) => {
    console.log("therewas an eroor")

    try {
      const response =await axios.post(`${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`, formData)

      if(response.status === 200){
        const {token, user} = response.data;
        if(token){
          const authToken = token.token;
          const refreshToken = token.refreshToken

          console.log(`login time auth token ${authToken}`)
          setAuth({user, authToken, refreshToken})
          navigate("/")
        }
        
         
      }
      
    } catch (error) {
      console.log(error);
      setError("root.random", {
        type: "random",
        message: `User with email ${formData.email} is not found `
      })
      
    }
   
   
   
  }
  return (
    <div>
         <form className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]" onSubmit={handleSubmit(submitForm)}>
          <Field error={errors.email} >
            <input
            {...register("email", {required: "Email Id is Requried"})}
            type='email'
            name='email'
            id="email"
            className={`auth-input ${ !errors.email ? "border-green-500" : "border-red-500"}`}
            />
          </Field>
          
          <Field error={errors.password}  >
            <input
            {...register("password", {required: "Password Id is Requried",
          minLength:{
            value:8,
            message: "Your password msut be at 8 charcter"
          }})}
            type='password'
            name='password'
            id="password"
            className={`auth-input ${ !errors.password ? "border-green-500" : "border-red-500"}`}
          
            />
          </Field>
          {errors?.root?.random?.message}
          <Field>
          <button
            className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
            type="submit"
          >
            Login
          </button>

          </Field>
          
          
          
      
        </form>
    </div>
  )
}

export default LoginFrom
