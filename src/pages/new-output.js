import styled from "styled-components"
import React,{ useState } from "react"
import axios from "axios"
import { AuthContext } from "../constants/data"
import { BASE_URL } from "../constants/data"
import { useNavigate } from "react-router-dom"

export default function NewOutput (){
    const [value, setValue] = useState("")
    const [description, setDescription] = useState("")
    const { token } = React.useContext(AuthContext)
    const navigate= useNavigate()

    function insertOutput(e){
        e.preventDefault()
        const spendings ={
            value:value,
            description:description,
            type:"saida"
        }
            
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        axios.post(`${BASE_URL}/transactions`,spendings,config)
            .then((res) => {
               navigate("/home")
                console.log(res)
            })
            .catch(err => err.response.data)
    }


    return (
        <>
            <StyleOutput>
                <p>Nova saída</p>
                <form onSubmit={insertOutput}>
                    <input type="number" placeholder="valor" value={value} onChange={(e) => setValue(e.target.value)} required />
                    <input type="text" placeholder="descrição" value={description} onChange={(e) => setDescription(e.target.value)} required />
                    <button >
                        salvar saída
                    </button>
                </form>

            </StyleOutput>
        </>
    )
}

const StyleOutput = styled.div`
  width: 90%;
display: flex;
flex-direction: column;
align-items: center;

form{
    width: 100%;
    margin: 0 auto;
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
    width: 80%;
    font-size: 40px;
    font-weight: 600;
    color: white;
    margin-bottom: 60px;

}

`