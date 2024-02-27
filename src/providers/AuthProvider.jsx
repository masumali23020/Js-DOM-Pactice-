import React, { useState } from 'react'
import { AuthContext } from "../context/index"

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({})
   
  return (
    <AuthContext.Provider value={{auth, setAuth}}>
        {children}
      
    </AuthContext.Provider>
  )
}

export default AuthProvider
