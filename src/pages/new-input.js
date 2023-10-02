import styled from "styled-components"
import { useState } from "react"
import { AuthContext } from "../constants/data"
import React from "react"
import axios from "axios"
import { BASE_URL } from "../constants/data"
import { useNavigate } from "react-router-dom"

export default function NewInput() {

    const { token } = React.useContext(AuthContext)
    const navigate= useNavigate()
    const [value, setValue] = useState("")
    const [description, setDescription] = useState("")


    function insertInput(e){
        e.preventDefault()
        const earning ={
            value:value,
            description:description,
            type:"entrada"
        }
            
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        axios.post(`${BASE_URL}/transactions`,earning,config)
            .then((res) => {
               navigate("/home")
                console.log(res)
            })
            .catch(err => err.response.data)
    }




    return (
        <>
            <StyleInput>
                <p>Nova entrada</p>
                <form onSubmit={insertInput}>
                    <input type="number" placeholder="valor" value={value} onChange={(e) => setValue(e.target.value)} required />
                    <input type="text" placeholder="descrição" value={description} onChange={(e) => setDescription(e.target.value)} required />
                    <button >
                        salvar entrada
                    </button>
                </form>

            </StyleInput>
        </>
    )
}

const StyleInput = styled.div`
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
    cursor: pointer;
}
p{
    width: 80%;
    font-size: 40px;
    font-weight: 600;
    color: white;
    margin-bottom: 60px;

}

`