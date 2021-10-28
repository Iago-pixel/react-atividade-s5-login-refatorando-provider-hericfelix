import styled, { keyframes } from "styled-components";

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
  width: 100%;
  max-width: 1170px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  padding-top: 20px;
  hr {
    display: none;
  }

  @media (min-width: 768px) {
    padding-top: 0;
    flex-direction: row;
    hr {
      display: block;
      border-right: 0.5px solid black;
      height: 100%;
    }
  }
`;

export const ProfileCard = styled.div`
  min-height: 600px;
  width: 300px;
  background-color: var(--light-blue);
  border-radius: 10px;
  text-align: center;
  color: var(--white);
  animation: ${appearFromLeft} 1.3s;
  div:first-child {
    background-color: var(--dark-blue);
    border-radius: 10px 10px 0 0;
    display: flex;
    height: 200px;
    justify-content: center;
    align-items: center;
    figure {
      width: 155px;
      height: 155px;
      border-radius: 50%;
      img {
        border-radius: 50%;
      }
    }
  }
  div:last-child {
    padding: 10px;
  }
  h2 {
    font-weight: 600;
    font-size: 2.3rem;
    margin-bottom: 20px;
  }

  h3 {
    font-weight: 500;
    font-size: 1.4rem;
  }
  p {
    font-weight: 400;
    color: var(--dark-blue);
  }

  @media (min-width: 768px) {
    margin-right: 30px;
  }
`;
