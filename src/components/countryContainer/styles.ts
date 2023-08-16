import { styled } from "styled-components";

const Container = styled.main`
  /* display: flex;
  flex-wrap: wrap;
  gap: 3rem 8.5rem; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  gap: 3rem 8.5rem;
  margin-bottom: 1rem;

  @media(max-width: 1430px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem 2.5rem;
  }

  @media(max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem 2.5rem;
  }

  @media(max-width: 560px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 3rem 2.5rem;
    justify-items: center;
  }

`

export const Styles = {
  Container
}