import React, { useState } from 'react'
import { AuthContext } from "../context/index"

const AuthProvider = ({children}) => {
    const [auth, setAut] = useState({})
   
  return (
    <AuthContext.Provider value={{auth, setAut}}>
        {children}
      
    </AuthContext.Provider>
  )
}

export default AuthProvider
