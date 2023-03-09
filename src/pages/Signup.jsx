import React from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
export default function Signup(){
    return(
        <Container>
            <BackgroundImage/>
            <div className="content">
            <Header login/>
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
            </div>
        </Container>
    )
}
const Container = styled.div`
    position: relative;
    .content{
        position:absolute;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.5);
        height: 100vh;
        width: 100vw;
        display: grid;
        grid-template-rows: 15vh 85vh;
    }
    .body {
        gap: 1rem;
        .text {
          gap: 1rem;
          text-align: center;
          font-size: 2rem;
          h1 {
            padding: 0 25rem;
          }
        }
        .form {
          display: grid;
          /*grid-template-columns: ${({ showPassword }) =>
            showPassword ? "1fr 1fr" : "2fr 1fr"};*/
          width: 60%;
          input {
            color: black;
            border: none;
            padding: 1.5rem;
            font-size: 1.2rem;
            border: 1px solid black;
            &:focus {
              outline: none;
            }
          }
          button {
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            font-weight: bolder;
            font-size: 1.05rem;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          border-radius: 0.2rem;
          font-weight: bolder;
          font-size: 1.05rem;
        }
      }
    }
`;