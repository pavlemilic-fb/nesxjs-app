import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';

import { useLoginMutation } from "@/api/auth";

import { Button, Input } from "@/components/typography";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const Login = () => {
  const router = useRouter();
  // const { register, handleSubmit } = useForm();
  const [email, setEmail] = useState('test@test.com');
  const [password, setPassword] = useState('test123');

  const [login, { data, isSuccess }] = useLoginMutation();

  console.log({ isSuccess });

  const loginFunc = () => {
    login({ email, password }); // <- ovo ne saceka zapravo, tj kada se ispuni odmah nakon await on ga vrati na false,
    // i onda da bi se iskoristio taj jedan momenat kad aje tru mora useEffect
  };

  useEffect(() => {
    if (!isSuccess) {
      return;
    }
  
    Cookies.set('accessToken', data.accessToken);
    Cookies.set('refreshToken', data.refreshToken);
    router.push('/');
  }, [isSuccess, data]);

  return (
    <StyledContainer>
      <StyledForm
        // onSubmit={loginFunc}
      >
        <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="button" onClick={loginFunc}>Login</Button>
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
