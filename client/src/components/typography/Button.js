import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Button = forwardRef(({ children, ...rest }, ref) => {
    return <StyledButton {...rest} ref={ref}>{children}</StyledButton>;
});

Button.propTypes = {
    children: PropTypes.node.isRequired,
};

Button.displayName = "Button";

export const ButtonPrimary = styled(Button)`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
`;

const StyledButton = styled.button`
    padding: 10px 15px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'inherit')};
`;
