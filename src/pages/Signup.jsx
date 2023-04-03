import { createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { firebaseAuth } from "../utils/firebase-config";
export default function Signup() {
  const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formValues, setFormValues] = useState({
      email:"",
      password:"",
    });
    const handleSignIn = async () =>{//Passando os dados para o firebase
      try{
        const {email, password} = formValues;
        await createUserWithEmailAndPassword(firebaseAuth, email, password)//Passando os dados do forms para o firebase
      }catch(err){
        console.log(err)
      }
    }

    onAuthStateChanged(firebaseAuth,(currentUser) => {
      if(currentUser) navigate("/")
    })
  return (
    <Container showPassword={showPassword}>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Filmes, séries e muito mais.</h1>
            <h1>Sem limites.</h1>
            <h4>Assista onde quiser. Cancele quando quiser.</h4>
            <h6>Quer assistir? Informe seu email parar criar ou reiniciar sua assinatura.</h6>
          </div>
          <div className="form">
            <input type="email" placeholder="Email" name="email" value={formValues.email} onChange={
              (e)=>setFormValues({...formValues, [e.target.name]:e.target.value,
              })}/>
            {showPassword && (<input type="password" placeholder="Senha" name="password" value={formValues.password} onChange={
              (e)=>setFormValues({...formValues, [e.target.name]:e.target.value,
              })} />)}
            {!showPassword && <button onClick={()=> setShowPassword(true)}>Vamos Lá</button>}
          </div>
          <button onClick={handleSignIn}>Log in</button>
        </div>
      </div>
    </Container>
  )
}
const Container = styled.div`
.content {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 15vh 85vh;
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
      grid-template-columns: ${({ showPassword }) =>
        showPassword ? "1fr 1fr" : "2fr 1fr"};
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
        border-radius: 0rem;
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
      border-radius: 0.5rem;
      font-weight: bolder;
      font-size: 1.05rem;
    }
    
  }
  
}
`;