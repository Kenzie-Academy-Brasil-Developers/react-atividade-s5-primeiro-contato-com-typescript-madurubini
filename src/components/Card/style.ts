import styled from "styled-components";

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ffffff;
  width: 40%;
  justify-content: center;
  margin: 0 auto;
  border-radius: 20px;
  background-color: #1ea896;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border: 1px solid #ffffff;
  width: 80%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 10px;
  padding: 10px;
  background-color: #1ea896;
`;

export const StyledInput = styled.div`
  width: 70%;
  padding: 2px;
  display: flex;
  flex-direction: row;
`;

export const BlankInput = styled.input`
  width: 75%;
  padding: 3px;
  border: 1px solid #ffffff;
  border-radius: 10px;
`;

export const StyledLabel = styled.label`
  width: 20%;
`;

export const Button = styled.button`
  width: 25%;
  font-family: "Comfortaa", cursive;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid #ffffff;
  margin: 1%;
  background-color: #1ea896;
  color: #ffffff;

  :hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;
