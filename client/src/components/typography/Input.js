import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Input = forwardRef((props, ref) => (
    <StyledContainer fullWidth={props}>
        {props.errorMessage && (
            <StyledErrorMessage>{props.errorMessage}</StyledErrorMessage>
        )}
        <StyledInput ref={ref} {...props} />
    </StyledContainer>
));

Input.displayName = 'Input';

Input.defaultProps = {
    fullWidth: false,
    errorMessage: null,
};

Input.propTypes = {
    fullWidth: PropTypes.bool,
    errorMessage: PropTypes.string,
};

const StyledContainer = styled.div`
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'inherit')};
`;

const StyledInput = styled.input`
    padding: 10px;
    border-style: solid;
    border-width: 1px;
    border-color: ${({ errorMessage, theme }) =>
        errorMessage ? theme.colors.error : theme.colors.secondary};
    border-radius: 3px;
    font-size: 16px;
    outline: #999;
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'inherit')};
    box-sizing: border-box;
`;

const StyledErrorMessage = styled.div`
    text-align: left;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.colors.error};
    font-size: 14px;
    &::first-letter {
        text-transform: capitalize;
    }
`;
