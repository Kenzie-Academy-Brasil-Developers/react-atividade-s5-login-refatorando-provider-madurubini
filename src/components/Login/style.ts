import styled from "styled-components";

export const Container = styled.div`
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  width: 55vw;
  background-color: #dfafa7;

  @media (min-width: 768px) {
    max-width: 450px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const Input = styled.input`
  width: 90%;
  height: 35px;
  margin: 3% auto;
  background-color: transparent;
  border: 3px solid #7d463c;
  border-radius: 5px;
  color: #642f26;

  ::placeholder {
    color: #7d463c;
    padding: 2%;
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;
  }
`;

export const Button = styled.button`
  width: 93%;
  color: #dfafa7;
  margin: 3% auto;
  background-color: #7d463c;
  border: 3px solid #7d463c;
  border-radius: 5px;
  padding: 2%;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;

  :hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`;

export const Title = styled.div`
  font-weight: bold;
  color: #7d463c;
  font-size: 40px;
`;

export const Errors = styled.span`
  color: red;
  font-size: 14px;
  text-align: start;
  margin-left: 20px;
  font-weight: bold;
`;

export const Text = styled.p`
  color: #7d463c;
  font-size: 20px;
`;

export const Avatar = styled.div`
  width: 25%;
  height: 25%;
  border: 3px solid #7d463c;
  border-radius: 100%;
  font-size: 60px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    filter: brightness(0.9);
  }
`;
