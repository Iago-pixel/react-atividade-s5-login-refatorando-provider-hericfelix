import styled, { keyframes } from "styled-components";

const appearFromRight = keyframes`
from {
  opacity:0;
  transform: translateX(50px)
}
to {
  opacity: 1;
  transform: translateX(0px)
}
`;

const appearFromLeft = keyframes`
from {
  opacity:0;
  transform: translateX(-50px)
}
to {
  opacity: 1;
  transform: translateX(0px)
}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 1170px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  padding-top: 20px;
  figure {
    display: none;
  }

  button {
    color: var(--white);
  }
  @media (min-width: 768px) {
    justify-content: space-between;
    figure {
      display: block;
      background-color: transparent;
      animation: ${appearFromRight} 1.3s;
      img {
        width: 600px;
      }
    }
  }
`;

export const Form = styled.form`
  background-color: var(--light-blue);
  width: 335px;
  border-radius: 40px;
  color: var(--white);
  padding: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: var(--shadow);
  animation: ${appearFromLeft} 1.3s;
  h2 {
    background-color: transparent;
    font-weight: 600;
    font-size: 1.9rem;
    margin-bottom: 30px;
  }
  :nth-child(1n) {
    margin-bottom: 10px;
  }
`;

export const SelectBox = styled.div`
  text-align: left;
  color: var(--white);
  margin-bottom: 10px;
  p {
    background-color: transparent;
    font-weight: 500;
    span {
      color: red;
    }
  }
  select {
    border-radius: 5px;
    border: 2px solid var(--dark-blue);
    background-color: var(--white);
    padding: 5px;
    padding-top: 7px;
    width: 195px;
    height: 40px;
  }
`;

export const TextAreaBox = styled.div`
  text-align: left;
  color: var(--white);
  margin-bottom: 10px;
  p {
    background-color: transparent;
    font-weight: 500;
    span {
      color: var(--dark-blue);
      font-size: 0.9rem;
    }
  }
  textarea {
    border-radius: 5px;
    border: 2px solid var(--dark-blue);
    background-color: var(--white);
    padding: 5px;
    padding-top: 7px;
    width: 195px;
  }
  textarea:focus {
    outline: none;
  }
`;
