import React, { useState } from "react"

export const BASE_URL="http://localhost:5000"


export const AuthContext = React.createContext({})

 export default function AuthProvider ({children})  {
    const [token, setToken] = useState("token01")
    const [name, setName]= useState("fulano")
    



    return (
        <AuthContext.Provider value={{ token, setToken, name, setName}}>
            {children}
        </AuthContext.Provider>
    )
}
