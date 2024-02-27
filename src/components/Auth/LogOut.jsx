import React from 'react'
import { useNavigate } from 'react-router-dom'
import logout from "../../assets/icons/logout.svg"
import { useAuth } from '../../hooks/useAuth'

const LogOut = () => {
    const navigate = useNavigate()
    const {setAuth} = useAuth()
    const handelLogout = () => {
        setAuth({})
        navigate("/login")
    }
  return (
    <button className="icon-btn" onClick={handelLogout}>
    <img src={logout} alt="Logout" />
  </button>
  )
}

export default LogOut
