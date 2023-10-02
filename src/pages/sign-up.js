import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import styled from "styled-components"
import MyWallet from "../images/MyWallet.png"
import axios from "axios"
import { BASE_URL } from "../constants/data"

export default function SignUp() {

    const [name, SetName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPsswd, setConfirmPsswd] = useState("")
    const navigate=useNavigate()

    function creatingAccount(e){
        e.preventDefault()
        if(password !== confirmPsswd){
            return alert("A senha e a confirmação estão divergindo! coloque as senhas")
        }
        axios.post(`${BASE_URL}/sign-up`,{name:name, email:email, password:password})
            .then((res)=>{console.log(res.data)
            navigate("/")})
            .catch((err)=> console.log(err.response.data))
    }   


    return ( 
        <>
            <StyleSignUp>
                <img src={MyWallet} alt="img"/>
                <form onSubmit={creatingAccount}>
                    <input type="text" placeholder="nome" value={name} onChange={(e)=> SetName(e.target.value)} required/>
                    <input type="email" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)} required />
                    <input type="password" placeholder="senha" value={password} onChange={(e)=> setPassword(e.target.value)} required/>
                    <input type="password" placeholder="confirma senha" value={confirmPsswd} onChange={(e)=> setConfirmPsswd(e.target.value)} required />
                    <button type="submit">Cadastrar</button>
                </form>
                <Link  to="/">
                    <p>
                        já tem uma conta? Entre agora!
                    </p>
                </Link>
            </StyleSignUp>

        </>
    )
}

const StyleSignUp = styled.div`
    width: 90%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
img{
    
    width: 60%;
    height: auto;
    margin-top: 40px;
}
input{
    width: 80%;
    height: 45px;
    border-radius: 5px;
    font-size: 18px;
    margin-bottom: 10px;
}
form{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    cursor: pointer;
}
p{
    font-size: 22px;
    color: white;
}
`
