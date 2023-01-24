import React, { useState } from "react"

export const BASE_URL="http://localhost:5000"


export const AuthContext = React.createContext({})

 export const AuthProvider = ({children}) => {
    const [token, setToken] = useState("")
   
    return (
        <AuthContext.Provider value={{ token, setToken}}>
            {children}
        </AuthContext.Provider>
    )
}
