import styled from "styled-components";

export const CardBox = styled.div`
  width: 125px;
  height: 110px;
  border-radius: 5px;
  background-color: var(--white);
  color: var(--dark-blue);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  div:first-child {
    gap: 0px;
    width: 100%;
    height: 40px;
    border-radius: 5px 5px 0 0;
    background-color: var(--light-blue);
    color: var(--white);
    text-align: center;
    padding-top: 10px;
    font-weight: 600;
  }
  p {
    padding-top: 5px;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  svg {
    font-size: 1.3rem;
    cursor: pointer;
    color: red;
  }
  svg:first-child {
    color: var(--light-blue);
  }
`;

export const EditTechBox = styled.div`
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
