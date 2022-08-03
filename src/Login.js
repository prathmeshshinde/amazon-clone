import React from "react";
import styled from "styled-components";
import { auth, provider } from "./firebase_config";

function Login({ setUser }) {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        let user = result.user;
        let newUser = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        };
        localStorage.setItem("user", JSON.stringify(newUser));
        setUser(newUser);
        console.log(user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Container>
      <Content>
        <AmazonLogo src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" />
        <LoginTitle>Sign In into Amazon</LoginTitle>
        <LoginButton onClick={signIn}>Sign In with Google</LoginButton>
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  padding: 100px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 1px 3px grey;
  text-align: center;
  @media screen and (max-width: 426px) {
    width: 300px;
    padding: 50px 0px 50px 0px;
  }
`;

const LoginTitle = styled.h1`
  @media screen and (max-width: 426px) {
    font-size: 28px;
  }
`;

const AmazonLogo = styled.img`
  height: 60px;
  margin-bottom: 40px;
`;

const LoginButton = styled.button`
  margin-top: 50px;
  background-color: #f0c14b;
  height: 40px;
  border-radius: 4px;
  border: 2px solid #a88734;
  font-size: 16px;
  padding: 4px 8px;
  cursor: pointer;
  @media screen and (max-width: 426px) {
    width: 200px;
  }
`;
