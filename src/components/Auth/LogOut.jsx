import React from 'react'
import { useNavigate } from 'react-router-dom'
import logout from "../../assets/icons/logout.svg"

const LogOut = () => {
    const navigate = useNavigate()
    const handelLogout = () => {
        navigate("/login")
    }
  return (
    <button className="icon-btn" onClick={handelLogout}>
    <img src={logout} alt="Logout" />
  </button>
  )
}

export default LogOut
