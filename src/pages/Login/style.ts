import styled, { keyframes } from "styled-components";

const appearSlowly = keyframes`
from {
  opacity:0;
}
to {
  opacity: 1;
}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1170px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  background-color: var(--light-blue);
  height: 350px;
  max-height: 60vh;
  width: 335px;
  border-radius: 40px;
  color: var(--white);
  padding: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: var(--shadow);
  animation: ${appearSlowly} 1.3s;
  h2 {
    background-color: transparent;
    font-weight: 600;
    font-size: 1.9rem;
  }
`;
