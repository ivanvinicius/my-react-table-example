import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    li {
      list-style: none;

      & + li {
        margin-top: 30px;
      }

      a {
        text-decoration: none;
        color: var(--color-purple);
        transition: color 0.4s ease;

        &:hover {
          color: var(--color-orange);
        }
      }
    }
  }
`;
