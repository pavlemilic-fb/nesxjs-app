import { useSelector } from 'react-redux';
import Link from "next/link";
import styled from "styled-components";

import { selectGetMeQueryResponse } from '@/api/auth';

const Header = () => {
  const user = useSelector(selectGetMeQueryResponse);
  console.log({ user });
  return (
    <StyledHeader>
      <Link href="/">Home</Link>
      {!user && (
        <span>
          <Link href="/login">Login</Link>
          <Link href="/signup">Signup</Link>
        </span>
      )}
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  padding: 20px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`;
