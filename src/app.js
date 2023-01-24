import styled from "styled-components"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import NewInput from "./pages/new-input"
import NewOutput from "./pages/new-output"
import SignIn from "./pages/sign-in"
import SignUp from "./pages/sign-up"

export default function App() {

    return (
        <>
            <BrowserRouter>
                <BaseStyle>
                    <Routes>
                        <Route path="/" element={<SignIn />} />
                        <Route path="/cadastro" element={<SignUp />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/nova-entrada" element={<NewInput />} />
                        <Route path="/nova-saida" element={<NewOutput />} />
                    </Routes>
                </BaseStyle>

            </BrowserRouter>
        </>
    )
}

const BaseStyle = styled.div`
max-width:600px;
height: 100vh;
background-color: purple;
margin: 0 auto;
border: 1px solid gray;
display: flex;
justify-content: center;
`