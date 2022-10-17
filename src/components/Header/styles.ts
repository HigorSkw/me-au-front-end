import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  padding: 0 4rem;

  width: 100%;
  height: 4.251rem;

  background: rgba(var(--logoOrange), 1);

  & > img {
    width: 249px;
    height: 91px;
    cursor: pointer;
  }

  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    width: 50%;

    li,
    a {
      font-family: "Public Sans";
      font-weight: 400;
      font-size: 16px;
    }
  }

  .button--container {
    display: flex;
    align-items: center;
    margin-left: 60px;
  }
`;

export const Bandeiras = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  gap: 0.3rem;

  font-family: "Public Sans";
  font-weight: 400;
  font-size: 12px;
`;
