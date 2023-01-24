import { Link } from "react-router-dom"
import styled from "styled-components"
import vector from "../images/Vector.png"
import { useState } from "react"

export default function Home() {

    const [transactions, setTransactions] = useState([{
        type: "entrada",
        value: 40,
        description: "Apostas esportivas"
    }, {
        type: "entrada",
        value: 40,
        description: "Apostas esportivas"
    }, {
        type: "entrada",
        value: 40,
        description: "Apostas esportivas"
    }])

    let amount =0
    for(let i=0;i<transactions.length;i++){
        amount+=transactions[i].value
    }

    return (
        <>
            <StyleHome>
                <div className="header">
                    <p>Olá, Fulano</p>
                    <img src={vector} alt="img" />
                </div>
                <div className="main">
                    {transactions.length < 1 ?
                        <p className="p0">
                            não há registros de entrada ou saida.
                        </p> : <span>
                            {transactions.map((t) => <div>
                                <p>aposta</p>
                                <p>{t.value}</p>
                            </div>)}
                            <div className="amount">
                                <p className="p1">Saldo</p>
                                <p className="p2">R${amount}</p>
                            </div>
                        </span>
                    }

                </div>
                <div className="footer" >
                    <div>
                        <Link to="/nova-entrada">
                            <ion-icon name="add-circle-outline"></ion-icon>
                        </Link>

                        <p>Nova entrada</p>
                    </div>
                    <div>
                        <Link to="/nova-saida">
                            <ion-icon name="remove-circle-outline"></ion-icon>
                        </Link>

                        <p>Nova saída</p>
                    </div>
                </div>
            </StyleHome>
        </>
    )
}

const StyleHome = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .header{
        width: 100%;
        height: 100px;
       display: flex;
       justify-content: space-between;
       align-items: center;
       img{
        width: 25px;
        height: 25px;
       }
       p{
        font-size: 40px;
        color: white;
       }
    }

    .main{
        width: 100%;
        height: 400px;
        background-color: white;
        border-radius: 5px;
    
        display: flex;
        flex-direction: column;
        P{
            font-size: 23px;
        }
        .P0{
            color: gray;
            margin-left: 10px;
        }
        span{
            position: relative;
            width: 100%;
            height: 400px;
            background-color: aliceblue;
            div{
           
            display: flex;
            justify-content: space-between;
        }
            .amount{
                width: 100%;
                position: absolute;
                display: flex;
                justify-content: space-between;
                text-align: end;
                background-color: gray;
                .p1{
                    font-size: 30px;
                    font-weight: 600;
                    color: black;
                   
                }
                .p2{
                    color: black;
                    font-size: 30px;
                }
               bottom: 0px;
               
            }
        }
        
    }

     .footer{
        width: 100%;
        height: 150px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        div{
            width: 47%;
            height: 130px;
            border-radius: 5px;
            background-color:#A328D6 ;
            position: relative;
           ion-icon{
            margin-left: 5px;
            width: 35px;
            height: 35px;
            color: white;
           }
           p{
            position: absolute;
            bottom: 0;
            left: 5px;
            font-size: 23px;
            color: white;
           }
        }
    }


`