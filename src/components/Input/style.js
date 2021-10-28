import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  color: var(--white);
  margin-bottom: 10px;
  max-width: 195px;
  p {
    background-color: transparent;
    font-weight: 500;
    span {
      color: var(--dark-blue);
      font-size: 0.9rem;
    }
  }
`;

export const InputBox = styled.div`
  border-radius: 5px;
  border: 2px solid var(--dark-blue);
  background-color: var(--white);
  padding: 5px;
  padding-top: 7px;
  width: 100%;
  height: 40px;

  input {
    background-color: transparent;
    border: none;
  }
  input:focus {
    outline: none;
  }
`;
