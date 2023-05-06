import Link from "next/link";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <Link href="/">Home</Link>
      <span>
        <Link href="/login">Login</Link>
        <Link href="/signup">Signup</Link>
      </span>
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
