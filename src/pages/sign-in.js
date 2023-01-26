import { Link,useNavigate } from "react-router-dom"
import styled from "styled-components"
import mywallet from "../images/MyWallet.png"
import React, { useState } from "react"
import axios from "axios"
import { BASE_URL } from "../constants/data"
import { AuthContext } from "../constants/data"


export default function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate= useNavigate()
    const { setToken, setName } = React.useContext(AuthContext)


    function signInRequest(e){
        e.preventDefault()
        axios.post(`${BASE_URL}/sign-in`, {email:email, password:password})
            .then((res)=>{
                navigate("/home")
                console.log(res.data.token)
                console.log(res.data.name)
             setName(res.data.name) 
            setToken(res.data.token)
            
        })
            .catch((err)=> console.log(err))
    }
    
    return (
        <>
            <Stylesignin>

                <img src={mywallet} />
                <form onSubmit={signInRequest} >
                    <input type="email" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button >
                        Entrar
                    </button>
                </form>


                <Link to={"/cadastro"}>
                    <p>primera vez? Cadastre-se!</p>
                </Link>

            </Stylesignin>


        </>
    )
}

const Stylesignin = styled.div`
   width: 90%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
img{
    
    width: 60%;
    height: auto;
    margin-top: 40px;
    margin-bottom: 20px;
}
form{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
 input{
    width: 80%;
    height: 45px;
    border-radius: 5px;
    font-size: 18px;
    margin-bottom: 10px;
}
button{
    width: 80%;
    height: 45px;
    border-radius: 5px;
    font-size: 18px;
    background-color: #A328D6;
    margin-bottom: 15px;
    color: white;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
}
p{
    font-size: 23px;
    color: white;
}

`