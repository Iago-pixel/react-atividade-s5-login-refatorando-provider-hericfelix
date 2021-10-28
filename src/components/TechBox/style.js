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

export const Container = styled.div`
  width: 100%;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 768px) {
    padding: 40px;
    height: calc(100vh - 100px);
  }
`;
export const CardBox = styled.div`
  width: 100%;
  max-width: 730px;
  background-color: var(--light-blue);
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  animation: ${appearFromRight} 1.3s;
  h2 {
    background-color: transparent;
    color: var(--white);
    font-weight: 600;
    margin-bottom: 10px;
    padding-left: 25px;
  }
  > div {
    background-color: var(--dark-blue);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    border-radius: 0 0 7px 7px;
    padding: 10px;
    gap: 10px;
  }
  @media (min-width: 768px) {
    > div {
      justify-content: flex-start;
      padding: 30px;
      gap: 40px;
    }
  }
`;
export const AddCard = styled.div`
  width: 125px;
  height: 110px;
  border-radius: 5px;
  justify-content: center;
  display: flex;
  align-items: center;
  background-color: var(--white);
  font-size: 4rem;
  color: var(--light-blue);

  @media (min-width: 768px) {
    cursor: pointer;
  }
`;

export const AddNewTechBox = styled.div`
  position: fixed;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Form = styled.form`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--light-blue);
  height: 330px;
  max-height: 60vh;
  width: 300px;
  border-radius: 40px;
  color: var(--white);
  padding: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  svg {
    color: red;
    font-size: 1.7rem;
    text-align: right;
    margin-left: auto;
    margin-right: 15px;
    cursor: pointer;
  }
  h2 {
    background-color: transparent;
    font-weight: 600;
    font-size: 1.9rem;
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
