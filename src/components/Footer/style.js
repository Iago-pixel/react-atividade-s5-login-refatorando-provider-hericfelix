import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: var(--dark-blue);
  padding: 6px;
  div {
    margin: 0 auto;
    height: 100%;
    max-width: 1170px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    a {
      display: flex;
      align-items: center;
      color: var(--light-blue);
      font-size: 1.5rem;
      p {
        background-color: var(--dark-blue);
        color: var(--white);
        font-size: 1.1rem;
        font-weight: 500;
        padding-left: 5px;
      }
    }
    a:last-child {
      padding-left: 15px;
    }
  }
`;
