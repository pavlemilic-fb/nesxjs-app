import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import { Button, Input } from "@/components/typography";

const Login = () => {
  const { register, handleSubmit } = useForm();
  return (
    <StyledContainer>
      <StyledForm
        onSubmit={handleSubmit(async (e) => {
          const res = await fetch("http://localhost:3333/auth/login", {
            method: "POST",
            body: JSON.stringify(e),
            headers: { "Content-type": "application/json" },
          });
          const user = await res.json();
          localStorage.setItem('accessToken', user.accessToken);
        })}
      >
        <Input type="email" {...register("email")} />
        <Input type="password" {...register("password")} />
        <Button type="subimt">Login</Button>
      </StyledForm>
    </StyledContainer>
  );
};

export default Login;

const StyledContainer = styled.div`
  height: 100%;
`;

const StyledForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 350px;
  gap: 10px;
  transform: translate(-50%, -50%);
  top: 37%;
  left: 50%;
`;
