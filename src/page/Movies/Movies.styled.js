import styled from "@emotion/styled";


export const Form = styled.form`
  display: flex;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
  margin-right: 16px;
  background-color: #425466;
  border: 2px solid teal;
  outline: none;
  color: white;
  font-size: 18px;
  font-weight: 500;
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  font-size: 18px;
  background-color: #34424f;
  border: none;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: teal;
    border-color: teal;
  }
`;


