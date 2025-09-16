import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${props => (props.disabled ? "#9ca3af" : "#3b82f6")};
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${props => (props.disabled ? "#9ca3af" : "#2563eb")};
  }
`;

export default function CSSinJSButton({ children, disabled, onClick }) {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
