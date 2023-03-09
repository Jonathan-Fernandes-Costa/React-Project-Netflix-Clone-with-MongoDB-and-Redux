import React from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
export default function Signup(){
    return(
        <Container>
            <BackgroundImage/>
            <Header/>
            <div className="body flex column a-center j-center">
                <div className="text flex column">
                    <h1>Filmes, séries e muito mais.</h1>
                    <h1>Sem limites.</h1>
                    <h4>Assista onde quiser. Cancele quando quiser.</h4>
                    <h6>Quer assistir? Informe seu email parar criar ou reiniciar sua assinatura.</h6>
                    <div className="form">
                        <input type="email" placeholder="Email" name="email"/>
                        <input type="password" placeholder="Senha" name="password"/>
                        <button>Vamos Lá</button>
                    </div>
                    <button>Log in</button>
                </div>
            </div>
        </Container>
    )
}
const Container = styled.div``;