import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: var(--white);
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex: 0;
  height: 70px;
  padding: 5px;
  div {
    max-width: 1170px;
    display: flex;
    justify-content: space-between;
    flex: 1;
    height: 45px;
    figure {
      height: 100%;
      cursor: pointer;
      img {
        height: 100%;
      }
    }
  }
  @media (min-width: 768px) {
    div {
      height: 70px;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-evenly;
  li {
    a {
      font-size: 0.9rem;
      color: var(--light-blue);
      font-weight: 500;
    }
    p {
      font-size: 0.9rem;
      color: var(--light-blue);
      font-weight: 500;
      background-color: transparent;
    }
  }

  @media (min-width: 768px) {
    flex: 0;
    li {
      cursor: pointer;
      text-align: center;
      padding: 0 10px;
      transition-duration: 0.3s;
      a {
        box-sizing: border-box;
        white-space: nowrap;
        word-wrap: none;
        font-size: 1.3rem;
        transition-duration: 0.5s;
      }
      p {
        box-sizing: border-box;
        white-space: nowrap;
        word-wrap: none;
        font-size: 1.3rem;
        transition-duration: 0.5s;
      }
    }

    li:hover {
      margin-top: -3px;
      margin-bottom: 3px;

      & a {
        filter: drop-shadow(8px 8px 4px black);
      }
      & p {
        filter: drop-shadow(8px 8px 4px black);
      }
    }
  }
`;
