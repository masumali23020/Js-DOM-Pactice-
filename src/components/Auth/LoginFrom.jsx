import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Field from './Field';

const LoginFrom = () => {
  const {register,handleSubmit,formState: {errors}} = useForm();
  const navigate = useNavigate()

  const submitForm = (formData) => {
    console.log(formData);
    navigate("/")
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
